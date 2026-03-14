import { Card, CardBody, Form, FormCheck } from "react-bootstrap";

function FiltersSidebar() {
  return (
    <>
      {/* Sidebar Title */}
      <h4 className="mb-3">Filters</h4>

      {/* Category Filter */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Category</Card.Title>
          <Form.Check type="checkbox" label="Electronics" />
          <Form.Check type="checkbox" label="Jewelery" />
          <Form.Check type="checkbox" label="Women's clothing" />
          <FormCheck type="checkbox" label="Men's clothing" />
        </Card.Body>
      </Card>

      {/* Price Filter */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Price</Card.Title>
          <Form.Check type="checkbox" label="Under $50" />
          <Form.Check type="checkbox" label="$50 - $100" />
        </Card.Body>
      </Card>

      {/* Rating Filter */}
      <Card className="mb-3">
        <Card.Body >
          <Card.Title>Rating</Card.Title>
          <Form.Check type="checkbox" label="4★ & above" />
          <Form.Check type="checkbox" label="3★ & above" />
          <Form.Check type="checkbox" label="2★ & above" />
          <Form.Check type="checkbox" label="1★ & above" />
        </Card.Body>
      </Card>
    </>
  );
}

export default FiltersSidebar;
