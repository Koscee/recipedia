export type Recipes = Recipe[];

export type Recipe = {
  id: number;
  created_at: string;
  title: string;
  method: string;
  rating: number;
};

export type Filter = {
  value: string;
  label: string;
};

export type Filters = Filter[];
