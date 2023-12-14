import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Contact = lazy(() => import('./pages/Contact'));
const Support = lazy(() => import('./pages/Support'));
const Signup = lazy(() => import('./pages/Signup'));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ForgotPass = lazy(() => import("./pages/ForgotPass"));
const Settings = lazy(() => import("./pages/Settings"));
const ErrorPage = lazy(() => import('./components/404/ErrorPage'));


import "./sass/main.scss";
import HomeSkelton from './skeleton/HomeSkelton';
import ContactSkeleton from './skeleton/ContactSkeleton';
import HelpSkeleton from './skeleton/HelpSkeleton';
import Skeleton from './skeleton/Skeleton';
import SingleProductSkeleton from './skeleton/SingleProductSkeleton';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Suspense fallback={<HomeSkelton />}><Home /></Suspense>,
        },
        {
          path: "/product/:productId",
          element: <Suspense fallback={<SingleProductSkeleton />}><SingleProduct /></Suspense>
        },
        {
          path: "/cart",
          element: <Suspense fallback={<SingleProductSkeleton />} ><CartPage /></Suspense>
        },
        {
          path: '/signup',
          element: <Suspense fallback={<Skeleton />}><Signup /></Suspense>
        },
        {
          path: '/login',
          element: <Suspense fallback={<Skeleton />}><Login /></Suspense>
        },
        {
          path: '/contact',
          element: <Suspense fallback={<ContactSkeleton />}><Contact /></Suspense>
        },
        {
          path: '/support',
          element: <Suspense fallback={<HelpSkeleton />}><Support /></Suspense>
        },
        {
          path: "/profile",
          element: <Suspense><ProfilePage /></Suspense>
        },
        {
          path: "/password_reset",
          element: <Suspense><ForgotPass /></Suspense>
        },
        {
          path: "/settings",
          element: <Suspense><Settings /></Suspense>
        },
      ],
      errorElement: <Suspense>
        <ErrorPage />
      </Suspense>
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
