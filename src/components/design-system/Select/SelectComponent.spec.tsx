import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import SelectComponent from './SelectComponent'

describe('Test to SelectComponent', () => {
  it('renders the SelectComponent component', () => {
    render(<SelectComponent />)
  })
})
