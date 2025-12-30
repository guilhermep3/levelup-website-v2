import { PlansType } from "@/types/plans";

export const PlansData: PlansType[] = [
  {
    id: 1,
    title: 'Plano Básico',
    description: 'Comece sua jornada fitness. Construa uma base sólida com treinos básicos e orientação nutricional essencial para sua evolução.',
    accessFeatures: [
      'Acesso a todos os nossos vídeos de exercícios',
      'Rastreamento de progresso',
      'Comunidade online de apoio',
    ],
    lockedFeatures: [
      'Planos de treino avançados e personalizados',
      'Check-ins semanais com seu treinador',
      'Descontos exclusivos em equipamentos'
    ],
    price: 90.50
  },
  {
    id: 2,
    title: 'Plano Prime',
    description: 'Experimente uma jornada fitness totalmente personalizada. Treine individualmente com um treinador dedicado para alcançar seus objetivos.',
    accessFeatures: [
      'Acesso a todos os nossos vídeos de exercícios',
      'Rastreamento de progresso',
      'Comunidade online de apoio',
      'Planos de treino avançados e personalizados',
      'Check-ins semanais com seu treinador',
    ],
    lockedFeatures: [
      'Descontos exclusivos em equipamentos'
    ],
    price: 120.99
  },
  {
    id: 3,
    title: 'Plano Pro',
    description: 'Tenha nossos treinos avançados e coaching personalizado de nutrição para ajudá-lo a alcançar seus objetivos mais rapidamente. Inscreva-se agora!',
    accessFeatures: [
      'Acesso a todos os nossos vídeos de exercícios',
      'Rastreamento de progresso',
      'Comunidade online de apoio',
      'Planos de treino avançados e personalizados',
      'Check-ins semanais com seu treinador',
      'Descontos exclusivos em equipamentos'
    ],
    price: 170.99
  },
]