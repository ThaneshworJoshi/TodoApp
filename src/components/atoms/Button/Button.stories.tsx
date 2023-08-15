import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button.component'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Click Me',
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Click Me',
    color: 'secondary',
  },
}

export const ButtonWithStartIcon: Story = {
  args: {
    children: 'Click Me',
    startIcon: <AccessAlarmIcon />,
  },
}

export const ButtonWithEndIcon: Story = {
  args: {
    children: 'Click Me',
    endIcon: <AccessAlarmIcon />,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Click Me',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Click Me',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Click Me',
  },
}
