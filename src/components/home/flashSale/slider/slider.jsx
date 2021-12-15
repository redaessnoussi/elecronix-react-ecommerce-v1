import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import $ from "jquery";
// REACT ICONS
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// API INSTANCE
import instance from "../../../../api/instance";
// STYLINGS MODULES
import images from "../../../../styles/images.module.scss";
import icons from "../../../../styles/icons.module.scss";
import cards from "../../../../styles/cards.module.scss";
import slider from "../../../../styles/slider.module.scss";

function Slider({ requests }) {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests);
      console.log(request.data.results);
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
      <span className="badge bg-primary px-3 py-2">{discount + "% OFF"}</span>
    );
  }

  // FIVE STARS
  function fiveStars(productRate) {
    var stars = [];
    productRate = Math.round(productRate);
    for (let index = 0; index < 5; index++) {
      index < productRate
        ? stars.push(<AiFillStar className={icons.star} key={index} />)
        : stars.push(<AiOutlineStar className={icons.star} key={index} />);
    }
    return <div className="mb-0">{stars}</div>;
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
        $("." + slider.slider_countainer).scrollLeft(0);
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
                <div className="justify-content-end mx-0 row mb-4">
                  <div className="col-md-auto">
                    {showDiscount(
                      product.prices.regular,
                      product.prices.current
                    )}
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
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="text-center">
                  <p>{product.names.title}</p>
                  {fiveStars(product.customerReviews.averageScore)}
                  <h6 className="text-primary">
                    <strike className="text-black-50">
                      {addZeroes(product.prices.regular.toString())}
                    </strike>
                    <span className="mx-2">-</span>
                    {addZeroes(product.prices.current.toString())}
                  </h6>
                </div>
                {/* Available Items */}
                <div>
                  <div className="d-flex justify-content-between mb-1">
                    <p className="small mb-0">Available: 10</p>
                    <p className="small mb-0">Sold: 5</p>
                  </div>
                  <ProgressBar now={60} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className={slider.btn_left + " btn btn-primary"}
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className={slider.btn_right + " btn btn-primary"}
          onClick={scrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
      {/* SLIDER BUTTONS */}
    </div>
  );
}

export default Slider;
