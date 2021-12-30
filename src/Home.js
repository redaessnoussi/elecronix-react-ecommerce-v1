import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import BrandNames from "./components/home/brandNames/brandNames";
import NewArrival from "./components/home/newArrival/newArrival";
import MiddlePageBanner from "./components/home/middlePageBanner/middlePageBanner";
import FeaturedProducts from "./components/home/featuredProducts/featuredProducts";
import TopRatedProducts from "./components/home/topRatedProducts/topRatedProducts";
import Product from "./components/product/product";
import ShowProducts from "./components/showProducts/showProducts";
import Blogs from "./components/Blogs/Blogs";

function Home() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState({});
  const [checkoutToken, setcheckoutToken] = useState({});
  const [show, setShow] = useState(false);

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
      const token = await commerce.checkout.generateToken(carts.id, {
        type: "cart",
      });
      setcheckoutToken(token);
    };
    carts?.total_items && generateToken();
  }, [carts]);

  // commerce.cart.empty()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchQuery, setSearchQuery] = useState("");
  // const [filterNow, setfilterNow] = useState(false);
  const [filterNow, setfilterNow] = useState(true);

  const searchProduct = (query) => {
    // query !== "" && setSearchQuery(query);
    // query !== "" && setfilterNow(true);
    setSearchQuery(query);
    setfilterNow(true);
  };

  // useEffect(() => {
  //   return null;
  // }, [searchQuery]);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header
          cartItemsTotal={carts}
          handleShow={handleShow}
          searchQuery={searchQuery}
          setfilterNow={setfilterNow}
          searchProduct={searchProduct}
        />
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
              checkoutToken && (
                <>
                  <CartSteps />
                  <ViewCarts
                    cartItemsTotal={carts}
                    updateItemCart={updateItemCart}
                    removeAllItems={removeAllItems}
                    checkoutToken={checkoutToken.id}
                  />
                </>
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
          <Route
            exact
            path="/product/:productid"
            element={
              <>
                <Product
                  cartItemsTotal={carts}
                  products={products}
                  updateItemCart={updateItemCart}
                  addCarts={handleAddCart}
                />
              </>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <>
                <ShowProducts
                  products={products}
                  addCarts={handleAddCart}
                  searchQuery={searchQuery}
                  filterNow={filterNow}
                  setfilterNow={setfilterNow}
                />
              </>
            }
          />
          <Route
            exact
            path="/blogs"
            element={
              <>
                <Blogs />
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
