import { RouteObject } from 'react-router-dom'
import { LoginPage, RecoverPage, RegisterPAge } from '~/components/pages'

const routes: RouteObject[] = [
  {
    index: true,
    element: <LoginPage />,
  },
  {
    path: 'register',
    element: <RegisterPAge />,
  },
  {
    path: 'recover',
    element: <RecoverPage />,
  },
]

export default routes
