import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ModalComponent from './ModalComponent'

describe('Test to ModalComponent', () => {
  it('renders the ModalComponent component', () => {
    render(<ModalComponent />)
  })
})
