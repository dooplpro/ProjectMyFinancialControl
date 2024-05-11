import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ProgressComponent from './ProgressComponent'

describe('Test to ProgressComponent', () => {
  it('renders the ProgressComponent component', () => {
    render(<ProgressComponent />)
  })
})
