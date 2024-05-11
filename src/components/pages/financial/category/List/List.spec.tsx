import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ListPage from './ListPage'

describe('Test to ListPage', () => {
  it('renders the ListPage component', () => {
    render(<ListPage />)
  })
})
