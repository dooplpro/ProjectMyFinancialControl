import { RouteObject } from 'react-router-dom'
import { MovimentListPage, MovimentRegisterPage } from '~/components/pages'

const routes: RouteObject[] = [
  {
    index: true,
    element: <MovimentListPage />,
  },
  {
    path: 'register',
    element: <MovimentRegisterPage />,
  },
]

export default routes
