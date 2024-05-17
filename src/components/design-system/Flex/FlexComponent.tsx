import { IFlexComponentProps } from './FlexComponentTypes'
import { PropsWithChildren } from 'react'
import FlexStyles from './FlexStyles.module.sass'

const FlexComponent = ({
  flexDirection,
  alignItems,
  flex,
  flexGrow,
  justifyContent,
  width,
  height,
  padding,
  margin,
  children,
  ...rest
}: PropsWithChildren<IFlexComponentProps>) => {
  return (
    <div
      className={FlexStyles.Flex}
      {...rest}
      style={{
        flexDirection,
        flex,
        alignItems,
        justifyContent,
        width,
        height,
        margin,
        padding,
      }}
    >
      {children}
    </div>
  )
}

export default FlexComponent
