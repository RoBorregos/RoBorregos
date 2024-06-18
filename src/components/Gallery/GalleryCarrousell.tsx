import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow ,Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  "https://roborregos.com/static/media/1.531e3de3251f37e6f56a.jpg",
  "https://roborregos.com/static/media/2.35007839edb34ff91093.jpg",
  "https://roborregos.com/static/media/3.5060f121a14ca5679994.jpg",
  "https://roborregos.com/static/media/4.d5f17462d1b63b6e3acc.jpg",
  "https://roborregos.com/static/media/5.71fb42d50fb2efd6ec3e.jpg",
  "https://roborregos.com/static/media/6.5cf57c0319c99ec00fdf.jpg",
  "https://roborregos.com/static/media/7.a87935e4637ae459380b.jpg",
  "https://roborregos.com/static/media/8.5d6e9986e3e60bfe483e.jpg",
  "https://roborregos.com/static/media/9.1cd6b2edb4c61e3f3a2e.jpg",
  "https://roborregos.com/static/media/10.ed513f8452d5e4bdc18c.jpg",
  "https://roborregos.com/static/media/11.d9fa0882116eafd27677.jpg",
  "https://roborregos.com/static/media/12.4c38ea3a9f916f07f81f.jpg",
];

const GalleryCarrousell = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt=""
              className="w-[600px] aspect-video object-cover rounded-xl "
            />
          </SwiperSlide>
        
        ))}
      </Swiper>
    </>
  );

  //  {/* <div className="w-full h-full absolute bg-Gallery_Gradient " /> */}
};

export default GalleryCarrousell;
