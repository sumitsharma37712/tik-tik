import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom/client';

// Route
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteError from './Components/route-error/RouteError.js';

// Pages
import App from './App.js';
// Dynamic Loading | Code Spliting
const Home = lazy(() => import('./Pages/Home/home'));
// const Nopage=lazy(()=>import('./pages/nopage/Nopage.js'));

const root = ReactDom.createRoot(document.getElementById('root'));

// Route configurations
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <RouteError />,
      },
      {
        path: '/home',
        element: <Home />,
        errorElement: <RouteError />,

      },
      // {
      //   path: '*',
      //   element: (
      //     <Suspense fallback={"...."}>
      //       <Nopage />
      //     </Suspense>
      //   ),
      //   errorElement: <RouteError />,
      // },
    ],
  },
]);

root.render(<RouterProvider router={appRoutes} />);
