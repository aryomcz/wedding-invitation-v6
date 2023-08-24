"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Observer from "next@js/app/components/observer/observer-up";

export default function Section4 () {
    return (
        <section className="h-full w-full relative -mt-1">  
        <div className="h-fit w-full bg-[#BEB4A3]">
  
          <div className="min-h-fit max-w-full">
              <div
                className="min-h-fit max-w-full flex justify-center items-center pt-16 pb-8">
                <div className="grid h-fit">
                  <div
                    className="text-center  text-[28px] sm:text-[40px] md:text-[45px]  font-jawa leading-loose text-third text-black">
                      <Observer>
                    <h2>Love Story</h2>
                      </Observer>
                  </div>
                </div>
              </div>
  
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper love">
  
            <SwiperSlide>
                <div className="min-h-fit max-w-full flex justify-center items-center">
                  <div className="grid h-fit pb-[80px] md:pb-[100px] ">
                      <div className="">
                        <Observer>

                      <div className="flex justify-center mx-4">
                              <img className="w-[300px] sm:w-[450px] md:w-[600px]  object-cover h-[210px] sm:h-[250px] md:h-[350px] "
                                  src='/img6/gallery-6.jpg' />
                      </div>
                                  </Observer>
                                  <Observer>

                              <div className="max-w-full mt-[10px] text-center text-[#1a1919] text-[24px] sm:text-[28px] md:text-[32px]  font-youkiss pb-3"> 
                              Pertemuan Pertama
                              </div>
                                  </Observer>
                                  <Observer>

                              <div className="max-w-full text-center text-[#333] text-[16px] md:text-[20px] px-4 md:px-10 font-newsreader"
                              >
                              Pada tahun 2017 kami saling mengenal lewat pekerjaan kami di sebuah agensi iklan.
                              </div>
                                </Observer>
                      </div>
                  </div>
              </div>
              </SwiperSlide>
            <SwiperSlide>
                <div className="min-h-fit max-w-full flex justify-center items-center">
                  <div className="grid h-fit pb-[80px] md:pb-[100px] ">
                      <div className="">
                      <div className="flex justify-center mx-4">
                              <img className="w-[300px] sm:w-[450px] md:w-[600px] object-cover h-[210px] sm:h-[250px] md:h-[350px]"
                                  src='/img6/gallery-7.jpg' />
                      </div>
                              <div className="max-w-full mt-[10px]  text-center text-[#1a1919] text-[24px] sm:text-[28px] md:text-[32px] font-youkiss pb-3"> 
                              Pertemuan Kedua
                              </div>
                              <div className="max-w-full text-center text-[#333] text-[16px] md:text-[20px] px-4 md:px-10 font-newsreader"
                              >
                              Pada tahun 2017 kami saling mengenal lewat pekerjaan kami di sebuah agensi iklan.
                              </div>
                      </div>
                  </div>
              </div>
              </SwiperSlide>
             
            </Swiper>
  
          </div>
        </div>
      </section>
        )
}