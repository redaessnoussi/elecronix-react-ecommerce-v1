import React, { useEffect, useState } from "react";
import instance from "../api/instance";

function TrendingViewed({ fetchUrl }) {
  const [trendingProducts, seTrendingProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      console.log(request.data.results);
      seTrendingProducts(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  // ADDING DOUBLE ZERSS TO PRICING
  function addZeroes(num) {
    const dec = num.split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    console.log(Number(num).toFixed(len));
    return Number(num).toFixed(len);
  }

  // FUNCTIONS RETURNS PRICINGS

  return (
    <div>
      <div className="container">
        <h1>Trending Viewed Products</h1>
        <div className="row">
          {trendingProducts.map((product, i) => (
            <div className="col-md-3" key={i}>
              <div className="card">
                <img
                  className="img__products"
                  src={product.images.standard}
                  alt=""
                />
                <div className="card-body">
                  <h6 className="card-title">{product.names.title}</h6>
                  <h6 className="text-danger">
                    {addZeroes(product.prices.current)}
                    <strike className="text-black-50 ms-2">
                      {product.prices.regular}
                    </strike>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingViewed;
