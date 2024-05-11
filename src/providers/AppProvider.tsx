import BootstrapProvider from './BootstrapProvider'
import RouterProvider from './RouterProvider'

const AppProvider = () => {
  return (
    <BootstrapProvider>
      <RouterProvider />
    </BootstrapProvider>
  )
}

export default AppProvider
