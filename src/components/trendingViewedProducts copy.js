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
                  alt={product.names.title}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.names.title}</h6>
                  <h6 className="text-danger">{product.prices.current}</h6>
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
