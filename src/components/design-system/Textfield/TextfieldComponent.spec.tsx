import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import TextfieldComponent from './TextfieldComponent'

describe('Test to TextfieldComponent', () => {
  it('renders the TextfieldComponent component', () => {
    render(<TextfieldComponent />)
  })
})
