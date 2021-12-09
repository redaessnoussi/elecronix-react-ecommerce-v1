import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import {
  Col,
  Container,
  Card,
  Row,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// STYLINGS MODULES
import fonts from "../../styles/typography.module.scss";

const Checkout = ({
  cartItemsTotal,
  updateItemCart,
  removeAllItems,
  checkoutToken,
}) => {
  const totalItems = cartItemsTotal.total_items;
  const items = cartItemsTotal.line_items;
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingCountry, setShippingCountry] = useState("");
  const [countrySubdivisions, setCountrySubdivisions] = useState({});
  const [countrySubdivision, setCountrySubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState({});
  const [shippingPrice, setShippingPrice] = useState("");

  // console.log(items);

  const LoadingSpinner = ({ color }) => (
    <>
      <Spinner
        variant={color}
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </>
  );

  const CartItems = () => (
    <>
      {items ? (
        items.map((item, key) => (
          <div className="d-flex mb-3" key={key}>
            <Col md="1">
              <p className="fw-bold mb-0">{item.quantity + "x"}</p>
            </Col>
            <Col className="pe-4">
              <p className="mb-0">{item.name}</p>
            </Col>
            <Col md="auto">
              <p className="mb-0">{item.line_total.formatted_with_symbol}</p>
            </Col>
          </div>
        ))
      ) : (
        <div className="text-end">
          <LoadingSpinner color={"dark"} />
        </div>
      )}
    </>
  );

  const BuyerInfo = () => (
    <>
      <h6>Buyer Info</h6>
      <hr className="my-4" />
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFisrtName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name..." />
          </Form.Group>

          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name..." />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter your address..." />
          </Form.Group>

          <Form.Group as={Col} controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="email" placeholder="Enter contact email..." />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select
              value={shippingCountry}
              dangerouslySetInnerHTML={{ __html: shippingCountries.html }}
              onChange={(e) => setShippingCountry(e.target.value)}
            ></Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formCity">
            <Form.Label>State/Province</Form.Label>
            <Form.Select
              value={countrySubdivision}
              dangerouslySetInnerHTML={{ __html: countrySubdivisions.html }}
              onChange={(e) => setCountrySubdivision(e.target.value)}
            ></Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Select state..." />
          </Form.Group>

          <Form.Group as={Col} controlId="formZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Enter zip code..." />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId="formZip">
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </Form.Group>
        </Row>
      </Form>
    </>
  );

  const EmptyCart = () => (
    <>
      <p className="lead px-3">Your shopping bag is empty. Start shopping</p>
    </>
  );

  const ShoppingSummary = () => (
    <>
      <Card className="border-dark">
        <Card.Body>
          <div className="text-center mb-4">
            <h5 className="fw-bold mb-0">Your Order Summary</h5>
          </div>
          {/* Showing Cart Items Info */}
          <CartItems />
          <hr className="my-4" />
          <div className="d-flex mb-3">
            <Col>
              <p className="mb-0">Subtotal</p>
            </Col>
            <Col className="text-end">
              <p className="mb-0">
                {shippingOptions[0] && shippingOptions[0] !== 0 ? (
                  "$" + cartItemsTotal.subtotal.raw
                ) : (
                  <LoadingSpinner color={"dark"} />
                )}
              </p>
            </Col>
          </div>
          <div className="d-flex">
            <Col>
              <p className="mb-0">Shipping</p>
            </Col>
            <Col className="text-end">
              <p className="mb-0">
                {shippingOptions[0] && shippingOptions[0] !== 0 ? (
                  shippingPrice + " " + shippingOptions[0].description
                ) : (
                  <LoadingSpinner color={"dark"} />
                )}
              </p>
            </Col>
          </div>
          <hr className="my-4" />
          <div className="d-flex mb-3">
            <Col>
              <h5 className="mb-0">Total</h5>
            </Col>
            <Col className="text-end">
              <h5 className="text-primary mb-0">
                {shippingOptions[0] && shippingOptions[0] !== 0 && "$"}
                {shippingOptions[0] && shippingOptions[0] !== 0 ? (
                  cartItemsTotal.subtotal.raw + shippingOptions[0].price.raw
                ) : (
                  <LoadingSpinner color={"primary"} />
                )}
              </h5>
            </Col>
          </div>
          <hr className="my-4" />
          <h4 className="mb-4 fw-bold">Payment</h4>
          <div className="d-flex justify-content-between mb-4">
            <Button
              variant="outline-dark-90"
              size="sm"
              className={fonts.fw_500 + " w-30"}
            >
              Credit Card
            </Button>
            <Button
              variant="outline-dark-90"
              size="sm"
              className={fonts.fw_500 + " w-30"}
            >
              Bank Transfer
            </Button>
            <Button
              variant="outline-dark-90"
              size="sm"
              className={fonts.fw_500 + " w-30"}
            >
              Paypal
            </Button>
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary" className={fonts.fw_500}>
              Check Out
            </Button>
            <Link
              to="/carts"
              className={
                "btn btn-link text-black text-decoration-none " + fonts.fw_500
              }
            >
              Back to Cart
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );

  useEffect(() => {
    const fetchShippingContries = async () => {
      try {
        const shippingCountries =
          await commerce.services.localeListShippingCountries(checkoutToken);
        setShippingCountries(shippingCountries);
        const entries = Object.entries(shippingCountries).map(
          ([code, name]) => ({ id: code, lable: name })
        );
        const countries = Object.keys(entries[0].lable);
        setShippingCountry(countries[0]);
      } catch (error) {
        console.log(error);
      }
    };
    checkoutToken && fetchShippingContries();
  }, [checkoutToken]);

  useEffect(() => {
    const fetchCountrySubdivisions = async (countryCode) => {
      try {
        const countrySubdivisions =
          await commerce.services.localeListSubdivisions(countryCode);
        setCountrySubdivisions(countrySubdivisions);
        const entries = Object.entries(countrySubdivisions).map(
          ([code, name]) => ({ id: code, lable: name })
        );
        const subdivisions = Object.keys(entries[0].lable);
        setCountrySubdivision(subdivisions[0]);
      } catch (error) {
        console.log(error);
      }
    };
    shippingCountry && fetchCountrySubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    const fetchShippingOptions = async () => {
      const shippingOptions = await commerce.checkout.getShippingOptions(
        checkoutToken,
        {
          country: shippingCountry,
          region: countrySubdivision,
        }
      );
      setShippingOptions(shippingOptions);
      // console.log(shippingOptions);
      setShippingPrice(shippingOptions[0].price.formatted_with_symbol);
    };

    countrySubdivision && fetchShippingOptions();
    // eslint-disable-next-line
  }, [countrySubdivision]);

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md="8">
            {/* Showing Table */}
            {totalItems === 0 ? <EmptyCart /> : <BuyerInfo />}
          </Col>
          <Col md="4">
            <ShoppingSummary />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
