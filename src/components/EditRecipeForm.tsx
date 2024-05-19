import { Form, useLoaderData } from 'react-router-dom';
import { useForm } from '../hooks';
import { Recipe } from '../types';

export default function EditRecipeForm() {
  const recipe = useLoaderData() as Recipe;
  const { errors, isBtnDisabled, btnText, handleCancel } = useForm();

  return (
    <Form method="post" className="recipe-form">
      <label>
        Title <span className="error">*</span>
        <input
          type="text"
          name="title"
          placeholder="Milk Shake"
          defaultValue={recipe?.title}
          autoFocus
        />
        {errors?.title && <p className="error error-mssg">{errors?.title}</p>}
      </label>
      <label>
        Rating <span className="error">*</span>
        <input
          type="number"
          name="rating"
          defaultValue={recipe.rating}
          min={0}
          max={5}
        />
        {errors?.rating && <p className="error error-mssg">{errors?.rating}</p>}
      </label>
      <label>
        Method <span className="error">*</span>
        <textarea
          name="method"
          rows={8}
          aria-multiline={true}
          defaultValue={recipe.method}
          placeholder="1. Add water.&#10;2. Mix thoroughly."
        />
        {errors?.method && <p className="error error-mssg">{errors?.method}</p>}
      </label>

      <div className="two-col">
        <button type="button" className="btn" onClick={handleCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isBtnDisabled}
        >
          {btnText('Update')}
        </button>
      </div>
    </Form>
  );
}
