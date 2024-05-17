import { Grid } from '@mui/material'
import { PropsWithChildren } from 'react'
import { IContainerComponentProps } from './ContainerComponentTypes'

const ContainerComponent = ({
  children,
  ...rest
}: PropsWithChildren<IContainerComponentProps>) => {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  )
}

export default ContainerComponent
