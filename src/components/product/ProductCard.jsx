import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // ⛔ stop Link navigation
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-link">
      <div className="product-card">
        {/* Product image */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        {/* Product Info */}
        <div className="product-info">
          <h3 className="product-title">
            {product.title.substring(0, 40)}...
          </h3>

          <p className="product-price">₹ {product.price}</p>

          <button
            className="Product-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;