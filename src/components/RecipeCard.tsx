import { Link, useFetcher } from 'react-router-dom';
import { DeleteIcon, EditIcon } from '../assets/icons';
import { PATH } from '../constant';
import { Recipe } from '../types';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const fetcher = useFetcher();

  const handleClick = () => {
    const recipeId = recipe.id;
    console.warn(`About to delete card with id: ${recipeId}`);
    const confirmDelete = confirm(
      'Are you sure you want to delete this recipe?'
    );
    if (!confirmDelete) return;
    console.warn(`User confirmed deletion of recipe with id: ${recipeId}`);
    fetcher.submit({ recipeId }, { method: 'post' });
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.method}</p>
      {/* TODO: make rating a component */}
      <div className="rating">
        <span className="figure">{recipe.rating}</span>★
      </div>
      <div className="action-overlay">
        <Link to={`${PATH.Recipes}/${recipe.id}`}>
          <button className="btn btn-primary">
            <EditIcon />
          </button>
        </Link>
        <button className="btn btn-danger" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
