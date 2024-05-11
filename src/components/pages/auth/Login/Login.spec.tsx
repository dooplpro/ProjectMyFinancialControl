import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import LoginPage from './LoginPage'

describe('Test to LoginPage', () => {
  it('renders the LoginPage component', () => {
    render(<LoginPage />)
  })
})
