export interface Pokemon {
  id: number;
  caught: boolean;
  name: string;
  types: string[];
  height: number;
  weight: number;
  description: string;
}

export interface catchReleaseDTO{
  id: number;
  caught: boolean;
}