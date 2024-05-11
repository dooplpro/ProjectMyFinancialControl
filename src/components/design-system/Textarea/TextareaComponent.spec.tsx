import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import TextareaComponent from './TextareaComponent'

describe('Test to TextareaComponent', () => {
  it('renders the TextareaComponent component', () => {
    render(<TextareaComponent />)
  })
})
