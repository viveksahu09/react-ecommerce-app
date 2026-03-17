import { Card, CardBody, Form, FormCheck } from "react-bootstrap";

function FiltersSidebar({
  selectedCategories,
  selectedPrice,
  selectedRating,
  onCategoryChange,
  onRatingChange,
  onPriceChange,
}) {
  // console.log(selectedCategories, selectedPrice, selectedRating);

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
            onChange={() => onCategoryChange("electronics")}
          />
          <Form.Check
            type="checkbox"
            label="Jewelery"
            checked={selectedCategories.includes("jewelery")}
            onChange={() => onCategoryChange("jewelery")}
          />
          <Form.Check
            type="checkbox"
            label="Men's Clothing"
            checked={selectedCategories.includes("men's clothing")}
            onChange={() => onCategoryChange("men's clothing")}
          />
          <FormCheck
            type="checkbox"
            label="Women's Clothing"
            checked={selectedCategories.includes("women's clothing")}
            onChange={() => onCategoryChange("women's clothing")}
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
            checked={selectedPrice.includes("Under $50")}
            onChange={() => onPriceChange("Under $50")}
          />
          <Form.Check
            type="checkbox"
            label="$50 - $100"
            checked={selectedPrice.includes("$50 - $100")}
            onChange={() => onPriceChange("$50 - $100")}
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
            checked={selectedRating.includes("4★ & above")}
            onChange={() => onRatingChange("4★ & above")}
          />
          <Form.Check
            type="checkbox"
            label="3★ & above"
            checked={selectedRating.includes("3★ & above")}
            onChange={() => onRatingChange("3★ & above")}
          />
          <Form.Check
            type="checkbox"
            label="2★ & above"
            checked={selectedRating.includes("2★ & above")}
            onChange={() => onRatingChange("2★ & above")}
          />
          <Form.Check
            type="checkbox"
            label="1★ & above"
            checked={selectedRating.includes("1★ & above")}
            onChange={() => onRatingChange("1★ & above")}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default FiltersSidebar;
