import { Card, CardBody, Form, FormCheck } from "react-bootstrap";

function FiltersSidebar({ filters, setFilters, clearAllFilters }) {
  const toggleCategory = (category) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const toggleRating = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating.includes(rating)
        ? prev.rating.filter((r) => r !== rating)
        : [...prev.rating, rating],
    }));
  };

  return (
    <>
      {/* Sidebar Title */}
      <h4 className="mb-3 d-flex justify-content-between">
        Filters
        <button className="btn btn-sm btn-outline-danger" onClick={clearAllFilters}>
          Clear All
        </button>
      </h4>

      {/* Category Filter */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Category</Card.Title>
          <Form.Check
            type="checkbox"
            label="Electronics"
            checked={filters.categories.includes("electronics")}
            onChange={() => toggleCategory("electronics")}
          />
          <Form.Check
            type="checkbox"
            label="Jewelery"
            checked={filters.categories.includes("jewelery")}
            onChange={() => toggleCategory("jewelery")}
          />
          <Form.Check
            type="checkbox"
            label="Men's Clothing"
            checked={filters.categories.includes("men's clothing")}
            onChange={() => toggleCategory("men's clothing")}
          />
          <FormCheck
            type="checkbox"
            label="Women's Clothing"
            checked={filters.categories.includes("women's clothing")}
            onChange={() => toggleCategory("women's clothing")}
          />
        </Card.Body>
      </Card>

      {/* Price Filte */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Price</Card.Title>

          {/* 🔹 Show selected price */}
          <p>Up to ${filters.priceRange[1]}</p>

           {/* 🔹 Slider */}
           <input type="range" min="0" max="5000" value={filters.priceRange[1]} 
           onChange={(e)=>setFilters((prev)=> ({
            ...prev, 
            priceRange: [0, Number(e.target.value)]
           }))} 
            className="w-100"
           />
        </Card.Body>
      </Card>

      {/* Rating Filter */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Rating</Card.Title>
          <Form.Check
            type="checkbox"
            label="4★ & above"
            checked={filters.rating.includes("4★ & above")}
            onChange={() => toggleRating("4★ & above")}
          />
          <Form.Check
            type="checkbox"
            label="3★ & above"
            checked={filters.rating.includes("3★ & above")}
            onChange={() => toggleRating("3★ & above")}
          />
          <Form.Check
            type="checkbox"
            label="2★ & above"
            checked={filters.rating.includes("2★ & above")}
            onChange={() => toggleRating("2★ & above")}
          />
          <Form.Check
            type="checkbox"
            label="1★ & above"
            checked={filters.rating.includes("1★ & above")}
            onChange={() => toggleRating("1★ & above")}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default FiltersSidebar;
