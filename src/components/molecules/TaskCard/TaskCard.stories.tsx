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
    status: 'completed',
  },
}

export const CardWithImage: Story = {
  args: {
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
}
