import { Card, CardDescription } from "@/components/ui/card";
import { aboutType } from "@/types/about-type"

type props = {
  item: aboutType;
}

export const AboutItem = ({ item }: props) => {
  const Icon = item.icon;

  return (
    <div data-aos="zoom-in">
      <Card className="group w-40 sm:w-72 p-4 sm:p-6 flex flex-col gap-3 bg-zinc-900/80 backdrop-blur border border-zinc-800 hover:border-(--primary-color)/50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-zinc-800 transition duration-300 group-hover:bg-(--primary-color)">
            <Icon className="size-5 sm:size-7 text-(--primary-color) group-hover:text-black" />
          </div>
          <p className="text-xl sm:text-2xl font-extrabold text-(--primary-color)">
            {item.number}
          </p>
        </div>
        <p className="text-sm sm:text-base font-semibold tracking-wide">
          {item.title}
        </p>
        <CardDescription className="text-xs sm:text-sm text-zinc-400">
          {item.description}
        </CardDescription>
      </Card>
    </div>
  )
}
