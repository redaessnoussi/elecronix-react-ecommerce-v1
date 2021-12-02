import React, { Suspense, useState, useEffect } from "react";
import FlashDeals from "./components/flashDeals/flashDealsProducts";
import Header from "./components/header/header";
import requests from "./api/request";
import Products from "./components/products/products";
import Carts from "./components/carts/carts";
import ViewCarts from "./components/carts/ViewCarts";
import Checkout from "./components/checkout/checkout";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        />
        <Carts
          show={show}
          handleClose={handleClose}
          cartItemsTotal={carts}
          updateItemCart={updateItemCart}
          removeAllItems={removeAllItems}
        />
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
                <ViewCarts
                  cartItemsTotal={carts}
                  updateItemCart={updateItemCart}
                  removeAllItems={removeAllItems}
                  checkoutToken={checkoutToken.id}
                />
              ) : (
                alert("Hello")
              )
            }
          />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Home;
