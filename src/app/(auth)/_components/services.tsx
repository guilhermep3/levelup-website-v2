import { Card } from "@/components/ui/card";
import { servicesData } from "@/data/services-data";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export const Services = () => {
  return (
    <section id="services"
      className="sectionStyle relative overflow-hidden"
    >
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_25%_20%,rgba(255,183,0,0.14),transparent_45%),radial-gradient(circle_at_75%_80%,rgba(255,115,0,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 w-full">
        <img src="/black_divider_top.png" alt="black_divider_top" className="w-full" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <h1 data-aos="fade-down" className="sectionTitleStyle mb-3">
          Nossos <span className="sectionTitleSpanStyle">Serviços</span>
        </h1>
        <h2 data-aos="fade-down" className="sectionSubtitleStyle mb-14 max-w-2xl mx-auto text-center">
          Selecione o plano que se adapta aos seus objetivos de condicionamento físico
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {servicesData.map((service) => (
            <div data-aos="zoom-in">
              <Card key={service.id}
                className="relative group w-72 h-80 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/70 backdrop-blur transition-all! duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/20"
              >
                <div className="absolute inset-0 z-1 bg-linear-to-t from-black/90 via-black/50 to-transparent"></div>
                <Image src={`/services/${service.image}`} alt={service.title}
                  fill quality={100} sizes="320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="relative z-2 h-full p-5 flex flex-col justify-end">
                  <p className="text-3xl font-extrabold text-(--primary-color)">
                    {service.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    {service.text}
                  </p>
                  <div className="mt-6 flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-zinc-800/80 backdrop-blur text-sm font-semibold transition-all group-hover:bg-(--primary-color) group-hover:text-black">
                    Ver planos
                    <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-full rotate-180">
        <img src="/black_divider_top.png" alt="black_divider_top" className="w-full" />
      </div>
    </section>
  )
}
