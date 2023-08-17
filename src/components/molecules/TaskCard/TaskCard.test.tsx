import React from 'react'
import { render } from '@testing-library/react'
import { TaskCard } from './TaskCard.component'

const mockData = {
  id: '1',
  tag: 'Design',
  title: 'High priority mobile app design health',
  description: 'description',
  priority: 'high',
  status: 'todo',
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
})
