import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import LoginPage from '../pages/LoginPage';
import DashBoardPage from '../pages/DashBoardPage';
import NewApplicationPage from '../pages/AddEvidencePage';
import ListApplications from '../components/ListEvidences';
import ListEvidencesPage from '../pages/ListEvidencesPage';
import EditEvidencePage from '../pages/EditEvidencePage';
import Register from '../components/Register';
import AdminLogin from '../components/AdminLogin';
import RegisterPage from '../pages/RegisterPage';
import AdminLoginPage from '../pages/AdminLoginPage';
import AddItemPage from '../pages/AddItemPage';
import AdminDashBoardPage from '../pages/AdminDashBoardPage';
import Ordersum3 from '../pages/OrderSummaryPage';
import OrderItemPage from '../pages/OrderItemPage';
import AllOrdersPage from '../pages/AllOrdersPage';
import ViewSingleOrder from '../components/ViewSingleOrder';
import ViewSingleOrderPage from '../pages/ViewSingleOrderPage';
import ProtectedRouteAdmin from './ProtectedRouteAdmin';
import EdititemPage from '../pages/EdititemPage';
import OrdersByUserPage from '../pages/OrdersByUserPage';

const Routes = () => {
  const routesForPublic = [
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/admin/login',
      element: <AdminLoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },

    {
      path: '/order',
      element: <ViewSingleOrderPage />,
    },
  ];

  const routesForAuthenticated = [
    {
      path: '/',
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: '/summary',
          element: <Ordersum3 />,
        },
        {
          path: '/',
          element: <OrderItemPage />,
        },

        {
          path: '/orders',
          element: <OrdersByUserPage />,
        },
      ],
    },
  ];

  const routesForAdmin = [
    {
      path: '/admin/',
      element: <ProtectedRouteAdmin />,
      children: [
        {
          path: 'addItem',
          element: <AddItemPage />,
        },
        {
          path: 'allOrders',
          element: <AllOrdersPage />,
        },
        {
          path: 'dashboard',
          element: <AdminDashBoardPage />,
        },
        {
          path: 'editItem',
          element: <EdititemPage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForAuthenticated,
    ...routesForAdmin
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
