import { useCart } from "../context/CartContext";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          {/* Header */}
          <Row className="border-bottom fw-bold pb-2 mb-3 text-center">
            <Col md={6}>Product</Col>
            <Col md={2}>Price</Col>
            <Col md={2}>Quantity</Col>
            <Col md={2}>Action</Col>
          </Row>

          {/* Items */}
          {cartItems.map((item) => (
            <Row
              key={item.id}
              className="align-items-center border-bottom py-3 text-center"
            >
              <Col md={6} className="d-flex align-items-center gap-3 text-start">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <h6 className="mb-0">{item.title}</h6>
                </div>
              </Col>

              <Col md={2}>
                ₹{item.price.toFixed(2)}
              </Col>

              <Col md={2}>
                <div className="d-flex justify-content-center gap-2">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </Button>

                  <span>{item.quantity}</span>

                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </Button>
                </div>
              </Col>

              <Col md={2}>
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑
                </Button>
              </Col>
            </Row>
          ))}

          {/* Subtotal Section */}
          <Row className="justify-content-end mt-4">
            <Col md={4} className="text-end">
              <h5>Subtotal:</h5>
              <h3>₹{totalPrice}</h3>

              <Button variant="primary" className="w-100 mt-3">
                Checkout
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;