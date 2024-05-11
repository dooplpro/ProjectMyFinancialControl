import { RouteObject } from 'react-router-dom'
import { CategoryListPage } from '~/components/pages'

const routes: RouteObject[] = [
  {
    index: true,
    element: <CategoryListPage />,
  },
]

export default routes
