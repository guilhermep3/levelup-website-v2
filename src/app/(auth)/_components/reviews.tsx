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
    function checkNavigation() {
      setShowNavigation(window.innerWidth >= 768);
    }
    checkNavigation();
    window.addEventListener("resize", checkNavigation);
    return () => window.removeEventListener("resize", checkNavigation);
  }, []);

  return (
    <section id="review" className="relative py-20 bg-black overflow-hidden">
      <div className={containerStyle}>
        <h1 data-aos="fade-down" className={sectionTitleStyle}><span className={sectionTitleSpanStyle}>Avaliações</span> dos Clientes</h1>
        <h2 className={sectionSubtitleStyle}>Veja algumas das avaliações recentes de nossos clientes.</h2>
        <Swiper slidesPerView={1} modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={14}
          breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 24 } }}>
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div data-aos="zoom-in"
                className="relative mx-3 md:mx-6 mt-10 mb-16 p-6 md:p-8 rounded-2xl bg-zinc-900/80 backdrop-blur border border-zinc-800 transition">
                <FaQuoteRight className="absolute -top-5 left-6 text-4xl text-[var(--secondary-color)]" />
                <p className="text-lg sm:text-xl font-bold leading-tight">{review.title}</p>
                <p className="text-sm sm:text-base text-zinc-300 my-3">{review.body}</p>
                <div className="flex gap-4 h-16 mt-4 items-center">
                  <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-[var(--secondary-color)]/40">
                    <img src={`reviews/${review.image}`} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-base sm:text-lg font-semibold">{review.name}</p>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-lg text-[var(--secondary-color)]" />
                        <p className="text-lg font-bold text-[var(--secondary-color)]">{review.rating.toFixed(1)}</p>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400">{review.profession}</p>
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
