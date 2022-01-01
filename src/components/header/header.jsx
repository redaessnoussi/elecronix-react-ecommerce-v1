import React from "react";
import { Link } from "react-router-dom";
import BrandName from "../../BrandName";
import { Container, Col, Navbar, Button, Nav, Row } from "react-bootstrap";
import {
  UilInstagram,
  UilLinkedin,
  UilTwitter,
  UilFacebook,
  UilPhone,
  UilEnvelopeAlt,
  UilUser,
  UilShoppingBag,
  UilHeart,
} from "@iconscout/react-unicons";
import SearchBar from "./SearchBar/SearchBar";

function Header({ handleShow, cartItemsTotal, searchProduct, setfilterNow }) {
  const TopNavbar = () => (
    <Container className="align-items-center border-bottom">
      <Row>
        <Col xs="12" md="auto" lg="3" className="mb-4 mb-md-0">
          {/* SOCIAL MEDIA ICONS */}
          <SocialMediaIcons />
        </Col>
        <Col xs="12" md lg="9">
          {/* ACCOUNT LOGIN */}
          <AccountLogin />
        </Col>
      </Row>
    </Container>
  );

  const MainNavbar = () => (
    <Navbar bg="white" className="shadow-sm py-4" expand="lg">
      <Container className="align-items-center justify-content-between">
        <Col xs="6" md="8" lg="2" className="mb-4 mb-lg-0">
          {/* LOGO BRAND NAME */}
          <BrandName />
        </Col>
        {/* Navbar Toggle // MOBILE BUTTON */}
        <Col xs="6" md="4" className="d-lg-none mb-4 mb-lg-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="w-100" />
        </Col>
        {/* MENU ITEMS */}
        <Col xs="12" lg="5">
          <MenuItems />
        </Col>
        {/* SEARCH BAR */}
        <Col xs="12" md="8" lg="3" className="mb-4 mb-md-0">
          <SearchBar
            searchProduct={searchProduct}
            setfilterNow={setfilterNow}
          />
        </Col>
        {/* SHOPPIGN CART WITH NOTIFICATION */}
        <Col xs="12" md="4" lg="2" className="text-end">
          <ShoppingCart />
        </Col>
      </Container>
    </Navbar>
  );

  const ShoppingCart = () => (
    <ul className="d-flex justify-content-between justify-content-md-evenly list-inline mb-0">
      <li className="list-inline-item me-4">
        <Button
          variant="link"
          className="position-relative p-0"
          onClick={handleShow}
        >
          <UilShoppingBag />
          {cartItemsTotal.total_items !== undefined &&
            cartItemsTotal.total_unique_items !== 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {cartItemsTotal.total_unique_items}
                <span className="visually-hidden">carts items</span>
              </span>
            )}
        </Button>
      </li>
      <li className="list-inline-item me-4">
        <Button variant="link" className="position-relative p-0">
          <UilHeart />
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="position-relative p-0">
          <UilEnvelopeAlt />
        </Button>
      </li>
    </ul>
  );

  const MenuItems = () => (
    <>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          activeKey="/"
          className="w-100 justify-content-lg-evenly justify-content-xl-start mb-4 mb-lg-0"
        >
          <Nav.Item>
            <Link eventkey="home" to="/" className="nav-link me-lg-3">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              eventkey="about-us"
              to="/about-us"
              className="nav-link me-lg-3"
            >
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              eventkey="product"
              to="/products"
              className="nav-link me-lg-3"
            >
              Product
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link eventkey="blog" to="/blogs" className="nav-link me-lg-3">
              Blog
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link eventkey="contact" to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </>
  );

  const SocialMediaIcons = () => (
    <>
      <ul className="d-flex justify-content-between list-inline mb-0">
        <li className="list-inline-item">
          <Button variant="link">
            <UilInstagram className="text-black-50" />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button variant="link">
            <UilFacebook className="text-black-50" />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button variant="link">
            <UilTwitter className="text-black-50" />
          </Button>
        </li>
        <li className="list-inline-item">
          <Button variant="link">
            <UilLinkedin className="text-black-50" />
          </Button>
        </li>
      </ul>
    </>
  );

  const AccountLogin = () => (
    <ul className="d-md-flex justify-content-md-between justify-content-lg-end list-inline mb-0">
      <li className="list-inline-item me-3 me-md-0">
        <Button variant="link" className="text-decoration-none text-black ps-0">
          <UilPhone className="text-primary me-1" />
          <span className="small">+12 345 6789 0</span>
        </Button>
      </li>
      <li className="list-inline-item me-3 me-md-0">
        <Button variant="link" className="text-decoration-none text-black ps-0">
          <UilEnvelopeAlt className="text-primary me-1" />
          <span className="small">support@tronix.com</span>
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="text-decoration-none text-black ps-0">
          <UilUser className="text-primary me-1" />
          <span className="small">Account</span>
        </Button>
      </li>
    </ul>
  );

  return (
    <>
      <TopNavbar />
      <div className="sticky-lg-top">
        <MainNavbar />
      </div>
    </>
  );
}

export default Header;
