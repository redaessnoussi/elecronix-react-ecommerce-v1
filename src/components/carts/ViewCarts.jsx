import React from "react";
import {
  Col,
  Container,
  Table,
  Card,
  Row,
  Button,
  Accordion,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// SOLID ICONS
import { faPlus, faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// STYLINGS MODULES
import images from "../../styles/images.module.scss";

const ViewCarts = ({ cartItemsTotal, updateItemCart, removeAllItems }) => {
  const totalItems = cartItemsTotal.total_items;
  const items = cartItemsTotal.line_items;
  const deliveryTax = 80;

  const reduceItem = (itemID, itemQuantity) => {
    if (itemQuantity === 1) {
      return (
        <Button variant="outline-primary" size="sm" className="disabled">
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      );
    } else {
      return (
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => updateItemCart(itemID, itemQuantity - 1)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      );
    }
  };

  const CartItems = () => (
    <>
      <Table className="border table-borderless">
        <thead className="card-header">
          <tr className="border-bottom text-center">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items
            ? items.map((item, index) => (
                <tr key={index} className="align-middle">
                  <td width="40%">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          className={images.img__carts_items}
                          src={item.image.url}
                          alt={item.name}
                          width="70"
                          height="70"
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <p className="mb-0">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    {item.price.formatted_with_symbol}
                  </td>
                  <td width="130" className="text-center">
                    {/* REDUCE ITEM ON CARTS */}
                    {reduceItem(item.id, item.quantity)}
                    <span className="mx-3">{item.quantity}</span>
                    {/* INCREASE ITEM ON CARTS */}
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => updateItemCart(item.id, item.quantity + 1)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </td>
                  <td className="text-center">
                    {item.line_total.formatted_with_symbol}
                  </td>
                  <td>
                    <Button
                      variant="link"
                      onClick={() => removeAllItems(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );

  const CheckoutBtn = () => (
    <>
      <Row className="justify-content-between">
        <Col xs="auto">
          <h5>
            <Link to="/">Continue Shopping</Link>
          </h5>
        </Col>
        <Col xs="auto">
          <Button variant="primary" size="lg" className="px-4">
            Check Out
          </Button>
        </Col>
      </Row>
    </>
  );

  const EmptyCart = () => (
    <>
      <p className="lead px-3">Your shopping bag is empty. Start shopping</p>
    </>
  );

  const ShoppingSummary = () => (
    <>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Estimate Shipping</Accordion.Header>
          <Accordion.Body>
            <p className="text-black-50">
              Enter your destination to get a shipping estimate
            </p>
            {/* Form Starting */}
            <Form>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label className="fw-bold">Country *</Form.Label>
                <Form.Select>
                  <option>Default select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="state">
                <Form.Label className="fw-bold">State/Province</Form.Label>
                <Form.Select>
                  <option>Default select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="zip">
                <Form.Label className="fw-bold">Zip/Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zip/postal code..."
                />
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <div className="p-3 border-bottom">
          <div className="d-flex justify-content-between">
            <p className="text-black-50">Sub-Total</p>
            <p className="fw-bold">
              {cartItemsTotal.subtotal &&
                cartItemsTotal.subtotal.formatted_with_symbol}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-black-50">Delivery Charges</p>
            <p className="fw-bold">$80.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-black-50 mb-0">Coupan Discount</p>
            <p className="text-danger fw-bold mb-0">Apply Coupan</p>
          </div>
        </div>
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h5>Total Amount</h5>
            <h5>
              $
              {cartItemsTotal.subtotal &&
                cartItemsTotal.subtotal.raw + deliveryTax}
            </h5>
          </div>
        </div>
      </Accordion>
    </>
  );

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md="8">
            {/* Showing Table */}
            {totalItems === 0 ? <EmptyCart /> : <CartItems />}
            {/* Showing Check Out Button */}
            <CheckoutBtn />
          </Col>
          <Col md="4">
            <Card>
              <Card.Header className="fw-bold">Summary</Card.Header>
              <Card.Body className="p-0">
                <ShoppingSummary />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewCarts;
