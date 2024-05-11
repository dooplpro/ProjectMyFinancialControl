import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import CheckboxComponent from './CheckboxComponent'

describe('Test to CheckboxComponent', () => {
  it('renders the CheckboxComponent component', () => {
    render(<CheckboxComponent />)
  })
})
