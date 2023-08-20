import React from 'react'
import { render } from '@testing-library/react'
import { TaskColumn } from './TaskColumn.component'
import { TaskColumnProps } from './TaskColumn.type'
import configureStore from 'redux-mock-store' // Import redux-mock-store
import { Provider } from 'react-redux'
const mockData: TaskColumnProps = {
  id: '1',
  title: 'To Do',
  tasks: [
    {
      id: '1',
      index: 1,
      tag: 'Design',
      title: 'Task 1',
      description: 'High priority work will be done on time please',
      priority: 'high',
      status: 'completed',
    },
    {
      id: '2',
      index: 2,
      tag: 'Design',
      title: 'Task 2',
      description: 'High priority work will be done on time please',
      priority: 'high',
      status: 'completed',
      media: {
        imageUrl: '/dev.png',
        altText: 'dev image',
      },
    },
  ],
}

// Mock react-beautiful-dnd components
jest.mock('react-beautiful-dnd', () => ({
  ...jest.requireActual('react-beautiful-dnd'),
  Draggable: ({ children }: any) =>
    children({ draggableProps: {}, innerRef: jest.fn() }),
  Droppable: ({ children }: any) => children({ innerRef: jest.fn() }),
}))

describe('TaskColumn component', () => {
  const mockStore = configureStore([])
  const store = mockStore({})

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <TaskColumn {...mockData} />
      </Provider>
    )
  })

  it('renders column title, and task cards', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TaskColumn {...mockData} />
      </Provider>
    )
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
