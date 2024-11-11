import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";
import "./navbar.css";

const Navbar = () => {
  const cartDatalength = useSelector((state) => state.cart?.length);
  return (
    <div className="navbar_main">
      <h1>Basic Ecomm</h1>
      <div className="navbar_secondChild">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}> Cart {cartDatalength}</Link>
      </div>
    </div>
  );
};

export default Navbar;
