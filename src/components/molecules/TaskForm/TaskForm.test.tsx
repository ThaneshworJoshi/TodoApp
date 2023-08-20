import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { TaskForm } from './TaskForm.component'
import { TaskFormProps } from './TaskForm.type'

describe('TaskForm component', () => {
  const onSubmitFunction = jest.fn()

  const mockEvents: TaskFormProps['events'] = {
    onSubmitClick: onSubmitFunction,
    onCancelClick: jest.fn(),
  }

  const mockTask = {
    id: 1,
    title: 'Test Title',
    tag: 'Test Tag',
    description: 'Test Description',
    priority: 'medium',
    status: 'incomplete',
  }

  it('renders form fields and buttons', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <TaskForm isLoading={false} mode="add" task={null} events={mockEvents} />
    )

    const titleInput = getByPlaceholderText('Title')
    const prioritySelect = getByText('Select Priority')
    const descriptionInput = getByPlaceholderText('Description')
    const tagInput = getByPlaceholderText('Tag')
    const addButton = getByTestId('confirm-btn')
    const cancelButton = getByText('Cancle')

    // Fill in form fields
    fireEvent.change(titleInput, { target: { value: 'New Task' } })
    fireEvent.click(prioritySelect)
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } })
    fireEvent.change(tagInput, { target: { value: 'New Tag' } })

    // Trigger submit
    fireEvent.click(addButton)

    await waitFor(() => {
      expect(mockEvents.onSubmitClick).toHaveBeenCalledWith({
        id: undefined,
        title: 'New Task',
        tag: 'New Tag',
        description: 'New Description',
        priority: '',
        status: undefined,
      })
    })

    // Trigger cancel
    fireEvent.click(cancelButton)

    expect(mockEvents.onCancelClick).toHaveBeenCalled()
  })

  it('renders form with task data in edit mode', () => {
    const { getByDisplayValue } = render(
      <TaskForm
        isLoading={false}
        mode="edit"
        task={mockTask}
        events={mockEvents}
      />
    )

    expect(getByDisplayValue(mockTask.title)).toBeInTheDocument()
    expect(getByDisplayValue(mockTask.tag)).toBeInTheDocument()
    expect(getByDisplayValue(mockTask.description)).toBeInTheDocument()
    expect(getByDisplayValue(mockTask.priority)).toBeInTheDocument()
  })
})
