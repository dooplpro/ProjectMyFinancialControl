import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import DialogComponent from './DialogComponent'

describe('Test to DialogComponent', () => {
  it('renders the DialogComponent component', () => {
    render(<DialogComponent />)
  })
})
