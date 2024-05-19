import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { FaceFrown } from './assets/icons';

export default function ErrorPage() {
  const error = useRouteError();

  const renderError = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return <p>{error.data}</p>;
    }
    if (error instanceof Error) {
      return <p>{error.message}</p>;
    }
    return <p>{String(error)}</p>;
  };

  return (
    <div className="error-page">
      <span className="error">
        <FaceFrown width={200} />
      </span>
      <h3>Oops!</h3>
      <p>Sorry, an unexpected error has occurred.</p>
      <code>{renderError(error)}</code>
    </div>
  );
}
