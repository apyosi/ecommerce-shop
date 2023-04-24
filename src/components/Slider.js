import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Slider = () => {
  const primaryRef = useRef(null);
  const thumbnailRef = useRef(null);

  const primaryOptions = {
    type: "loop",
    perPage: 1,
    pagination: false,
    gap: "1rem",
    autoHeight: true,
    sync: { target: thumbnailRef.current },
  };

  const thumbnailOptions = {
    type: "slide",
    rewind: true,
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    cover: true,
    width: 100,
    height: 70,
    breakpoints: {
      768: {
        perPage: 2,
        width: 66,
        height: 44,
      },
      480: {
        perPage: 1,
        width: 100,
        height: 70,
      },
    },
  };

  const primarySlides = [
    {
      id: 1,
      src: "https://splidejs.com/images/slides/general/01.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://splidejs.com/images/slides/general/03.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://splidejs.com/images/slides/general/02.jpg",
      alt: "Image 3",
    },
  ];

  const thumbnailSlides = [
    {
      id: 1,
      src: "https://splidejs.com/images/slides/general/01.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://splidejs.com/images/slides/general/03.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://splidejs.com/images/slides/general/02.jpg",
      alt: "Image 3",
    },
  ];

  return (
    <div className="slider-container">
      <Splide options={primaryOptions} ref={primaryRef}>
        {primarySlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </SplideSlide>
        ))}
      </Splide>
      <Splide
        options={thumbnailOptions}
        className="slider-thumbnails"
        ref={thumbnailRef}
      >
        {thumbnailSlides.map((slide) => (
          <SplideSlide key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
