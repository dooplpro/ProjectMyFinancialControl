import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import FlexComponent from './FlexComponent'

describe('Test to FlexComponent', () => {
  it('renders the FlexComponent component', () => {
    render(<FlexComponent />)
  })
})
