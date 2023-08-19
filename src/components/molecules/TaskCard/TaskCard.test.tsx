import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { TaskCard } from './TaskCard.component'
import { TaskCardProps } from './TaskCard.type'

const mockData: TaskCardProps = {
  id: '1',
  tag: 'Design',
  title: 'High priority mobile app design health',
  description: 'description',
  priority: 'high',
  status: 'incomplete',
  media: {
    imageUrl: 'https://example.com/image.png',
    altText: 'dev image',
  },
}

describe('TaskCard component', () => {
  it('renders without crashing', () => {
    render(<TaskCard {...mockData} />)
  })

  it('renders tag, title, and description', () => {
    const { getByText } = render(<TaskCard {...mockData} />)
    expect(getByText('Design')).toBeInTheDocument()
    expect(
      getByText(/High priority mobile app design health/)
    ).toBeInTheDocument()
    expect(getByText(/description/)).toBeInTheDocument()
  })

  it('renders priority chip if priority is provided', () => {
    const { getByText } = render(<TaskCard {...mockData} />)
    expect(getByText('high')).toBeInTheDocument()
  })

  it('renders media image if imageUrl is provided', () => {
    const { getByAltText } = render(<TaskCard {...mockData} />)
    const imageElement = getByAltText('dev image')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', 'https://example.com/image.png')
  })

  it('should call onDelete when delete button is clicked', () => {
    const onDeleteMock = jest.fn()
    const events = {
      onDeleteClick: onDeleteMock,
    }
    const { getByTestId } = render(<TaskCard {...mockData} events={events} />)
    const deleteButton = getByTestId('delete-button')

    fireEvent.click(deleteButton)

    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })
})
