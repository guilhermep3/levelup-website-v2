import { TrainersData } from "@/data/trainers";
import { containerStyle, sectionSubtitleStyle, sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Trainers = () => {
   const trainers = TrainersData;

   return (
      <section id="trainers" className="relative bg-black">
         <div className={containerStyle}>
            <h1 data-aos="fade-down" className={sectionTitleStyle}>Nossos <span className={sectionTitleSpanStyle}>Treinadores</span></h1>
            <h2 className={sectionSubtitleStyle}>Os 4 treinadores mais experientes dentre os mais de 50 do nosso time</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-0 py-10 place-items-center overflow-hidden">
               {trainers.map((trainer, index) => (
                  <div key={index} className="group w-72 mb-2 hover:brightness-110 transition duration-200">
                     <div className="w-full relative"
                        style={{ background: 'radial-gradient(circle, #ff730040, #060606 80%)' }}
                     >
                        <img src={`trainers/${trainer.image}`}
                           alt="treinador 1"
                           className="relative w-full bottom-4 scale-110 group-hover:scale-[1.20] transition duration-300"
                        />
                     </div>
                     <div className="bg-[#060606] p-3 brightness-125">
                        <div className="flex items-end gap-3">
                           <p className="text-xl font-bold">{trainer.name}</p>
                           <span className="text-[var(--secondary-color)] font-semibold">+{trainer.experience} exp</span>
                        </div>
                        <p className="my-2 opacity-70 text-sm">{trainer.role}</p>
                        <div className="flex items-center gap-3">
                           <a href="#">Ver mais</a>
                           <FaLongArrowAltRight className="text-[var(--secondary-color)] text-xl" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}