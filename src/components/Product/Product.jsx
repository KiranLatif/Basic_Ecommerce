import "./product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { AddToCart } from "../../store/actions";
import { addToCart } from "../../reduxtoolkit/cartSlice";

const Product = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const NavigateToDetail = () => {
    // navigate hook provides a function that allows you to redirect users to different paths within your app without requiring a Link component.
    navigate(`/productdetail/${data?.id}`);
  };
  const AddCart = () => {
    let payload = {
      id: data?.id,
      name: data?.title,
      price: data?.price,
      qty: 1,
      image: data?.images[0],
    };
    console.log("Add");

    dispatch(addToCart(payload));
  };
  return (
    <div className="productWrapper">
      <div className="imgWrapper" onClick={NavigateToDetail}>
        <img src={data?.images[0]} alt={"product image"} />
      </div>
      <p>{data?.title}</p>
      <p>{data?.price}</p>
      <button onClick={AddCart}>Add to cart</button>
    </div>
  );
};

export default Product;
