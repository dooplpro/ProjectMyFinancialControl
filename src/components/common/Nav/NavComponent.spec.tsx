import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import NavComponent from './NavComponent'

describe('Test to NavComponent', () => {
  it('renders the NavComponent component', () => {
    render(<NavComponent />)
  })
})
