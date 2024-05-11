import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import DividerComponent from './DividerComponent'

describe('Test to DividerComponent', () => {
  it('renders the DividerComponent component', () => {
    render(<DividerComponent />)
  })
})
