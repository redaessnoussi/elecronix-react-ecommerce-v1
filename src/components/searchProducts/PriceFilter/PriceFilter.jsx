import React, { memo } from "react";
// import Slider from "rc-slider";

// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range);

function PriceFilter(priceFilter) {
  let arrayPriceFilter = priceFilter.priceFilter;
  // const [priceFilter, setpriceFilter] = useState([0, 400]);
  // console.log(priceFilter.setpriceFilter);

  return (
    priceFilter && (
      <>
        <h6 className="mb-3">Filter by Price</h6>
        {/* <Range
          min={0}
          max={2000}
          defaultValue={[0, 400]}
          tipFormatter={(value) => `$${value}`}
          step={100}
          onChange={(value) => priceFilter.setpriceFilter(value)}
          className="mb-3"
          value={arrayPriceFilter}
        /> */}
        <input
          type="range"
          className="form-range"
          min="0"
          max="2000"
          step="100"
          id="range"
          onChange={(e) => priceFilter.setpriceFilter(e.target.value)}
          value={arrayPriceFilter}
        />

        <p className="text-black-50 small mb-0">
          Price:{" "}
          <span className="text-black">
            {"$"}
            {arrayPriceFilter} -
            {/* {"$"}
            {arrayPriceFilter[1]} */}
          </span>
        </p>
        <hr className="my-4" />
      </>
    )
  );
}

export default memo(PriceFilter);
