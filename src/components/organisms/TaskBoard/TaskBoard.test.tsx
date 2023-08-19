import React from 'react'
import { render } from '@testing-library/react'
import { TaskBoard } from './TaskBoard.component'
import { TaskBoardProps } from './TaskBoard.type'

const mockData: TaskBoardProps = {
  columns: [
    {
      id: '1',
      title: 'To Do',
      tasks: [
        {
          id: '1',
          tag: 'Design',
          title: 'High priority mobile app design health',
          description: 'High priority work will be done on time please',
          priority: 'high',
          status: 'incomplete',
        },
        {
          id: '2',
          tag: 'Design',
          title: 'High priority mobile app design health',
          description: 'High priority work will be done on time please',
          priority: 'high',
          status: 'incomplete',
          media: {
            imageUrl: '/dev.png',
            altText: 'dev image',
          },
        },
      ],
    },
    {
      id: '1',
      title: 'Doing',
      tasks: [
        {
          id: '1',
          tag: 'Design',
          title: 'High priority mobile app design health',
          description: 'High priority work will be done on time please',
          priority: 'high',
          status: 'incomplete',
        },
      ],
    },
    {
      id: '1',
      title: 'Done',
      tasks: [],
    },
  ],
}

describe('TaskBoard component', () => {
  it('renders without crashing', () => {
    // render(<TaskBoard {...mockData} />)
  })
})
