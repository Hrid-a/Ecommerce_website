import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Contact = lazy(() => import('./pages/Contact'));
const Support = lazy(() => import('./pages/Support'));
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const Dashboard = lazy(() => import('./components/Admin/Dashboard'));
const Products = lazy(() => import('./components/Admin/Products'));
const Users = lazy(() => import('./components/Admin/Users'));
const Orders = lazy(() => import('./components/Admin/Orders'));
const Signup = lazy(() => import('./pages/Signup'));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const CartPage = lazy(() => import("./pages/CartPage"));
const SingleProductPage = lazy(() => import("./pages/Admin/SingleProductPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ForgotPass = lazy(() => import("./pages/ForgotPass"));
const Settings = lazy(() => import("./pages/Settings"));

// services
// import { getProducts } from './redux/features/Product/services/products';
import { getAllProducts } from './redux/features/Product/services/products';
import { getAllUsers } from './redux/features/User/services/user';
import { getAllOrders } from "./redux/features/orders/services/order";

import "./sass/main.scss";
import { useSelector } from 'react-redux';
import HomeSkelton from './skeleton/HomeSkelton';
import ContactSkeleton from './skeleton/ContactSkeleton';
import HelpSkeleton from './skeleton/HelpSkeleton';
import Skeleton from './skeleton/Skeleton';
import SingleProductSkeleton from './skeleton/SingleProductSkeleton';
import ErrorPage from './components/404/ErrorPage';


function App() {

  const { user } = useSelector(store => store.user);



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
          element: <Suspense><CartPage /></Suspense>
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
        {
          path: "/admin",
          element: <Suspense>{user && <AdminDashboard />}</Suspense>,
          children: [
            {
              path: "/admin",
              element: <Suspense> <Dashboard /> </Suspense>
            }
            ,
            {
              path: "/admin/products",
              loader: getAllProducts,
              element: <Suspense> <Products /> </Suspense>
            },
            {
              path: "/admin/users",
              loader: getAllUsers,
              element: <Suspense> <Users /> </Suspense>
            },
            {
              path: "/admin/orders",
              loader: getAllOrders,
              element: <Suspense> <Orders /> </Suspense>
            },
            {
              path: "/admin/product/:productId",
              element: <Suspense> <SingleProductPage /> </Suspense>
            }
          ]
        }

      ],
      errorElement: <ErrorPage />
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
