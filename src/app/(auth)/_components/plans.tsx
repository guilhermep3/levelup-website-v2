"use client"
import { Button } from "@/components/ui/button";
import { PlansData } from "@/data/plans"
import { useFormStore } from "@/store/formStore";
import { PlansType } from "@/types/plans";
import { buttonStyle, sectionStyle, sectionSubtitleStyle, sectionTitleSpanStyle, sectionTitleStyle } from "@/utils/styles";
import { Ban, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Plans = () => {
   const { formData, setFormData } = useFormStore()
   const plans: PlansType[] = PlansData;
   const router = useRouter();

   function handleChoosePlan(plan: any) {
      let planFormated = "Plano Pro";
      switch (plan) {
         case 'PLANO BÁSICO':
            planFormated = "Plano Básico";
            break;
         case 'PLANO PRIME':
            planFormated = "Plano Prime";
            break;
         case 'PLANO PRO':
            planFormated = "Plano Pro";
            break;
         default:
            planFormated = "Plano Pro";
            break;
      }
      handleFormatePlan(planFormated)
   }

   function handleFormatePlan(plan: any) {
      setFormData({ signature: plan })
      router.push('/register');
   }

   return (
      <section id="plans" className={sectionStyle}>
         <div className="absolute top-0">
            <img src="/black_divider_top.png" alt="black_divider_top" />
         </div>
         <div className="container mx-auto p-2">
            <h1 data-aos="fade-down" className={sectionTitleStyle}>Nossos <span className={sectionTitleSpanStyle}>Planos</span></h1>
            <h2 className={sectionSubtitleStyle}>Selecione o plano que se adapta aos seus objetivos de condicionamento físico.</h2>
            <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row gap-5 flex-wrap">
               {plans.map(plan => (
                  <div key={plan.id} className={`rounded-xl p-4 sm:p-5 w-80 sm:w-[400px] bg-black border-2 hover:brightness-110 transition
                     border-[var(--secondary-color)] hover:border-[var(--primary-color)]
                     `}
                  >
                     <div className="flex flex-col gap-4">
                        <p className="text-xl sm:text-2xl font-bold">{plan.title}</p>
                        <p className="text-sm text-zinc-300">{plan.description}</p>
                        <div className="flex items-center gap-2">
                           <p className="text-lg">R$ <span className="text-2xl sm:text-3xl font-bold">{plan.price.toLocaleString('pt-BR')}</span></p>
                           <p>por mês</p>
                        </div>
                     </div>
                     <span className="w-full h-[2px] bg-zinc-800 block my-6"></span>
                     <div className="flex flex-col gap-4">
                        <ul>
                           {plan.accessFeatures.map((feat, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm mb-3">
                                 <Check className="size-4 text-green-600" />
                                 <p>{feat}</p>
                              </li>
                           ))}
                           {plan.lockedFeatures?.map((feat, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm mb-3">
                                 <Ban className="size-4 text-red-600" />
                                 <p className="opacity-50">{feat}</p>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <Link href={'/register'} className={buttonStyle+' mt-6 w-full text-center'}>Escolher este plano</Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}