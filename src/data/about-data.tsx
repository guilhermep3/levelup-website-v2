import { aboutType } from "@/types/about-type";
import { FaDumbbell } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

export const aboutData: aboutType[] = [
  {
    id: 1,
    number: '96%',
    title: 'Clientes satisfeitos',
    description: 'Nossos membros amam o local e atendimento.',
    icon: GiWeightLiftingUp
  },
  {
    id: 2,
    number: '+7',
    title: 'Anos de experiência',
    description: 'Histórico comprovado de transformação.',
    icon: FaDumbbell
  },
  {
    id: 3,
    number: '+800',
    title: 'Membros ativos',
    description: 'Junte-se a nossa comunidade fitness.',
    icon: GiWeightLiftingUp
  },
  {
    id: 4,
    number: '24/7',
    title: 'Suporte disponível',
    description: 'Suporte de assistência disponível 24 horas por dia.',
    icon: FaDumbbell
  },
]