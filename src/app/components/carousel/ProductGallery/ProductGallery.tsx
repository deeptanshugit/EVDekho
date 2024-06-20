import React, { useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../ProductGallery/ProductGallery.css";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useSwiper } from "swiper/react";
import { Grid, Typography } from "@mui/material";
import { fontSize } from "../../theme/fontsize";

const images = [
  { src: "/electricscooter/ola/ola-s1-pro.png", name: "Image 1", index: 1 },
  { src: "/electricscooter/ola/ola-s1-air.png", name: "Image 2", index: 2 },
  { src: "/electricscooter/ola/ola-s1-x-plus.png", name: "Image 3", index: 3 },
  { src: "/electricscooter/ola/ola-s1-x.png", name: "Image 4", index: 4 },
  { src: "/electricscooter/ola/ola-s1-pro.png", name: "Image 1", index: 5 },
  { src: "/electricscooter/ola/ola-s1-air.png", name: "Image 2", index: 6 },
  { src: "/electricscooter/ola/ola-s1-x-plus.png", name: "Image 3", index: 7 },
  { src: "/electricscooter/ola/ola-s1-x.png", name: "Image 4", index: 8 },
  { src: "/electricscooter/ola/ola-s1-pro.png", name: "Image 1", index: 9 },
  { src: "/electricscooter/ola/ola-s1-air.png", name: "Image 2", index: 10 },
  { src: "/electricscooter/ola/ola-s1-x-plus.png", name: "Image 3", index: 11 },
  { src: "/electricscooter/ola/ola-s1-x.png", name: "Image 4", index: 12 },
];

function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setSelectedImage(images[swiper.realIndex]);
  };

  const handleSwiper = (swiper: SwiperClass) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div className="galleryContainer">
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "white",
        } as React.CSSProperties}
        spaceBetween={10}
        navigation
        effect="fade"
        onSlideChange={handleSlideChange}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mySwiper3 mt-3">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography fontSize={fontSize.h4.medium} align="left">
              {selectedImage.index}/{images.length}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={fontSize.h4.medium} align="center">
              {selectedImage.name}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontSize={fontSize.h4.medium} align="right">
              {" "}
              {selectedImage.name}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Swiper
        onSwiper={handleSwiper}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        freeMode={true}
        watchSlidesProgress={true}
        modules={[EffectFade, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductGallery;
