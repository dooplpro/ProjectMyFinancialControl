import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import RegisterPage from './RegisterPage'

describe('Test to RegisterPage', () => {
  it('renders the RegisterPage component', () => {
    render(<RegisterPage />)
  })
})
