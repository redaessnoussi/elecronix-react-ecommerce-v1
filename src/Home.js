import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// API
import requests from "./api/request";
// Components
// import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import CartSteps from "./components/cartSteps/cartSteps";
import Header from "./components/header/header";
// import Products from "./components/home/products/products";
import CartsCanvas from "./components/carts/cartsCanvas";
import ViewCarts from "./components/carts/ViewCarts";
import Checkout from "./components/checkout/checkout";
import Newsletter from "./components/newsletter/newsletter";
import Footer from "./components/footer/footer";
import SliderHero from "./components/home/sliderHero/sliderHero";
import ProductCategoryCard from "./components/home/productCategoryCard/productCategoryCard";
import CategoriesButtons from "./components/home/categoriesButtons/categoriesButtons";
import FlashSale from "./components/home/flashSale/flashSale";
// Library
import { commerce } from "./lib/commerce";
// React Router
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BrandNames from "./components/home/brandNames/brandNames";
import NewArrival from "./components/home/newArrival/newArrival";
import MiddlePageBanner from "./components/home/middlePageBanner/middlePageBanner";
import FeaturedProducts from "./components/home/featuredProducts/featuredProducts";
import TopRatedProducts from "./components/home/topRatedProducts/topRatedProducts";

function Home() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState({});
  const [checkoutToken, setcheckoutToken] = useState({});
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("/");

  // console.log(requests);

  const PagePath = () => {
    const location = useLocation();
    const pathname = location.pathname;
    setPath(pathname);
    console.log(path);

    return null;
  };

  // const Pagename = () => <h1>Page Name</h1>;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCarts = async () => {
    setCarts(await commerce.cart.retrieve());
  };

  const handleAddCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);
    setCarts(item.cart);
  };

  const updateItemCart = async (itemID, quantity) => {
    const item = await commerce.cart.update(itemID, { quantity: quantity });
    setCarts(item.cart);
  };

  const removeAllItems = async (itemID) => {
    const item = await commerce.cart.remove(itemID);
    setCarts(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);

  useEffect(() => {
    // cart_M5Q3NxB33B2nmw
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(carts.id, {
          type: "cart",
        });
        setcheckoutToken(token);
        // console.log(token);
      } catch (error) {
        console.log(error);
      }
    };
    carts.id && generateToken();
  }, [carts]);

  // commerce.cart.empty()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header cartItemsTotal={carts} handleShow={handleShow} />
        <CartsCanvas
          show={show}
          handleClose={handleClose}
          cartItemsTotal={carts}
          updateItemCart={updateItemCart}
          removeAllItems={removeAllItems}
        />
        {/* <Breadcrumbs />
        <Container className="text-center pt-5">
          <Pagename />
        </Container> */}
        <PagePath />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {/* HERO SECTION WITH SLIDER */}
                <Container className="py-4">
                  <Row>
                    <Col md="8">
                      <SliderHero />
                    </Col>
                    <Col
                      md="4"
                      className="d-flex flex-column justify-content-between"
                    >
                      <ProductCategoryCard
                        margin="mb-4"
                        categoryClass="card_gaming"
                        categoryName="PC Gaming Collection"
                      />
                      <ProductCategoryCard
                        margin="mb-0"
                        categoryClass="card_camera"
                        categoryName="Camera Collection"
                      />
                    </Col>
                  </Row>
                </Container>
                {/* PRODUCTS CATEGORIES BUTTONS */}
                <CategoriesButtons />
                {/* NEW ARRIVAL ITEMS */}
                <NewArrival products={products} />
                {/* FLASH SALE SLIDER*/}
                <FlashSale requests={requests.trendingViewed} />
                {/* BRAND NAMES SECTION */}
                <BrandNames />
                {/* MIDDLE PAGE BANNER SECTION */}
                <MiddlePageBanner />
                {/* FEATURED PRODUCTS SECTION */}
                <FeaturedProducts
                  products={products}
                  addCarts={handleAddCart}
                />
                {/* TOP RATED PRODUCTS */}
                <TopRatedProducts
                  products={products}
                  addCarts={handleAddCart}
                />
              </>
            }
          />
          <Route
            exact
            path="/carts"
            element={
              checkoutToken ? (
                <>
                  <CartSteps />
                  <ViewCarts
                    cartItemsTotal={carts}
                    updateItemCart={updateItemCart}
                    removeAllItems={removeAllItems}
                    checkoutToken={checkoutToken.id}
                    // pagePath={PagePath}
                  />
                </>
              ) : (
                alert("Hello")
              )
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <CartSteps />
                <Checkout
                  cartItemsTotal={carts}
                  updateItemCart={updateItemCart}
                  removeAllItems={removeAllItems}
                  checkoutToken={checkoutToken.id}
                />
              </>
            }
          />
        </Routes>
        <Newsletter />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default Home;
