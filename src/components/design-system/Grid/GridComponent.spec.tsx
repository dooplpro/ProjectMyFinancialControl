import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import GridComponent from './GridComponent'

describe('Test to GridComponent', () => {
  it('renders the GridComponent component', () => {
    render(<GridComponent />)
  })
})
