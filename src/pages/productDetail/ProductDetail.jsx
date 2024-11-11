import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import "./productdetail.css";
// useParams  is used to access URL parameters in a route component. It returns an object containing key-value pairs.
const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState();
  useEffect(() => {
    GetSingleProductData();
  }, []);
  async function GetSingleProductData() {
    try {
      let result = await fetch(`https://dummyjson.com/products/${id}`);
      let jsonData = await result.json();
      console.log(jsonData);
      setProductData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="productDetailWrapper">
      <ImageViewer imagesData={productData} />
      <div className="prodctsDetailWrapper">
        <br /><p> <strong> Title: </strong> {productData?.title}</p> <br />
        <p> <strong>Description: </strong>  {productData?.description}</p><br />
        <p> <strong>Price: </strong>  {productData?.price}</p><br />
        <p> <strong>DiscountPercentage: </strong>  {productData?.discountPercentage}%</p>
      </div>
    </div>
  );
};

export default ProductDetail;
