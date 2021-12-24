// import React, { useState, useEffect } from "react";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import Slider from "rc-slider";
import "../../../node_modules/rc-slider/assets/index.css";
import { ProductStarsRatings, ReviewSold, WishList } from "../product/product";

function SearchProducts() {
  // const [filterPriceRange, setFilterPriceRange] = useState([100, 600]);
  // // const ref = useRef(initialValue)
  // // console.log(filterPriceRange);

  // const priceRange = (value) => {
  //   // console.log(value);
  //   setFilterPriceRange(value);
  // };

  // useEffect(() => {
  //   priceRange();
  //   console.log(filterPriceRange);
  //   // return () => {
  //   //   filterPriceRange(value)
  //   // };
  // }, [filterPriceRange]);

  const CategoriesFilter = () => (
    <div className="categories">
      <h6 className="fw-bold mb-4">All Categories</h6>
      <div className="categories-filter">
        <p className="mb-2">
          Computer & Laptop{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (25)
          </Badge>
        </p>
        <p className="mb-2">
          Mobile & Tablet{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (06)
          </Badge>
        </p>
        <p className="mb-2">
          Camera{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (12)
          </Badge>
        </p>
        <p className="mb-2">
          TV & Smart Box{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (04)
          </Badge>
        </p>
        <p className="mb-2">
          Home Appliance{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (31)
          </Badge>
        </p>
        <p className="mb-2">
          Other Categories{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (03)
          </Badge>
        </p>
        <p className="mb-2">
          Computer & Laptop{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (25)
          </Badge>
        </p>
        <p className="mb-2">
          Mobile & Tablet{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (06)
          </Badge>
        </p>
        <p className="mb-2">
          Camera{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (12)
          </Badge>
        </p>
        <p className="mb-2">
          TV & Smart Box{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (04)
          </Badge>
        </p>
        <p className="mb-2">
          Home Appliance{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (31)
          </Badge>
        </p>
        <p className="mb-2">
          Other Categories{" "}
          <Badge bg="white" className="text-black-50 px-0">
            (03)
          </Badge>
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );

  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);

  const PriceFilter = () => (
    <>
      <h6 className="mb-3">Filter by Price</h6>
      <Range
        min={0}
        max={5000}
        defaultValue={[100, 600]}
        tipFormatter={(value) => `$${value}`}
        // onChange={(value) => priceRange(value)}
        className="mb-3"
      />
      <p className="text-black-50 small mb-0">
        Price: <span className="text-black">$100 - $250</span>
      </p>
      <hr className="my-4" />
    </>
  );

  const ButtonsFilter = () => (
    <div className="d-grid mx-5">
      <Button variant="primary" className="mb-3">
        Filter
      </Button>
      <Button variant="link" className="text-primary text-decoration-none">
        Reset Filter
      </Button>
    </div>
  );

  const Filter = () => (
    <Card>
      <Card.Body>
        <CategoriesFilter />
        <PriceFilter />
        <ButtonsFilter />
      </Card.Body>
    </Card>
  );

  // =========================:Search Result Section:===============================

  const ViewingProducts = () => (
    <p className="text-black-50 small mb-0">
      Viewing <span className="text-black">20</span> of{" "}
      <span className="text-black">160</span> product
    </p>
  );

  const SortBy = () => (
    <>
      <Button variant="link">
        <FaList />
      </Button>
      <Button variant="link">
        <IoGridSharp />
      </Button>
      <Row>
        <Form.Label column="sm" md="auto" className="text-black-50">
          Large Text
        </Form.Label>
        <Col>
          <Form.Select size="sm">
            <option value="new">Newest Items</option>
            <option value="old">Oldest Items</option>
            <option value="high">High Price</option>
            <option value="low">Low Price</option>
          </Form.Select>
        </Col>
      </Row>
    </>
  );

  const ListViewProduct = () => (
    <>
      <Col sm="12" className="mb-3 p-4 border">
        <div className="d-flex align-items-center">
          <Image
            src="https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6084/6084400_sd.jpg"
            alt="unavailable"
            className="img__products"
          />
          <div className="ms-4">
            <div className="d-flex align-items-center mb-4">
              <ProductStarsRatings />
              <ReviewSold />
            </div>
            <Row className="align-items-end row">
              <Col md="8">
                <h5 className="fw-bold mb-4">USB Speaker Portable</h5>
                <p className="text-black-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <Button variant="primary" className="px-4">
                  Add to Cart
                </Button>
              </Col>
              <Col md="4" className="text-end">
                <h5 className="text-black-50 text-decoration-line-through">
                  $39.99
                </h5>
                <h3 className="text-primary mb-4">$29.99</h3>
                <WishList />
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </>
  );

  const SearchReasult = () => (
    <>
      <Row className="mb-4">
        <Col>
          <ViewingProducts />
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <SortBy />
        </Col>
      </Row>
      <Row>
        <ListViewProduct />
        <ListViewProduct />
        <ListViewProduct />
        <ListViewProduct />
        <ListViewProduct />
        <ListViewProduct />
        <ListViewProduct />
      </Row>
    </>
  );

  // =========================:Main Section:===============================

  return (
    <Container className="py-5">
      <Row>
        {/* FILTER LEFT BAR */}
        <Col md="3">
          <Filter />
        </Col>
        {/* RIGHT BAR SEARCH RESULTS */}
        <Col md="9">
          <SearchReasult />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchProducts;
