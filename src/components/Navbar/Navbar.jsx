import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar" style={{ padding: "15px 20px" }}>
      {/* Logo */}
      <h2 className="logo">MyStore</h2>

      {/* Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div>Cart ({cartItems.length})</div>
    </nav>
  );
}