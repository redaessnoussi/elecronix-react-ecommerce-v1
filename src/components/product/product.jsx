import React from "react";
// REACT ICONS
import {
  AiOutlinePlus,
  AiFillStar,
  AiFillHeart,
  AiOutlineMinus,
} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { FiBox } from "react-icons/fi";

import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
// STYLINGS MODULES
import icons from "../../styles/icons.module.scss";
import typography from "../../styles/typography.module.scss";

function Product() {
  const CategoryBreadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
      <Breadcrumb.Item active>Computer & Laptop</Breadcrumb.Item>
    </Breadcrumb>
  );

  const ProductStarsRatings = () => (
    <>
      <AiFillStar className={icons.star} width="20" height="20" />
      <AiFillStar className={icons.star} width="20" height="20" />
      <AiFillStar className={icons.star} width="20" height="20" />
      <AiFillStar className={icons.star} width="20" height="20" />
      <AiFillStar className={icons.star} width="20" height="20" />
    </>
  );

  const ReviewSold = () => (
    <p className="small text-black-50 ms-2 mb-0">Review (12) | Sold 99</p>
  );

  const WishList = () => (
    <Button
      variant="link"
      className="d-flex align-items-center text-decoration-none"
    >
      <AiFillHeart className={icons.wish_heart + " text-danger me-1"} />
      <p className={typography.fw_600 + " mb-0"}>Add to Wishlist</p>
    </Button>
  );

  const ProductStates = () => (
    <Row className="align-items-center">
      <Col>
        <div className="d-flex align-items-center">
          <p className="me-2 mb-0">5.0</p>
          <ProductStarsRatings />
          <ReviewSold />
        </div>
      </Col>
      <Col>
        <WishList />
      </Col>
    </Row>
  );

  const ProductDetails = () => <CategoryBreadcrumb />;

  const ProductImage = () => (
    <>
      <Image src="./images/unavailable.jpg" />
    </>
  );

  const ProductPrice = () => (
    <div className="d-flex align-items-center">
      <h2 className="fw-bold mb-0">$29.00</h2>
      <p className="text-grey mx-3 mb-0">
        <strike>$99.00</strike>
      </p>
      <Button variant="outline-primary" size="sm">
        Save 50%
      </Button>
    </div>
  );

  const ShippingProduct = () => (
    <>
      <div className="d-flex align-items-center border-bottom pb-4 pt-5 mb-4">
        <p className="me-4 mb-0">
          <FaShippingFast className={icons.shipping + " text-primary me-2"} />
          Free Delivery
        </p>
        <p className="me-4 mb-0">
          <HiOutlineTicket className={icons.shipping + " text-primary me-2"} />
          Available Voucher
        </p>
        <p className="mb-0">
          <FiBox className={icons.shipping + " text-primary me-2"} />
          In Stock
        </p>
      </div>
    </>
  );

  const DescriptionProduct = () => (
    <>
      <h6 className="fw-bold">Description</h6>
      <p className="text-black-50 fw-normal">
        Wireless Microphone with the new style, shockproof, clear voice
        reception that suitable for recording, online meeting, vlogging, and
        calling. Free casing with high-quality zipper.
      </p>
    </>
  );

  const ReduceItem = ({ itemID, itemQuantity }) => {
    if (itemQuantity === 1) {
      return (
        <Button variant="grey" className="text-black-50 disabled">
          <AiOutlineMinus />
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          // onClick={() => updateItemCart(itemID, itemQuantity - 1)}
        >
          <AiOutlineMinus />
        </Button>
      );
    }
  };

  const IncreaseItem = ({ itemID, itemQuantity }) => (
    <Button
      variant="primary"
      // onClick={() => updateItemCart(itemID, itemQuantity + 1)}
    >
      <AiOutlinePlus />
    </Button>
  );

  const QuantityButtons = () => (
    <div className="align-items-center d-flex">
      <p className="text-black-50 mb-0 me-3">Quantity</p>
      {/* REDUCE ITEM ON CARTS */}
      <ReduceItem itemID="{item.id}" itemQuantity="{item.quantity}" />
      <span className="mx-3 text-primary">{"item.quantity"}</span>
      {/* INCREASE ITEM ON CARTS */}
      <IncreaseItem itemID="{item.id}" itemQuantity="{item.quantity}" />
    </div>
  );

  const AddCartChat = () => {
    return (
      <div>
        <Button variant="outline-primary" className="px-4 me-2">
          Chat
        </Button>
        <Button variant="primary" className="px-4">
          Add to Cart
        </Button>
      </div>
    );
  };

  const ReviewComment = ({ name, avatar }) => (
    <>
      <div class="d-flex align-items-center mb-3">
        <div class="flex-shrink-0">
          <Image
            src={"./images/" + avatar + ".png"}
            alt="avatar-1"
            width="50"
          />
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 class="mt-0">{name}</h6>
          <div class="d-flex align-items-center">
            <p className="mb-0 fw-bold text-danger me-2 small">5.0</p>
            <ProductStarsRatings />
            <p className="text-black-50 mb-0 ms-2 small">1 Month Ago</p>
          </div>
        </div>
        {/* COMMENT */}
      </div>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </>
  );

  const NavsTabs = () => (
    <div className="navs-review">
      <Tabs defaultActiveKey="reviews" id="comments" className="border-0 mb-5">
        <Tab eventKey="reviews" title="Reviews (200)" className="border-end">
          {/* COMMENT SECTION */}
          <ReviewComment name="Alex" avatar="avatar-1" />
          <ReviewComment name="Maria" avatar="avatar-3" />
          <ReviewComment name="Bob" avatar="avatar-2" />
          <ReviewComment name="Jeff" avatar="avatar-1" />
        </Tab>
        <Tab eventKey="discussion" title="Discussion" className="border-end">
          Discussion
        </Tab>
      </Tabs>
    </div>
  );

  const RatingForm = () => (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name *</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="review">
        <Form.Label>Review *</Form.Label>
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </Form.Group>

      <div className="d-flex align-items-center mb-5">
        <p className="fw_500 mb-0 me-3">Rating</p>
        <Button variant="link" className="p-0">
          <AiFillStar className={icons.star + " " + icons.wish_heart} />
        </Button>
        <Button variant="link" className="p-0">
          <AiFillStar className={icons.star + " " + icons.wish_heart} />
        </Button>
        <Button variant="link" className="p-0">
          <AiFillStar className={icons.star + " " + icons.wish_heart} />
        </Button>
        <Button variant="link" className="p-0">
          <AiFillStar className={icons.wish_heart} />
        </Button>
        <Button variant="link" className="p-0">
          <AiFillStar className={icons.wish_heart} />
        </Button>
      </div>

      <Button variant="primary" type="submit" className="px-5">
        Submit
      </Button>
    </Form>
  );

  const AddRating = () => (
    <>
      <h5 className="fw-bold">Add Your Review</h5>
      <p className="text-black-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <RatingForm />
    </>
  );

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* PRODUCT IMAGE SECTION */}
          <Col md={6}>
            <ProductImage />
            {/* SLIDER WILL BE HERE */}
          </Col>
          {/* PRODUCT DETAILS SECTION */}
          <Col md={6} className="d-flex flex-column justify-content-between">
            <div>
              <ProductDetails />
              <ProductStates />
              <h2 className="fw-normal mb-3">Wireless Microphone</h2>
              <ProductPrice />
              <ShippingProduct />
              <DescriptionProduct />
            </div>
            <div className="d-flex justify-content-between">
              <QuantityButtons />
              <AddCartChat />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <NavsTabs />
          </Col>
          <Col md={6}>
            <AddRating />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;
