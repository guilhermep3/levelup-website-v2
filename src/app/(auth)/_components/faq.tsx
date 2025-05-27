"use client"
import { FaqData } from "@/data/faq";
import { sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles";
import { useState } from "react"

export const Faq = () => {
   const faqs = FaqData;
   const [showAnswer, setShowAnswer] = useState<number | null>(null);

   function handleShowAnswer(id: number) {
      setShowAnswer((prev) => (prev === id ? null : id))
   }

   return (
      <section id="faq" className="mt-12 mb-32 relative">
         <div className="blur-orange blur-center"></div>
         <div className="container mx-auto p-2">
            <h1 className={sectionTitleStyle}><span className={sectionTitleSpanStyle}>Perguntas</span> frequentes</h1>
            <div className="flex flex-col gap-2 mt-6">
               {faqs.map(faq => (
                  <div key={faq.id}
                     className="bg-[#121212] w-full sm:w-3/4 mx-auto"
                     data-aos="fade-down"   
                  >
                     <button
                        className={`w-full text-left p-4 border-2 border-[var(--primary-color)] rounded-t-xl text-base font-semibold flex cursor-pointer z-30 transition
                           ${showAnswer === faq.id ? 'bg-[var(--primary-color)] text-black' : ''}`}
                        onClick={() => handleShowAnswer(faq.id)}
                     >
                        {faq.question}
                     </button>
                     <p style={{ transition: 'all 0.5s' }} className={`transition duration-300 border-2 border-[var(--primary-color)]/30 z-0 text-sm sm:text-base
                        ${showAnswer === faq.id ? 'max-h-96 opacity-80 p-4 pointer-events-auto' : 'max-h-0 px-4 opacity-0 pointer-events-none'}`}>
                        {faq.answer}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}