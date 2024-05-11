import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ButtonComponent from './ButtonComponent'

describe('Test to ButtonComponent', () => {
  it('renders the ButtonComponent component', () => {
    render(<ButtonComponent />)
  })
})
