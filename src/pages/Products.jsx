import { useEffect, useState } from "react";
import fetchProduct from "../services/productService";
import ProductCard from "../components/product/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import FiltersSidebar from "../components/filters/FiltersSidebar";

function Products() {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProduct();
        setProducts(data);
        console.log("Products:", data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    loadProducts();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <FiltersSidebar />
          </Col>

          <Col md={9} className="pd-4">
            <Row>
              {products.map((product) => {
                return (
                  <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
                    <ProductCard product={product} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
