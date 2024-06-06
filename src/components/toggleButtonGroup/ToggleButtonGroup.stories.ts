import type { Meta, StoryObj } from '@storybook/react'

import { ToggleButtons } from './ToggleButtonGroup'

const meta: Meta<typeof ToggleButtons> = {
    component: ToggleButtons,
}

export default meta
type Story = StoryObj<typeof ToggleButtons>

export const Primary: Story = {
    args: {
        buttonTextOptions: ['All', 'Active', 'Completed'],
        value: 'All',
    },
}
