import { Meta, StoryObj } from '@storybook/react'

import { AddTaskForm } from './AddTaskForm.component'

const meta: Meta<typeof AddTaskForm> = {
  component: AddTaskForm,
}

export default meta

type Story = StoryObj<typeof AddTaskForm>

export const Default: Story = {
  args: {},
}
