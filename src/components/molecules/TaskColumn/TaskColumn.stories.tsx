import { Meta, StoryObj } from '@storybook/react'
import TaskColumn from './TaskColumn.component'

const meta: Meta<typeof TaskColumn> = {
  component: TaskColumn,
}

export default meta

type Story = StoryObj<typeof TaskColumn>

export const Default: Story = {
  args: {
    title: 'To Do',
    tasks: [
      {
        id: '1',
        tag: 'Design',
        title: 'High priority mobile app design health',
        description: 'High priority work will be done on time please',
        priority: 'high',
        status: 'todo',
      },
      {
        id: '2',
        tag: 'Design',
        title: 'High priority mobile app design health',
        description: 'High priority work will be done on time please',
        priority: 'high',
        status: 'todo',
        media: {
          imageUrl: '/dev.png',
          altText: 'dev image',
        },
      },
    ],
  },
}

export const NoTasks: Story = {
  args: {
    title: 'To Do',
    tasks: [],
  },
}