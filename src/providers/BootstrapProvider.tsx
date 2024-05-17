import { PropsWithChildren } from 'react'
import StylesProvider from './StylesProvider'

const BootstrapProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StylesProvider>{children}</StylesProvider>
    </>
  )
}

export default BootstrapProvider
