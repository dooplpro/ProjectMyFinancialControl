import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import DrawerComponent from './DrawerComponent'

describe('Test to DrawerComponent', () => {
  it('renders the DrawerComponent component', () => {
    render(<DrawerComponent />)
  })
})
