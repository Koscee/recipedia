import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  createRecipe,
  deleteRecipe,
  getRecipe,
  getRecipes,
  updateRecipe,
} from './actions';
import './App.css';
import { Layout } from './components';
import { PATH } from './constant';
import ErrorPage from './error-page';
import NotFound from './not-found';
import { Create, Home, Update } from './pages';

export default function App() {
  const router = createBrowserRouter([
    {
      path: PATH.Home,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Home />,
              loader: getRecipes,
              action: deleteRecipe,
            },
            {
              path: PATH.CreateRecipe,
              element: <Create />,
              action: createRecipe,
            },
            {
              path: PATH.UpdateRecipe,
              element: <Update />,
              loader: getRecipe,
              action: updateRecipe,
            },
            { path: '*', element: <NotFound /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
