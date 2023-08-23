"use client";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/react";
import React, { use, useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { images, CustomImage } from "next@js/app/section7/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function App() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <section className="bg-[#BEB4A3] ">
        <div className="flex justify-center items-center w-full flex-wrap pt-5">
              <div className="text-center font-youkiss text-4xl text-black">Gallery</div>
            </div>
            <div className="w-full max-w-4xl mx-auto py-3 px-4 min-[1700px]:px-8 items-center mt-8 ">
        <div className=" h-0 max-[3000px]:pb-[56.25%] max-[3500px]:pb-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={6}
            // centeredSlides={true}
            loop={false}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 15,
              },

              1000: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
          >
                        <SwiperSlide>
                  <iframe
                    className="top-0  w-full aspect-video  rounded-md"
                    src="https://www.youtube.com/embed/ojodJ2BEmZk"
                    title="YouTube video"
                    allowFullScreen
                  />
              </SwiperSlide>
            {/* <SwiperSlide>
              <iframe
                className="top-0 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[700px] 2xl:h-[900px] min-[2560px]:h-[1300px] min-[3500px]:h-[1200px] min-[4000px]:h-[1800px] rounded-xl "
                // src="https://www.youtube.com/embed/ojodJ2BEmZk"
                src={
                  preweddingVideo?.video_name ??
                  preweddingVideo?.url_video ??
                  "https://www.youtube.com/embed/ojodJ2BEmZk"
                }
                title="YouTube video"
                allowFullScreen
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      <div className="object-cover-gallery">
      <Gallery
        images={images}
        margin={0}
        onClick={handleClick}
        enableImageSelection={false}
        />
     </div>  
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </section>
  );
}
