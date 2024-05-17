import { CSSProperties } from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IFlexComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flexDirection?: CSSProperties['flexDirection']
  flex?: CSSProperties['flex']
  flexGrow?: CSSProperties['flexGrow']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  margin?: CSSProperties['margin']
  padding?: CSSProperties['padding']
}
