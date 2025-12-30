"use client"
import { Button } from "@/components/ui/button";
import { PlansData } from "@/data/plans";
import { useFormStore } from "@/store/formStore";
import { PlansType } from "@/types/plans";
import { sectionStyle, sectionSubtitleStyle, sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles";
import { Ban, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export const Plans = () => {
  const { setFormData } = useFormStore();
  const plans: PlansType[] = PlansData;
  const router = useRouter();

  function handleChoosePlan(plan: string) {
    let planFormated: "Plano Básico" | "Plano Prime" | "Plano Pro" = "Plano Pro";
    switch (plan) {
      case "PLANO BÁSICO":
        planFormated = "Plano Básico";
        break;
      case "PLANO PRIME":
        planFormated = "Plano Prime";
        break;
      case "PLANO PRO":
        planFormated = "Plano Pro";
        break;
    }
    setFormData({ signature: planFormated });
    router.push("/register");
  }

  return (
    <section id="plans" className={`${sectionStyle} relative overflow-hidden`}>
      <div className="absolute top-0 w-full">
        <img src="/black_divider_top.png" alt="black_divider_top" className="w-full" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <h1 data-aos="fade-down" className={sectionTitleStyle}>Nossos <span className={sectionTitleSpanStyle}>Planos</span></h1>
        <h2 className={`${sectionSubtitleStyle} max-w-2xl mx-auto text-center`}>Selecione o plano que se adapta aos seus objetivos de condicionamento físico.</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-8 mt-14">
          {plans.map(plan => (
            <div key={plan.id} data-aos="zoom-in">
              <div
                className="group w-80 sm:w-[380px] rounded-2xl p-6 bg-zinc-900/80 backdrop-blur border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary-color)] hover:shadow-xl hover:shadow-orange-500/20">
                <div className="flex flex-col gap-4">
                  <p className="text-2xl font-extrabold">{plan.title}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{plan.description}</p>
                  <div className="flex items-end gap-2">
                    <p className="text-lg">R$</p>
                    <p className="text-4xl font-extrabold text-[var(--primary-color)]">{plan.price.toLocaleString("pt-BR")}</p>
                    <p className="text-sm text-zinc-400 mb-1">/ mês</p>
                  </div>
                </div>
                <span className="w-full h-px bg-zinc-800 block my-6"></span>
                <ul>
                  {plan.accessFeatures.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm mb-3">
                      <Check className="size-4 text-green-500" />
                      <p>{feat}</p>
                    </li>
                  ))}
                  {plan.lockedFeatures?.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm mb-3 opacity-50">
                      <Ban className="size-4 text-red-500" />
                      <p>{feat}</p>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => handleChoosePlan(plan.title)}
                  className={`buttonStyle! mt-6 w-full group-hover:bg-[var(--primary-color)] group-hover:text-black transition`}
                >
                  Escolher este plano
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
