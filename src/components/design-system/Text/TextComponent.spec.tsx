import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import TextComponent from './TextComponent'

describe('Test to TextComponent', () => {
  it('renders the TextComponent component', () => {
    render(<TextComponent />)
  })
})
