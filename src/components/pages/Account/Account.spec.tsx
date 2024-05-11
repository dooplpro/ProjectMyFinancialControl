import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import AccountPage from './AccountPage'

describe('Test to AccountPage', () => {
  it('renders the AccountPage component', () => {
    render(<AccountPage />)
  })
})
