import { useLoaderData, useSubmit } from 'react-router-dom';
import { OrderBy } from '../constant';
import type { Recipes } from '../types';
import Filter from './Filter';
import RecipeCard from './RecipeCard';

type RecipesLoaderData = {
  recipes: Recipes;
  sortKey: OrderBy;
};

const filters = [
  { value: OrderBy.Title, label: 'Title' },
  { value: OrderBy.Rating, label: 'Rating' },
  // { value: OrderBy.CreatedAt, label: 'Time Created' },
];

export default function RecipeList() {
  const submit = useSubmit();
  const { recipes, sortKey } = useLoaderData() as RecipesLoaderData;

  const onFilterChange = (value: string) => {
    submit({ sortKey: value });
  };

  if (!recipes?.length) {
    return <p>No recipes yet.</p>;
  }

  return (
    <div className="recipes">
      <Filter
        title="Order By:"
        onFilterChange={onFilterChange}
        filters={filters}
        currentValue={sortKey}
      />
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
