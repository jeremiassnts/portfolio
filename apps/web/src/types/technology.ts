export interface Technology {
  name: string;
  category: TechCategory;
  icon?: string;
  proficiency?: 'expert' | 'advanced' | 'intermediate';
}

export type TechCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'tools';
