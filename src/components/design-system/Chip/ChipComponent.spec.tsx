import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ChipComponent from './ChipComponent'

describe('Test to ChipComponent', () => {
  it('renders the ChipComponent component', () => {
    render(<ChipComponent />)
  })
})
