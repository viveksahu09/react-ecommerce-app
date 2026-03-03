import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { totalQuantity } = useCart();

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

      <Link to="/cart" className="position-releative">
      Cart {
        totalQuantity > 0 && (
          <span className="badge bg-primary ms-2" >
            {totalQuantity}
          </span>
        )
      }
      </Link>
    </nav>
  );
}