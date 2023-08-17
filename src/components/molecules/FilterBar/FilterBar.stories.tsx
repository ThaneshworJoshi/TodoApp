import { Meta, StoryObj } from '@storybook/react'
import FilterBar from './FilterBar.component'

const meta: Meta<typeof FilterBar> = {
  component: FilterBar,
}

export default meta

type Story = StoryObj<typeof FilterBar>

export const Default: Story = {
  args: {},
}
