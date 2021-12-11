import React, { useEffect, useState } from "react";
import $ from "jquery";
// API INSTANCE
import instance from "../../../../api/instance";
// STYLINGS MODULES
import images from "../../../../styles/images.module.scss";
// import icons from "../../styles/icons.module.scss";
import cards from "../../../../styles/cards.module.scss";
import slider from "../../../../styles/slider.module.scss";

function Slider({ requests }) {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests);
      // console.log(request.data.results);
      setTrendingProducts(request.data.results);
    }
    fetchData();
  }, [requests]);

  // ADDING DOUBLE ZEROS TO PRICING
  function addZeroes(price) {
    const dec = price.split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    return <span>{"$" + Number(price).toFixed(len)}</span>;
  }

  // DISCOUNT PERCENT BADGE
  function showDiscount(regularPrice, soldPrice) {
    var discount = Math.round(((regularPrice - soldPrice) / soldPrice) * 100);
    return (
      <span className="badge rounded-pill bg-primary">
        {discount + "% off"}
      </span>
    );
  }

  // FIVE STARS
  function fiveStars(productRate) {
    var stars = [];
    productRate = Math.round(productRate);
    for (let index = 0; index < 5; index++) {
      index < productRate
        ? stars
            .push
            // <FontAwesomeIcon icon={faStar} key={index} className={icons.star} />
            ()
        : stars
            .push
            // <FontAwesomeIcon
            //   icon={farStar}
            //   key={index}
            //   className={icons.star}
            // />
            ();
    }
    return <div className="mb-2">{stars}</div>;
  }

  // DEFAULT VALUE FOR X POSITION
  var moveX = 0;

  $("." + slider.slider_countainer).scroll(function () {
    moveX = Math.round($("." + slider.slider_countainer).scrollLeft());
  });

  function scrollCheck() {
    $("." + slider.slider_countainer).scroll(function () {
      var $width = Math.round($("." + slider.slider_countainer).outerWidth());
      var $scrollWidth = Math.round(
        $("." + slider.slider_countainer)[0].scrollWidth
      );
      var $scrollLeft = Math.round(
        $("." + slider.slider_countainer).scrollLeft()
      );

      if ($scrollWidth - $width === $scrollLeft) {
        moveX = $scrollLeft;
      }
      if ($scrollLeft === 0) {
        moveX = $scrollLeft;
      }
    });
  }

  // SCROLL LEFT BUTTON FUNCTION
  function scrollLeft() {
    var itemWidth = $("." + slider.slider_items)[0].offsetWidth + 40;
    if (moveX > 0) {
      moveX = moveX - itemWidth;
      $("." + slider.slider_countainer).scrollLeft(moveX);
    }
  }

  // SCROLL RIGHT BUTTON FUNCTION
  function scrollRight() {
    var itemWidth = $("." + slider.slider_items)[0].offsetWidth + 40;
    var $width = Math.round($("." + slider.slider_countainer).outerWidth());
    var $scrollWidth = Math.round(
      $("." + slider.slider_countainer)[0].scrollWidth
    );
    if (moveX < $scrollWidth - $width) {
      moveX = moveX + itemWidth;
      $("." + slider.slider_countainer).scrollLeft(moveX);
    }
  }

  // RUNNING SCROLL CHECKING
  scrollCheck();

  return (
    <div className={slider.slider}>
      <div className={slider.slider_countainer}>
        {trendingProducts.map((product, i) => (
          <div
            className={slider.slider_items + " " + slider.col_slides_3}
            key={i}
          >
            <div className={cards.cards__products + " card pt-4 h-100"}>
              <div className="col">
                <div className="justify-content-between mx-0 row">
                  <div className="col-md-auto">
                    {showDiscount(
                      product.prices.regular,
                      product.prices.current
                    )}
                  </div>
                  <div className={cards.icons__products + " col-md-2 text-end"}>
                    {/* Button With View Icon */}
                    <button type="button" className="btn p-1">
                      {/* <FontAwesomeIcon icon={faEye} /> */}
                    </button>
                    {/* Button With Heart Icon */}
                    <button type="button" className="btn p-1">
                      {/* <FontAwesomeIcon icon={faHeart} /> */}
                    </button>
                  </div>
                </div>
              </div>
              <img
                className={images.img__products}
                src={
                  product.images.standard
                    ? product.images.standard
                    : "./images/unavailable.jpg"
                }
                alt={product.names.title}
              />
              <div className="card-body">
                <h6 className="card-title">{product.names.title}</h6>
                {fiveStars(product.customerReviews.averageScore)}
                <h6 className="text-primary">
                  {addZeroes(product.prices.current.toString())}
                  <strike className="text-black-50 ms-2">
                    {addZeroes(product.prices.regular.toString())}
                  </strike>
                </h6>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className={slider.btn_left + " btn btn-primary btn-lg rounded-circle"}
          onClick={scrollLeft}
        >
          {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
        </button>
        <button
          type="button"
          className={
            slider.btn_right + " btn btn-primary btn-lg rounded-circle"
          }
          onClick={scrollRight}
        >
          {/* <FontAwesomeIcon icon={faChevronRight} /> */}
        </button>
      </div>
      {/* SLIDER BUTTONS */}
    </div>
  );
}

export default Slider;
