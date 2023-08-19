import React, { useState } from 'react'
import { styled, Box } from '@mui/material'
import { Button } from '../../atoms'
import { Modal } from '../Modal'
import { TaskForm } from '../TaskForm'
import { useAppDispatch } from './../../../redux/hooks'
import { addTodo } from '../../../redux/features/todoSlice'
import { FilterBarProps } from './FilterBar.type'

const FilterWrapperBox = styled(Box)(() => {
  return {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export const FilterBar = ({
  activeTaskTab,
  setActiveTaskTab,
}: FilterBarProps) => {
  const [open, setOpen] = useState(false)

  const dispatch = useAppDispatch()

  const addTaskHandler = async (task: any) => {
    try {
      //@ts-ignore
      await dispatch(addTodo({ ...task, status: 'incomplete' }))
      setOpen(false)
    } catch (error) {}
  }

  return (
    <Box p={'10px 0 20px'}>
      <FilterWrapperBox>
        <Box>
          Filter:
          <Button
            size="small"
            variant={activeTaskTab === 'all' ? 'contained' : 'text'}
            onClick={() => setActiveTaskTab?.('all')}
            color="secondary"
            sx={{ marginLeft: '20px' }}
          >
            All
          </Button>
          <Button
            size="small"
            variant={activeTaskTab === 'inprogress' ? 'contained' : 'text'}
            onClick={() => setActiveTaskTab?.('inprogress')}
            color="secondary"
          >
            Doing
          </Button>
          <Button
            size="small"
            variant={activeTaskTab === 'completed' ? 'contained' : 'text'}
            onClick={() => setActiveTaskTab?.('completed')}
            color="secondary"
            sx={{ marginRight: '20px' }}
          >
            Done
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add Task
          </Button>
        </Box>
      </FilterWrapperBox>
      <Modal open={open} onClose={() => setOpen(false)}>
        <TaskForm
          events={{
            onCancelClick: () => setOpen(false),
            onSubmitClick: addTaskHandler,
          }}
        />
      </Modal>
    </Box>
  )
}

export default FilterBar
