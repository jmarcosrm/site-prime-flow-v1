import type { IconName } from '../components/Icon';

export interface Integration {
  title: string;
  icon: IconName;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  colSpan: string;
}

export interface Step {
  id?: number | string;
  title: string;
  text?: string;
  desc?: string;
  step?: string;
  icon?: IconName;
  image?: string;
}

export interface Stat {
  label: string;
  value: string;
  desc: string;
  icon: IconName;
}

export interface Value {
  title: string;
  description: string;
  icon: IconName;
  image?: string;
}

export interface Sector {
  title: string;
  desc: string;
  icon: IconName;
}

export interface SecuritySpec {
  title: string;
  desc: string;
  icon: IconName;
}
