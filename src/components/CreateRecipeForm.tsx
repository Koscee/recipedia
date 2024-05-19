import { Form } from 'react-router-dom';
import { useForm } from '../hooks';

export default function CreateRecipeForm() {
  const { errors, isBtnDisabled, btnText, handleCancel } = useForm();

  return (
    <Form method="post" className="recipe-form">
      <label>
        Title <span className="error">*</span>
        <input type="text" name="title" placeholder="Milk Shake" autoFocus />
        {errors?.title && <p className="error error-mssg">{errors?.title}</p>}
      </label>
      <label>
        Rating <span className="error">*</span>
        <input type="number" name="rating" defaultValue={0} min={0} max={5} />
        {errors?.rating && <p className="error error-mssg">{errors?.rating}</p>}
      </label>
      <label>
        Method <span className="error">*</span>
        <textarea
          name="method"
          rows={8}
          aria-multiline={true}
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
          {btnText('Add')}
        </button>
      </div>
    </Form>
  );
}
