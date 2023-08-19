import React, { useState } from 'react'
import { Box, MenuItem, styled, Typography } from '@mui/material'
import { Button, TextField } from '../../atoms'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import { TaskFormProps } from './TaskForm.type'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    height: '500px',
    padding: '20px',
    rowGap: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 65px 0px rgba(0,0,0,0.1)',
  }
})

export const TaskForm = ({ isLoading, mode, task, events }: TaskFormProps) => {
  const [title, setTitle] = useState(task?.title || '')
  const [tag, setTag] = useState(task?.tag || '')
  const [description, setDescription] = useState(task?.description || '')
  const [priority, setPriority] = useState(task?.priority || '')

  const handleConfirmClick = () => {
    events?.onSubmitClick?.({
      id: task?.id,
      title,
      tag,
      description,
      priority,
      status: task?.status,
    })
  }

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string)
  }

  const formTitle = mode === 'add' ? 'Add Task' : 'Edit Task'

  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        {formTitle}
      </Typography>
      <TextField
        type="text"
        placeholder="Title"
        value={title}
        fullWidth
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Select
        displayEmpty
        value={priority}
        placeholder="Priority"
        input={<OutlinedInput />}
        onChange={handlePriorityChange}
        fullWidth
        required
      >
        <MenuItem disabled value="">
          <>Select Priority</>
        </MenuItem>
        <MenuItem value={'low'}>Low</MenuItem>
        <MenuItem value={'medium'}>Medium</MenuItem>
        <MenuItem value={'high'}>High</MenuItem>
      </Select>
      <TextField
        type="text"
        multiline
        rows={2}
        placeholder="Description"
        value={description}
        fullWidth
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        type="text"
        placeholder="Tag"
        value={tag}
        fullWidth
        onChange={(e) => setTag(e.target.value)}
      />
      <Button
        loading={isLoading}
        onClick={handleConfirmClick}
        fullWidth
        size="large"
      >
        {formTitle}
      </Button>
      {events?.onCancelClick && (
        <Button
          onClick={events?.onCancelClick}
          fullWidth
          size="large"
          variant="outlined"
        >
          Cancle
        </Button>
      )}
    </StyledBox>
  )
}

export default TaskForm
