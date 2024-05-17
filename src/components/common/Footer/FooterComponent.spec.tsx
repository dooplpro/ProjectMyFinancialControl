import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import FooterComponent from './FooterComponent'

describe('Test to FooterComponent', () => {
  it('renders the FooterComponent component', () => {
    render(<FooterComponent />)
  })
})
