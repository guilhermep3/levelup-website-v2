"use client"
import { ReviewsData } from "@/data/reviews";
import { containerStyle, sectionSubtitleStyle, sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles";
import { useEffect, useState } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Reviews = () => {
   const [showNavigation, setShowNavigation] = useState(false);
   const reviews = ReviewsData;

   useEffect(() => {
      function checkNavigation(){
         setShowNavigation(window.innerWidth >= 768);
      }
      checkNavigation();
      window.addEventListener("resize", checkNavigation);
      return () => window.removeEventListener("resize", checkNavigation);
   })

   return (
      <section id="review" className="mt-12 mb-6">
         <div className={containerStyle}>
            <h1 data-aos="fade-down" className={sectionTitleStyle}><span className={sectionTitleSpanStyle}>Avaliações</span> dos Clientes</h1>
            <h2 className={sectionSubtitleStyle}>Veja algumas das avaliações recentes de nossos clientes.</h2>
            <Swiper
               slidesPerView={1}
               modules={[ Pagination]}
               pagination={{ clickable: true }}
               spaceBetween={10}
               breakpoints={{
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 20
                  }
               }}
            >
               {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                     <div
                        className="p-5 pt-6 bg-[#141414] mx-3 md:mx-10 mt-8 rounded-xl relative mb-16"
                     >
                        <FaQuoteRight className="absolute top-0 text-4xl -mt-5 text-[var(--secondary-color)]" />
                        <p className="text-lg sm:text-xl font-bold">{review.title}</p>
                        <p className="text-sm sm:text-base py-3">{review.body}</p>
                        <div className="flex gap-3 h-16 mt-2">
                           <div className="w-16 h-16 rounded-2xl overflow-hidden">
                              <img src={`reviews/${review.image}`} alt="review1" className="w-full h-full bg-zinc-700 object-cover" />
                           </div>
                           <div className="flex-1 flex flex-col justify-between">
                              <div className="flex justify-between">
                                 <p className="text-base sm:text-lg font-semibold">{review.name}</p>
                                 <div className="flex items-center gap-1">
                                    <FaStar className="text-lg sm:text-xl text-[var(--secondary-color)] -mt-1" />
                                    <p className="text-lg sm:text-xl text-[var(--secondary-color)] font-bold">{review.rating.toFixed(1)}</p>
                                 </div>
                              </div>
                              <p className="text-sm sm:text-base">{review.profession}</p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   )
}