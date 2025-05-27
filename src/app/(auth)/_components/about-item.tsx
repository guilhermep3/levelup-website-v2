import { Card, CardDescription } from "@/components/ui/card";
import { aboutType } from "@/types/about-type"

type props = {
   item: aboutType;
}
export const AboutItem = ({item}: props) => {
   const Icon = item.icon
   
   return (
      <Card data-aos="zoom-in" className="flex flex-col gap-2 w-40 sm:w-72 p-2 sm:p-4 group">
         <div className="flex items-center gap-2">
            <Icon className="size-12 p-2 bg-zinc-800 rounded-full text-[var(--primary-color)] transition duration-200
               group-hover:bg-[var(--primary-color)] group-hover:text-black" />
            <p className="text-2xl sm:text-3xl text-[var(--primary-color)] font-bold">{item.number}</p>
         </div>
         <div className="flex items-center gap-2">
            <p className="text-base sm:text-lg">{item.title}</p>
         </div>
         <CardDescription>{item.description}</CardDescription>
      </Card>
   )
}