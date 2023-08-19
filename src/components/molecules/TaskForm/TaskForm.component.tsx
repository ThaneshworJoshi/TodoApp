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

export const TaskForm = ({ isLoading, events }: TaskFormProps) => {
  const [title, setTitle] = useState('')
  const [tag, setTag] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')

  const handleAddTask = () => {
    events?.onSubmitClick?.({ title, tag, description, priority })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string)
  }

  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        Add Task
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
        onChange={handleChange}
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
        onClick={handleAddTask}
        fullWidth
        size="large"
      >
        Add Task
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
