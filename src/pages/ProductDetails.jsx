import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/productService";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProduct();
  }, [id]);

  if (!product) {
    return<p style={{padding:"40px"}}>Loading...</p>
  }
  console.log(product);

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{width:"300px", margin:"20px 0"}}
      />
      <p><strong>Price:</strong> ₹ {product.price}</p>

      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
