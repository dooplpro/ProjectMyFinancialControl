import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IImageComponentProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'src'
  > {
  source: HTMLImageElement['src']
}
