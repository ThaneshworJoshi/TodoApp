import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField.component'

const meta: Meta<typeof TextField> = {
  component: TextField,
}

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    placeholder: 'placeholder',
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true,
    helperText: 'Error message goes here',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
}
