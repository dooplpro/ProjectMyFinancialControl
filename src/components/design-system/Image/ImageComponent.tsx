import { IImageComponentProps } from './ImageTypes'

const ImageComponent = ({ source, ...rest }: IImageComponentProps) => {
  return <img src={source} {...rest} />
}

export default ImageComponent
