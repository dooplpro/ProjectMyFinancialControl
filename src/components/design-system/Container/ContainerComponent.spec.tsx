import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import ContainerComponent from './ContainerComponent'

describe('Test to ContainerComponent', () => {
  it('renders the ContainerComponent component', () => {
    render(<ContainerComponent />)
  })
})
