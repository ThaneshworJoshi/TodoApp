import { Meta, StoryObj } from '@storybook/react'

import { TaskForm } from './TaskForm.component'

const meta: Meta<typeof TaskForm> = {
  component: TaskForm,
}

export default meta

type Story = StoryObj<typeof TaskForm>

export const Default: Story = {
  args: {},
}
