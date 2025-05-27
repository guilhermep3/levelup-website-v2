import { aboutData } from "@/data/about-data"
import { containerStyle, sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles"
import { AboutItem } from "./about-item"
import { AboutChart } from "@/components/about-chart"

export const About = () => {
   return (
      <section id="about" className="relative w-full py-12 sm:py-20 bg-black">
         <h1 data-aos="fade-down" className={sectionTitleStyle}><span className={sectionTitleSpanStyle}>Sobre </span>Nós</h1>
         <div className={`${containerStyle} flex flex-col lg:flex-row justify-center items-center gap-4`}>
            <div className="flex-1 flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-end align-center">
               {aboutData.map((item) => (
                  <AboutItem key={item.id} item={item} />
               ))}
            </div>
            <div className="flex-1">
               <AboutChart />
            </div>
         </div>
      </section>
   )
}
