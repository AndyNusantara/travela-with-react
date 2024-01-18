import { useState } from "react";
import Data from "../utils/destination-data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const datas = Data;

  function carouselOnChangeHandler(index) {
    setIndex(index);
  }

  return (
    <div className="hero-section">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop={true}
        className="carousel"
        selectedItem={datas[index]}
        onChange={carouselOnChangeHandler}
      >
        {datas.map((item) => {
          return (
            <div key={item.alt} className="carousel-item">
              <img
                className="carousel-item__img"
                src={`./${item.url}`}
                alt={item.alt}
              />
              <div className="carousel-overlay">
                <div className="carousel-item__text-wrapper">
                  <h1 className="carousel-item__title">{item.title}</h1>
                  <h3 className="carousel-item__desc">{item.desc}</h3>
                  <button className="carousel-item__button button">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
