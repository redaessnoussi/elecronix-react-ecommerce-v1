import React from "react";
import TrendingViewed from "./components/trendingViewedProducts";
import requests from "./api/request";
import "./styles/styles.scss";

function Home() {
  return (
    <>
      <TrendingViewed fetchUrl={requests.trendingViewed} />
    </>
  );
}

export default Home;
