import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Button } from './Button.component'

describe('Button component', () => {
  it('renders without crashing', () => {
    render(<Button>Click Me</Button>)
  })

  it('renders with provided text content', () => {
    const { getByText } = render(<Button>Click Me</Button>)
    const buttonElement = getByText('Click Me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('handles onClick event', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(
      <Button onClick={onClickMock}>Click Me</Button>
    )
    const buttonElement = getByText('Click Me')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
