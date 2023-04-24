import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const MyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: "https://splidejs.com/images/slides/general/01.jpg",
    },
    {
      id: 2,
      imageUrl: "https://splidejs.com/images/slides/general/03.jpg",
    },
    {
      id: 3,
      imageUrl: "https://splidejs.com/images/slides/general/02.jpg",
    },
  ];

  const thumbnailOptions = {
    fixedWidth: 100,
    height: 60,
    gap: 10,
    cover: true,
    isNavigation: true,
    focus: "center",
  };

  return (
    <div>
      <Splide
        options={{
          type: "fade",
          height: "30vw",
          autoHeight: false,
          cover: true,
          width: "80vw",
          onMoved: (splide) => {
            setCurrentIndex(splide.index);
          },
        }}
        onMoved={(splide) => {
          setCurrentIndex(splide.index);
        }}
        hasSliderWrapper
      >
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
          </SplideSlide>
        ))}
      </Splide>

      <Splide options={thumbnailOptions} hasSliderWrapper>
        {slides.map((slide, index) => (
          <SplideSlide key={slide.id}>
            <div
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MyComponent;
