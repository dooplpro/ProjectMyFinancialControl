import { PropsWithoutRef } from 'react'
import { IGridComponentProps } from './GridComponentTypes'
import { Grid } from '@mui/material'

const GridComponent = ({ children, ...rest }: PropsWithoutRef<IGridComponentProps>) => {
  return (
    <Grid item {...rest}>
      GridComponent
    </Grid>
  )
}

export default GridComponent
