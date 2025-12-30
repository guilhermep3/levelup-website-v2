import Image from "next/image";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import { bigButtonStyle, containerStyle, sectionStyle } from "@/utils/styles";
import Link from "next/link";

export const Hero = () => {

  return (
    <section id="hero" className={`${sectionStyle} relative min-h-screen py-16 sm:py-24 overflow-hidden`}>
      <div className="absolute inset-0 z-[-10] bg-[radial-gradient(circle_at_30%_20%,rgba(255,183,0,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,115,0,0.12),transparent_55%)]"></div>
      <div className="absolute inset-0 z-[-10] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute bottom-0 rotate-180 w-full">
        <img src="/black_divider_top.png" alt="black_divider_top" className="w-full" />
      </div>
      <div className={`${containerStyle} flex flex-col-reverse sm:flex-row items-center justify-between gap-14`}>
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
          <h1 data-aos="zoom-in"
            className="font-extrabold leading-tight tracking-tight text-3xl sm:text-4xl lg:text-5xl"
          >
            Alcance seu
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl">
              POTENCIAL MÁXIMO
            </span>
            <br />
            com LevelUP
          </h1>
          <p data-aos="fade-down" className="max-w-xl text-sm sm:text-base text-zinc-300">
            Na <span className="font-semibold text-white">LevelUP</span>, você
            encontra estrutura moderna, treinos personalizados e um ambiente
            feito para quem quer evoluir de verdade.
          </p>
          <div data-aos="fade-down">
            <Link href="/register"
              className={`${bigButtonStyle} mt-2 shadow-lg shadow-yellow-500/20 hover:scale-105 transition-transform`}
            >
              Começar minha jornada
            </Link>
          </div>
        </div>
        <div data-aos="zoom-in"
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full bg-yellow-500/20 blur-[90px]"></div>
          <Image src="/hero.png" alt="imagem do hero"
            width={360} height={360}
            className="relative z-10 w-60 sm:w-80 xl:w-[380px]"
          />
          <BsFillLightningChargeFill className="absolute z-0 text-[360px] sm:text-[420px] lg:text-[520px] text-[var(--primary-color)] -mt-16" />
          <div className="icon-hero absolute top-4 right-6 sm:right-14 p-4 rounded-full border border-yellow-500/40 bg-zinc-900/80 backdrop-blur shadow-lg shadow-yellow-500/20 animate-pulse hover:">
            <GiWeightLiftingUp className="size-7 sm:size-9 text-yellow-400" />
          </div>
          <div className="icon-hero absolute bottom-4 left-6 sm:left-14 p-4 rounded-full border border-yellow-500/40 bg-zinc-900/80 backdrop-blur shadow-lg shadow-yellow-500/20 animate-pulse hover:">
            <FaDumbbell className="size-7 sm:size-9 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
