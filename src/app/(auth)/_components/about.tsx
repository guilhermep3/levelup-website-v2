import { aboutData } from "@/data/about-data"
import { AboutItem } from "./about-item"
import { AboutChart } from "@/components/about-chart"

export const About = () => {
  return (
    <section id="about" className="relative w-full py-16 sm:py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_20%_20%,rgba(255,183,0,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,115,0,0.1),transparent_50%)]"></div>
      <h1 data-aos="fade-down" className="sectionTitleStyle mb-12">
        <span className="sectionTitleSpanStyle">Sobre</span> Nós
      </h1>
      <div className="containerStyle flex flex-col-reverse lg:flex-row items-center gap-14">
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-4 justify-items-center">
          {aboutData.map((item) => (
            <AboutItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex-1 flex justify-center">
          <AboutChart />
        </div>
      </div>
    </section>
  )
}