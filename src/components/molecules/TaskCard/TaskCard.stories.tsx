import { Meta, StoryObj } from '@storybook/react'
import TaskCard from './TaskCard.component'

const meta: Meta<typeof TaskCard> = {
  component: TaskCard,
}

export default meta

type Story = StoryObj<typeof TaskCard>

export const Default: Story = {
  args: {
    tag: 'Design',
    title: 'High priority mobile app design health',
    description: 'High priority work will be done on time please',
    priority: 'high',
    status: 'todo',
  },
}

export const CardWithImage: Story = {
  args: {
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
}
