import React from "react";
import { Link } from "react-router-dom";
import BrandName from "../../BrandName";
import {
  Container,
  Col,
  Navbar,
  Button,
  Nav,
  // Spinner,
  // NavLink,
} from "react-bootstrap";
import {
  UilInstagram,
  UilLinkedin,
  UilTwitter,
  UilFacebook,
  UilPhone,
  UilEnvelopeAlt,
  UilUser,
  UilShoppingBag,
} from "@iconscout/react-unicons";
import SearchBar from "./SearchBar/SearchBar";

function Header({ handleShow, cartItemsTotal, searchProduct, setfilterNow }) {
  const TopNavbar = () => (
    <Navbar bg="white" className="border-bottom">
      <Container className="align-items-center">
        {/* SOCIAL MEDIA ICONS */}
        <SocialMediaIcons />
        {/* ACCOUNT LOGIN */}
        <AccountLogin />
      </Container>
    </Navbar>
  );

  const MainNavbar = () => (
    <Navbar bg="white" className="shadow-sm py-4" expand="md">
      <Container className="align-items-center">
        <Navbar.Brand>
          {/* LOGO BRAND NAME */}
          <BrandName />
        </Navbar.Brand>
        {/* MENU ITEMS */}
        <MenuItems />
        {/* SEARCH BAR */}
        <Col md="4">
          <SearchBar
            searchProduct={searchProduct}
            setfilterNow={setfilterNow}
          />
        </Col>
        {/* SHOPPIGN CART WITH NOTIFICATION */}
        <ShoppingCart />
      </Container>
    </Navbar>
  );

  const ShoppingCart = () => (
    <ul className="list-inline mb-0">
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
      <li className="list-inline-item">
        <Button variant="link" className="position-relative p-0">
          <UilEnvelopeAlt />
        </Button>
      </li>
    </ul>
  );

  // const LoadingSpinner = ({ color, size }) => (
  //   <>
  //     <Spinner
  //       variant={color}
  //       as="span"
  //       animation="border"
  //       size={size}
  //       role="status"
  //       aria-hidden="true"
  //     />
  //     <span className="visually-hidden">Loading...</span>
  //   </>
  // );
  // console.log(searchQuery);

  const MenuItems = () => (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item className="me-3">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className="me-3">
        <Nav.Link eventkey="about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item className="me-3">
        <Link eventkey="product" to="/product" className="nav-link">
          Product
        </Link>
      </Nav.Item>
      <Nav.Item className="me-3">
        <Nav.Link eventkey="blog">Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventkey="contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );

  const SocialMediaIcons = () => (
    <>
      <ul className="list-inline mb-0">
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
    <ul className="list-inline mb-0">
      <li className="list-inline-item">
        <Button variant="link" className="text-decoration-none text-black">
          <UilPhone className="text-primary me-1" />
          <span className="small">+12 345 6789 0</span>
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="text-decoration-none text-black">
          <UilEnvelopeAlt className="text-primary me-1" />
          <span className="small">support@tronix.com</span>
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="text-decoration-none text-black">
          <UilUser className="text-primary me-1" />
          <span className="small">Account</span>
        </Button>
      </li>
    </ul>
  );

  return (
    <>
      <TopNavbar />
      <div className="sticky-top">
        <MainNavbar />
      </div>
    </>
  );
}

export default Header;
