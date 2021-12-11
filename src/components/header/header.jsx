import React from "react";
import BrandName from "../../BrandName";
import {
  Container,
  Col,
  Navbar,
  Button,
  Nav,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";
import {
  UilInstagram,
  UilLinkedin,
  UilTwitter,
  UilFacebook,
  UilPhone,
  UilEnvelopeAlt,
  UilUser,
  UilSearch,
  UilShoppingBag,
} from "@iconscout/react-unicons";

function Header({ handleShow, cartItemsTotal }) {
  const TopNavbar = () => (
    <Container>
      <Navbar bg="white" className="border-bottom">
        <Container className="align-items-center">
          {/* SOCIAL MEDIA ICONS */}
          <SocialMediaIcons />
          {/* ACCOUNT LOGIN */}
          <AccountLogin />
        </Container>
      </Navbar>
    </Container>
  );

  const MainNavbar = () => (
    <Container>
      <Navbar bg="white" className="py-4">
        <Container className="align-items-center">
          <Navbar.Brand>
            {/* LOGO BRAND NAME */}
            <BrandName />
          </Navbar.Brand>
          {/* MENU ITEMS */}
          <MenuItems />
          {/* SEARCH BAR */}
          <Col md="4">
            <SearchBar />
          </Col>
          {/* SHOPPIGN CART WITH NOTIFICATION */}
          <ShoppingCart />
        </Container>
      </Navbar>
    </Container>
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
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {cartItemsTotal.total_unique_items ? (
              cartItemsTotal.total_unique_items
            ) : (
              <LoadingSpinner color="white" size="sm" />
            )}
            <span className="visually-hidden">carts items</span>
          </span>
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="position-relative p-0">
          <UilEnvelopeAlt />
        </Button>
      </li>
    </ul>
  );

  const LoadingSpinner = ({ color, size }) => (
    <>
      <Spinner
        variant={color}
        as="span"
        animation="border"
        size={size}
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </>
  );

  const SearchBar = () => (
    <InputGroup>
      <FormControl
        placeholder="Search here"
        aria-label="Search here"
        aria-describedby="search"
        className="bg-light bg-opacity-25 shadow-none"
      />
      <Button variant="primary" id="search">
        <UilSearch />
      </Button>
    </InputGroup>
  );

  const MenuItems = () => (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item className="me-3">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className="me-3">
        <Nav.Link eventKey="about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item className="me-3">
        <Nav.Link eventKey="product">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item className="me-3">
        <Nav.Link eventKey="blog">Blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact">Contact</Nav.Link>
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
          +12 345 6789 0
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="text-decoration-none text-black">
          <UilEnvelopeAlt className="text-primary me-1" />
          support@tronix.com
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="link" className="text-decoration-none text-black">
          <UilUser className="text-primary me-1" />
          Account
        </Button>
      </li>
    </ul>
  );

  return (
    <>
      <TopNavbar />
      <MainNavbar />
    </>
  );
}

export default Header;
