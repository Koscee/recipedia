export enum PATH {
  Home = '/',
  Recipes = '/recipes',
  CreateRecipe = `${PATH.Recipes}/create`,
  UpdateRecipe = `${PATH.Recipes}/:id`,
}

export enum OrderBy {
  Title = 'title',
  Rating = 'rating',
  CreatedAt = 'created_at',
}
