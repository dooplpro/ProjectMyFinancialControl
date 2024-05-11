import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import BoxComponent from './BoxComponent'

describe('Test to BoxComponent', () => {
  it('renders the BoxComponent component', () => {
    render(<BoxComponent />)
  })
})
