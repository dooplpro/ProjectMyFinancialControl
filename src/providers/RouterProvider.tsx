import { RouterProvider as ReactRouterDomProvider } from 'react-router-dom'
import { Routes } from '../router'

const RouterProvider = () => {
  return <ReactRouterDomProvider router={Routes} />
}

export default RouterProvider
