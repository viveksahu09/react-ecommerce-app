  import { useEffect, useState } from "react";
import  fetchProduct  from "../services/productService";
import ProductCard from "../components/product/ProductCard";

import "./Home.css"

const Home = () => {
  const [product, setProduct] = useState([]);

  // Load Products from API
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct();
        setProduct(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    loadProduct();
  },[]);
  return (
    <div className="home">
      <h1 className="home-title">All products</h1>
      <div className="product-grid">
        {product.map((item)=>(
          <ProductCard key={item.id} product={item}/>
        ))}
      </div>
    </div>
  );
};

export default Home;