import { Link, NavLink, Outlet } from 'react-router-dom';
import { PATH } from '../constant';
import ScrollTopFloatButton from './ScrollTopFloatButton';

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
};

const isNavActive = ({ isActive }: NavLinkRenderProps) => {
  return isActive ? 'active' : '';
};

export default function Layout() {
  return (
    <>
      <header>
        <div className="brand">
          <img src="logo.svg" width={45} alt="logo" />
          <Link to={PATH.Home} className="h1">
            Recipedia
          </Link>
        </div>
        <nav>
          <NavLink to={PATH.Home} className={isNavActive}>
            Home
          </NavLink>
          <NavLink to={PATH.CreateRecipe} className={isNavActive}>
            Add Recipe
          </NavLink>
        </nav>
      </header>
      <>{<Outlet />}</>
      <ScrollTopFloatButton />
    </>
  );
}
