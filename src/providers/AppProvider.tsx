import RouterProvider from './RouterProvider'
import StylesProvider from './StylesProvider'

const AppProvider = () => {
  return (
    <>
      <StylesProvider />
      <RouterProvider />
    </>
  )
}

export default AppProvider
