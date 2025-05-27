import { Card } from "@/components/ui/card";
import { servicesData } from "@/data/services-data";
import { sectionStyle, sectionSubtitleStyle, sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export const Services = () => {

   return (
      <section id="services" className={sectionStyle}>
         <div className="absolute top-0">
            <img src="/black_divider_top.png" alt="black_divider_top" />
         </div>
         <div className="container mx-auto p-2">
            <h1 data-aos="fade-down" className={sectionTitleStyle}>Nossos <span className={sectionTitleSpanStyle}>Serviços</span></h1>
            <h2 className={sectionSubtitleStyle}>Selecione o plano que se adapta aos seus objetivos de condicionamento físico</h2>
            <div className="grid grid-cols1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-2 justify-items-center items-center">
               {servicesData.map((service) => (
                  <Card key={service.id}
                     className="relative group w-72 h-72 2xl:w-72 2xl:h-80 rounded-lg overflow-hidden cursor-pointer hover:brightness-125 transition"
                     style={{ background: 'linear-gradient(45deg, #58510f93, #000 50%)' }}
                  >
                     <div className="p-3 z-[5] max-w-44">
                        <p className="text-3xl font-bold text-[var(--primary-color)]">{service.title}</p>
                        <p className="my-2 text-sm opacity-80">{service.text}</p>
                        <p className="flex items-center justify-center bg-transparent pl-2 pr-1 py-1 mt-6 rounded-md w-fit text-white font-bold group-hover:bg-[var(--primary-color)] group-hover:text-black transition">
                           Planos
                           <IoIosArrowForward size={20} className="mt-1" />
                        </p>
                     </div>
                     <Image
                        src={`/services/${service.image}`}
                        alt="services1"
                        fill
                        className="object-cover opacity-90 z-[1]"
                        quality={100}
                        sizes="320px"
                     />
                  </Card>
               ))}
            </div>
         </div>
         <div className="absolute bottom-0 rotate-180">
            <img src="/black_divider_top.png" alt="black_divider_top" />
         </div>
      </section>
   )
}