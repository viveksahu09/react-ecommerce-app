import { Card, CardBody, Form, FormCheck } from "react-bootstrap";

function FiltersSidebar({ selectedCategories, onCategoryChange }) {
  console.log(selectedCategories);
  
  return (
    <>
      {/* Sidebar Title */}
      <h4 className="mb-3">Filters</h4>

      {/* Category Filter */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Category</Card.Title>
          <Form.Check
            type="checkbox"
            label="Electronics"
            checked={selectedCategories.includes("electronics")}
            onChange={()=>onCategoryChange("electronics")}
          />
          <Form.Check
            type="checkbox"
            label="Jewelery"
            checked={selectedCategories.includes("jewelery")}
            onChange={()=>onCategoryChange("jewelery")}
          />
          <Form.Check
            type="checkbox"
            label="Men's Clothing"
            checked={selectedCategories.includes("men's clothing")}
            onChange={()=>onCategoryChange("men's clothing")}
          />
          <FormCheck
            type="checkbox"
            label="Women's Clothing"
            checked={selectedCategories.includes("women's clothing")}
            onChange={()=>onCategoryChange("women's clothing")}
          />
        </Card.Body>
      </Card>

      {/* Price Filter */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Price</Card.Title>
          <Form.Check
            type="checkbox"
            label="Under $50"
          />
          <Form.Check
            type="checkbox"
            label="$50 - $100"
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
          />
          <Form.Check
            type="checkbox"
            label="3★ & above"
          />
          <Form.Check
            type="checkbox"
            label="2★ & above"
          />
          <Form.Check
            type="checkbox"
            label="1★ & above"
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default FiltersSidebar;
