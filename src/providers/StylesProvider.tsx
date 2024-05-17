import '~/styles/Fonts.sass'
import '~/styles/GlobalStyles.sass'
import { ThemeProvider } from '@emotion/react'
import { PropsWithChildren } from 'react'
import { Theme } from '~/styles'

const StylesProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}

export default StylesProvider
