import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { TextField } from './TextField.component'

describe('TextField component', () => {
  it('renders without crashing', () => {
    render(<TextField />)
  })

  it('renders with provided label', () => {
    const { getByLabelText } = render(<TextField label="Username" />)
    const inputElement = getByLabelText('Username')
    expect(inputElement).toBeInTheDocument()
  })

  it('handles value change', () => {
    const { getByLabelText } = render(<TextField label="Username" />)
    const inputElement = getByLabelText('Username') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'thanos' } })
    expect(inputElement.value).toBe('thanos')
  })

  it('renders as disabled', () => {
    const { getByLabelText } = render(<TextField label="Username" disabled />)
    const inputElement = getByLabelText('Username')
    expect(inputElement).toBeDisabled()
  })
})
