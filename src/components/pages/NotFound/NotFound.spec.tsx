import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import NotFoundPage from './NotFoundPage'

describe('Test to NotFoundPage', () => {
  it('renders the NotFoundPage component', () => {
    render(<NotFoundPage />)
  })
})
