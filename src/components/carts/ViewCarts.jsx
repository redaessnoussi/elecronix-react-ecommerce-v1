import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import {
  Col,
  Container,
  Table,
  Card,
  Row,
  Button,
  Accordion,
  Form,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// SOLID ICONS
import { faPlus, faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// STYLINGS MODULES
import images from "../../styles/images.module.scss";

const ViewCarts = ({
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
      <Table className="border table-borderless mb-4">
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
                <Form.Select
                  value={shippingCountry}
                  dangerouslySetInnerHTML={{ __html: shippingCountries.html }}
                  onChange={(e) => setShippingCountry(e.target.value)}
                ></Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="state">
                <Form.Label className="fw-bold">State/Province</Form.Label>
                <Form.Select
                  value={countrySubdivision}
                  dangerouslySetInnerHTML={{ __html: countrySubdivisions.html }}
                  onChange={(e) => setCountrySubdivision(e.target.value)}
                ></Form.Select>
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
          <div className="d-flex justify-content-between mb-2">
            <p className="text-black-50 mb-0">Sub-Total</p>
            <p className="fw-bold fs-6 mb-0">
              ${cartItemsTotal.subtotal && cartItemsTotal.subtotal.raw}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <p className="text-black-50 mb-0">Delivery Charges</p>
            <Badge bg="danger" className="fs-6">
              {shippingOptions[0] &&
                shippingPrice + " " + shippingOptions[0].description}
            </Badge>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-black-50 mb-0">Coupan Discount</p>
            <p className="text-primary fw-bold fs-6 mb-0">Apply Coupan</p>
          </div>
        </div>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Total Amount</h5>
            <Badge bg="primary" className="fs-5">
              $
              {shippingOptions[0] &&
                cartItemsTotal.subtotal.raw + shippingOptions[0].price.raw}
            </Badge>
          </div>
        </div>
      </Accordion>
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
