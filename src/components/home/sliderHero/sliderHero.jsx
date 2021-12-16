import React from "react";
// Importing React Bootsrap
import { Image } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function SliderHero() {
  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination]);

  const SliderHero = () => (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src="./images/hero-1.jpg" fluid />
        <div className="position-absolute top-50 start-0 translate-middle-y pt-5 ps-5 w-50">
          <h3 className="fw-bold">This season’s perfect pair</h3>
          <p>
            Get free Galaxy Buds2 with Galaxy Z Series Phones and enjoy the
            highest online trade-in values for eligible devices.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/hero-2.jpg" fluid />
        <div className="position-absolute top-50 start-0 translate-middle-y pt-5 ps-5 w-50">
          <h3 className="fw-bold">
            Save up to $2,500 on Samsung Neo QLED 8K TVs
          </h3>
          <p>There's still time to find great offers on last-minute gifts.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/hero-3.jpg" fluid />
        <div className="position-absolute top-50 start-0 translate-middle-y pt-5 ps-5 w-50">
          <h5>Extended Black Friday offers</h5>
          <h3 className="fw-bold">Get up to $1,000 off select Refrigerators</h3>
          <p>
            Enjoy extended Black Friday pricing with up to 35% off Washers,
            Dryers and AirDressers and up to 25% off Vacuums.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );

  return (
    <>
      <SliderHero />
    </>
  );
}

export default SliderHero;
