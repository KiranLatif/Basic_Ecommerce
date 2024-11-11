import "./home.css";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { Fragment, useEffect, useState } from "react";
import Product from "../../components/Product/Product";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   GetProducts();
  // }, []);
  useEffect(() => {
    if (!searchValue) {
      GetProducts();
    }
  }, [searchValue]);
  const GetProducts = async (searchValue) => {
    let allProductsAPI = "https://dummyjson.com/products";
    let searchProductsAPI = `https://dummyjson.com/products/search?q=${searchValue}`;
    let selectedAPI = searchValue ? searchProductsAPI : allProductsAPI;

    try {
      setLoading(true);
      let result = await fetch(selectedAPI);
      let data = await result.json();
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const SearchProduct = () => {
    if (!searchValue) return;
    GetProducts(searchValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      SearchProduct();
    }
  };

  return (
    <div className="HomeMain">
      <div className="searchWrapper">
        <input
          placeholder="Search Product..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <FaSearch className="searchIcon" onClick={SearchProduct} />
      </div>
      {searchValue && (
        <span className="searchText">
          search text: {searchValue}
          <RiDeleteBack2Line
            style={{ fontSize: "28px", cursor: "pointer" }}
            onClick={() => setSearchValue("")}
          />
        </span>
      )}
      <div className="productsWrapper">
        {!loading ? (
          products?.length > 0 ? (
            products?.map((item, ind) => (
              <Fragment key={item?.id}>
                <Product data={item} />
              </Fragment>
            ))
          ) : (
            <span>No Products found</span>
          )
        ) : (
          <span style={{ fontSize: "18px" }}>loading....</span>
        )}
      </div>
    </div>
  );
};

export default Home;
