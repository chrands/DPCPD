export enum View {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  REPORT = 'REPORT',
  EXPERTS = 'EXPERTS',
  PROFILE = 'PROFILE'
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  method: string; // e.g., NGS
  description: string;
  sensitivity: string;
  specificity: string;
  turnaroundTime: string;
  sampleType: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: string;
  abstract: string;
  tags: string[];
}

export interface NavItem {
  view: View;
  label: string;
  icon: any; // Lucide icon component type
}

export interface Expert {
    id: string;
    name: string;
    title: string;
    description: string;
    imageUrl?: string;
    specialty: string;
}