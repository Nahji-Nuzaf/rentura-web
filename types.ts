import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureTab {
  id: 'landlord' | 'tenant' | 'provider' | 'seeker';
  label: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  color: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}