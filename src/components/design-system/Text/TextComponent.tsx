import { PropsWithChildren } from 'react'
import { ITextComponentProps } from './TextTypes'
import { Typography } from '@mui/material'

const TextComponent = ({ children, ...rest }: PropsWithChildren<ITextComponentProps>) => {
  return <Typography {...rest}>{children}</Typography>
}

export default TextComponent
