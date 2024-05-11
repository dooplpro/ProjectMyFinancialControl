import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import AccordionComponent from './AccordionComponent'

describe('Test to AccordionComponent', () => {
  it('renders the AccordionComponent component', () => {
    render(<AccordionComponent />)
  })
})
