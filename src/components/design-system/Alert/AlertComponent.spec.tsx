import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import AlertComponent from './AlertComponent'

describe('Test to AlertComponent', () => {
  it('renders the AlertComponent component', () => {
    render(<AlertComponent />)
  })
})
