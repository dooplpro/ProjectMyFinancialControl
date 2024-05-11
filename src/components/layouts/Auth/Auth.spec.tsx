import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import AuthLayout from './AuthLayout'

describe('Test to AuthLayout', () => {
  it('renders the AuthLayout component', () => {
    render(<AuthLayout />)
  })
})
