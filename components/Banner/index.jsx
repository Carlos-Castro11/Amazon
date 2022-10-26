import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // re

export const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoplay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://store-images.s-microsoft.com/image/apps.24594.14606951565968665.3ee1b191-70b1-4906-a2af-cd057bdef580.c3e81551-5bc2-45ab-9892-204e5c16c034?mode=scale&q=90&h=720&w=1280"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://variety.com/wp-content/uploads/2021/11/AsWeSeeIt_S1_ShowBanner_1920x1080_SensoryOverload_Andresen_FINAL.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/06/banner_1920x1080_CPE.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};
