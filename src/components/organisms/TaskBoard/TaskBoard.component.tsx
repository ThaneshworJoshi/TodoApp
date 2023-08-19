import React, { useState } from 'react'
import { Box, Container, styled } from '@mui/material'
import { TaskBoardProps } from './TaskBoard.type'
import { FilterBar, Modal, TaskColumn } from '../../molecules'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { useAppDispatch } from '../../../redux/hooks'
import { deleteTodo } from '../../../redux/features/todoSlice'

const StyledContainer = styled(Container)(() => {
  return {}
})

const BoardWrapperBox = styled(Box)(() => {
  return {
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)',
    backgroundColor: '#f5eded',
    width: '100%',
    height: 'auto',
  }
})

const StyledBox = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'space-around',

    '& .task-column:not(:last-child)': {
      marginRight: '2%',
    },
  }
})

export const TaskBoard = ({ columns }: TaskBoardProps) => {
  const [taskId, setTaskId] = useState('')
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const dispatch = useAppDispatch()
  const { isSmallMobile } = useMediaQuery()

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  const handleDelete = () => {
    dispatch(deleteTodo(taskId))
    setOpenDeleteModal(false)
  }

  const events = {
    onDeleteClick: (id: string) => {
      setTaskId(id)
      setOpenDeleteModal(true)
    },
  }

  return (
    <>
      <StyledContainer maxWidth="lg">
        <BoardWrapperBox>
          <FilterBar />
          <StyledBox>
            {!isSmallMobile &&
              columns?.map((column) => (
                <TaskColumn key={column?.id} {...column} events={events} />
              ))}

            {isSmallMobile && <TaskColumn {...columns[0]} />}
          </StyledBox>
        </BoardWrapperBox>
      </StyledContainer>
      <Modal
        open={openDeleteModal}
        title="Are you sure want to delete this task?"
        onClose={handleCloseDeleteModal}
        confirmData={{ label: 'Delete', onConfirm: handleDelete }}
      />
    </>
  )
}

export default TaskBoard
