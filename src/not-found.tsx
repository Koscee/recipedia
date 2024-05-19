import { Link } from 'react-router-dom';
import { FaceFrown } from './assets/icons';
import { PATH } from './constant';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <span className="warning">
        <FaceFrown width={200} />
      </span>
      <h3>Page Not Found</h3>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <Link to={PATH.Home} replace={true} className="btn btn-primary">
        Go back to the home page
      </Link>
    </div>
  );
}
