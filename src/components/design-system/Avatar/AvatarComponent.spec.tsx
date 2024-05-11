import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import AvatarComponent from './AvatarComponent'

describe('Test to AvatarComponent', () => {
  it('renders the AvatarComponent component', () => {
    render(<AvatarComponent />)
  })
})
