"use client"
import { FaqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Faq = () => {
  const faqs = FaqData;
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  function handleShowAnswer(id: number) {
    setShowAnswer(prev => prev === id ? null : id);
  }

  return (
    <section id="faq" className="relative pt-20 pb-40 bg-black overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_20%,rgba(255,115,0,0.12),transparent_45%)]"></div>
      <div className="container mx-auto px-4">
        <h1 data-aos="fade-down" className="sectionTitleStyle">
          <span className="sectionTitleSpanStyle">Perguntas</span> frequentes
        </h1>
        <div className="flex flex-col gap-4 mt-12">
          {faqs.map(faq => (
            <div key={faq.id} data-aos="fade-down"
              className="w-full sm:w-3/4 mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/80 backdrop-blur transition">
              <button onClick={() => handleShowAnswer(faq.id)}
                className={`w-full p-4 sm:p-5 flex justify-between items-center text-left font-semibold transition cursor-pointer
								${showAnswer === faq.id ? "bg-(--primary-color) text-black" : "bg-transparent text-white hover:bg-zinc-800"}`}
              >
                {faq.question}
                <span className={`transition-transform duration-300 ${showAnswer === faq.id ? "rotate-180" : ""}`}>
                  <ChevronDown />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500
								${showAnswer === faq.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="p-4 sm:p-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};