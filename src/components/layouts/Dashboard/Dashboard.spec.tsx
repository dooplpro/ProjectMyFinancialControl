import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import DashboardLayout from './DashboardLayout'

describe('Test to DashboardLayout', () => {
  it('renders the DashboardLayout component', () => {
    render(<DashboardLayout />)
  })
})
