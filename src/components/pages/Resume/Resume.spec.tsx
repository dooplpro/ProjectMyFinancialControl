import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ResumePage from './ResumePage'

describe('Test to ResumePage', () => {
  it('renders the ResumePage component', () => {
    render(<ResumePage />)
  })
})
