import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import SwitchComponent from './SwitchComponent'

describe('Test to SwitchComponent', () => {
  it('renders the SwitchComponent component', () => {
    render(<SwitchComponent />)
  })
})
