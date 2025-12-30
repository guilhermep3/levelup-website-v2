export type PlansType = {
  id: number;
  title: string;
  description: string;
  accessFeatures: string[];
  lockedFeatures?: string[];
  price: number;
};