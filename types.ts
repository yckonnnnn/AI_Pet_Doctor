
export enum Page {
  LANDING = 'landing',
  DIAGNOSIS = 'diagnosis',
  REPORT = 'report',
  PHARMACY = 'pharmacy'
}

export interface Medication {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tag?: string;
  price: number;
  imageUrl: string;
}

export interface Insight {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

export interface DiseaseInfo {
  id: string;
  name: string;
  latinName: string;
  keywords: string[];
  confidence: number;
  severity: 'low' | 'moderate' | 'high';
  severityText: string;
  insights: Insight[];
  environment: {
    title: string;
    desc: string;
    metrics: { label: string; value: string; color?: string }[];
  };
  recommendations: string[]; // Array of medication IDs
}
