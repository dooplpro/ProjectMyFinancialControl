import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ImageComponent from './ImageComponent'

describe('Test to ImageComponent', () => {
  it('renders the ImageComponent component', () => {
    render(<ImageComponent />)
  })
})
