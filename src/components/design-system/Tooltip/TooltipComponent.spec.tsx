import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import TooltipComponent from './TooltipComponent'

describe('Test to TooltipComponent', () => {
  it('renders the TooltipComponent component', () => {
    render(<TooltipComponent />)
  })
})
