import { createBrowserRouter } from 'react-router-dom'

import AuthRoutes from './auth.routes'
import CategoryRoutes from './category.routes'
import MovimentRoutes from './moviment.routes'

import { AccountPage, NotFoundPage, ResumePage } from '~/components/pages'
import { AuthLayout, DashboardLayout } from '~/components/layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <ResumePage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: AuthRoutes,
  },
  {
    path: '/category',
    element: <DashboardLayout />,
    children: CategoryRoutes,
  },
  {
    path: '/moviment',
    element: <DashboardLayout />,
    children: MovimentRoutes,
  },
  {
    path: '/account',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AccountPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
