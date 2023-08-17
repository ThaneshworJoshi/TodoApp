import React from 'react'
import { render } from '@testing-library/react'
import { TaskColumn } from './TaskColumn.component'

const mockData = {
  id: '1',
  title: 'To Do',
  tasks: [
    {
      id: '1',
      tag: 'Design',
      title: 'Task 1',
      description: 'High priority work will be done on time please',
      priority: 'high',
      status: 'todo',
    },
    {
      id: '2',
      tag: 'Design',
      title: 'Task 2',
      description: 'High priority work will be done on time please',
      priority: 'high',
      status: 'todo',
      media: {
        imageUrl: '/dev.png',
        altText: 'dev image',
      },
    },
  ],
}

describe('TaskColumn component', () => {
  it('renders without crashing', () => {
    render(<TaskColumn {...mockData} />)
  })

  it('renders column title, and task cards', () => {
    const { getByText } = render(<TaskColumn {...mockData} />)

    // Check if the column title is rendered
    const columnTitle = getByText('To Do 2')
    expect(columnTitle).toBeInTheDocument()

    // Check if task card titles are rendered
    const task1Title = getByText('Task 1')
    const task2Title = getByText('Task 2')
    expect(task1Title).toBeInTheDocument()
    expect(task2Title).toBeInTheDocument()
  })
})
