import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import BadgeComponent from './BadgeComponent'

describe('Test to BadgeComponent', () => {
  it('renders the BadgeComponent component', () => {
    render(<BadgeComponent />)
  })
})
