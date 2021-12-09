import React, { Suspense, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// API
import requests from "./api/request";
// Components
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import CartSteps from "./components/cartSteps/cartSteps";
import FlashDeals from "./components/flashDeals/flashDealsProducts";
import Header from "./components/header/header";
import Products from "./components/products/products";
import CartsCanvas from "./components/carts/cartsCanvas";
import ViewCarts from "./components/carts/ViewCarts";
import Checkout from "./components/checkout/checkout";
import Newsletter from "./components/newsletter/newsletter";
import Footer from "./components/footer/footer";
// Library
import { commerce } from "./lib/commerce";
// React Router
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState({});
  const [checkoutToken, setcheckoutToken] = useState({});
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("/");

  const PagePath = () => {
    const location = useLocation();
    const pathname = location.pathname;
    setPath(pathname);
    console.log(path);

    return null;
  };

  const Pagename = () => <h1>Page Name</h1>;

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
        <Header
          fetchUrl={requests.getCategories}
          cartItemsTotal={carts}
          handleShow={handleShow}
          products={products}
        />
        <CartsCanvas
          show={show}
          handleClose={handleClose}
          cartItemsTotal={carts}
          updateItemCart={updateItemCart}
          removeAllItems={removeAllItems}
        />
        <Breadcrumbs />
        <Container className="text-center pt-5">
          <Pagename />
        </Container>
        <PagePath />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FlashDeals fetchUrl={requests.trendingViewed} />
                <Products products={products} addCarts={handleAddCart} />
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
