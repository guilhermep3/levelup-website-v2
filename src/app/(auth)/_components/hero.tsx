import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell } from 'react-icons/fa';
import { bigButtonStyle, containerStyle, sectionStyle } from "@/utils/styles";
import Link from "next/link";

export const Hero = () => {

   return (
      <section id="hero" className={sectionStyle + ' py-10 sm:py-24 min-h-screen'}>
         <div className="absolute inset-0 z-[-10] h-full  w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute inset-x-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-yellow-400 opacity-20 blur-[100px]"></div>
         </div>
         <div className="absolute z-[-10] h-full  w-full bg-transparent">
            <div className="absolute h-full w-full bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
         </div>
         <div className="absolute inset-0 z-[-10] h-full w-full bg-transparent bg-[linear-gradient(to_right,#323232_1px,transparent_1px),linear-gradient(to_bottom,#323232_1px,transparent_1px)] bg-[size:7rem_4rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ff730010,transparent)]"></div>
         </div>
         <div className="absolute bottom-0 rotate-180">
            <img src="/black_divider_top.png" alt="black_divider_top" />
         </div>
         <div className={`${containerStyle} flex justify-center items-center flex-col sm:flex-row h-full overflow-x-hidden`}>
            <div className="flex-1">
               <div className="flex flex-col items-center gap-6 text-center mt-5 sm:mt-0">
                  <h1 data-aos="zoom-in" className="flex flex-col gap-2 h1-hero text-2xl sm:text-3xl lg:text-4xl font-bold">Alcance seu
                     <br />
                     <strong className="text-3xl sm:text-4xl lg:text-5xl text-[var(--primary-color)]">POTENCIAL MÁXIMO</strong><br />
                     com LevelUP
                  </h1>
                  <p data-aos="fade-down" className="text-sm sm:text-base">Na <span className="font-semibold">LevelUP</span>, oferecemos estrutura de ponta, treinos personalizados e um ambiente motivador para você alcançar seus objetivos. Aqui é o seu lugar.</p>
                  <Link href={'/register'}
                     className={bigButtonStyle}
                     data-aos="fade-up"
                  >Começar minha jornada</Link>
               </div>
            </div>
            <div data-aos="zoom-in" className="flex-1 flex justify-center items-center relative w-full pt-11 sm:pt-0 mt-7 sm:mt-0 ">
               <Image src={'/hero.png'} alt="imagem do hero"
                  width={200} height={200}
                  className="w-56 sm:w-72 xl:w-[360px]" />
               <BsFillLightningChargeFill className="text-[340px] sm:text-[390px] lg:text-[480px] absolute z-[-1] -mt-20 text-[var(--primary-color)]" />
               <div className="icon-hero icon-hero1 absolute top-0 right-6 sm:right-12 lg:right-16 p-4 text-center border-2 border-[var(--primary-color)] rounded-full bg-zinc-900">
                  <GiWeightLiftingUp className="size-6 sm:size-10" />
               </div>
               <div className="icon-hero icon-hero2 absolute bottom-0 left-6 sm:left-12 lg:left-16 p-4 text-center border-2 border-[var(--primary-color)] rounded-full bg-zinc-900">
                  <FaDumbbell className="size-6 sm:size-10" />
               </div>
            </div>
         </div>
      </section>
   )
}