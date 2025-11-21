
export interface DorkCategory {
  name: string;
  icon: string;
  className: string;
  dorks: string[];
}

export type Page = 'generator' | 'about';

// Export a constant to ensure this file is treated as a module by all bundlers
export const APP_VERSION = '2.0.0';
