import { useEffect, useState } from "react";
import fetchProduct from "../services/productService";
import ProductCard from "../components/product/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import FiltersSidebar from "../components/filters/FiltersSidebar";
import { filterProducts } from "../utils/filterProduct";
import ActiveFilters from "../components/filters/ActiveFilters";

function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    rating: [],
    priceRange: [0, 5000],
  });

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      rating: [],
      priceRange: [0, 5000],
    });
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => {
          return item !== category;
        }),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceChange = (price) => {
    if (selectedPrice.includes(price)) {
      setSelectedPrice(
        selectedPrice.filter((item) => {
          return item !== price;
        }),
      );
    } else {
      setSelectedPrice([...selectedPrice, price]);
    }
  };

  const handleRatingChange = (rating) => {
    if (selectedRating.includes(rating)) {
      setSelectedRating(
        selectedRating.filter((item) => {
          return item !== rating;
        }),
      );
    } else {
      setSelectedRating([...selectedRating, rating]);
    }
  };

  const filteredProducts = filterProducts(products, filters);

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
            <FiltersSidebar
              filters={filters}
              setFilters={setFilters}
              clearAllFilters={clearAllFilters}
            />
          </Col>

          {/* 🔹 Main Content */}
          <Col md={9} className="pd-4">
            {/* ✅ Active Filters HERE */}
            <div className="mb-3">

            <ActiveFilters filters={filters} setFilters={setFilters} />
            </div>

            {/* 🔹 Products Grid */}
            <Row>
              {filteredProducts.length === 0 ? (
                <p className="text-center mt-4">No products found</p>
              ) : (
                filteredProducts.map((product) => (
                  <Col key={product.id} xs={12} md={4} lg={3} className="mb-4">
                    <ProductCard product={product} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
