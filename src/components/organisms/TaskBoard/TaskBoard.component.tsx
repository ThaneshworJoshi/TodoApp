import React, { useState } from 'react'
import { Box, Container, styled } from '@mui/material'
import { TaskBoardProps } from './TaskBoard.type'
import { FilterBar, Modal, TaskColumn, TaskForm } from '../../molecules'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { useAppDispatch } from '../../../redux/hooks'
import {
  addTodo,
  deleteTodo,
  editTodo,
} from '../../../redux/features/todoSlice'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import DragDropContextHoc from '../../../common/components/HOC/DragDropContextHoc'

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

export const TaskBoard = ({ columns, todos }: TaskBoardProps) => {
  const [taskId, setTaskId] = useState('')
  const [task, setTask] = useState(null)
  const [activeTaskTab, setActiveTaskTab] = useState('all')

  const [openModal, setOpenModal] = useState(false)

  const dispatch = useAppDispatch()
  const { isSmallMobile } = useMediaQuery()

  // Handle delete operation
  const handleDelete = () => {
    dispatch(deleteTodo(taskId))
    setOpenModal(false)
  }
  // Handle edit operation
  const handleEdit = (editedTask: any) => {
    dispatch(editTodo(editedTask))
    setOpenModal(false)
  }

  const handleAdd = (newTask: any) => {
    //@ts-ignore
    dispatch(addTodo({ ...newTask, status: 'incomplete' }))
  }

  // Event handlers for various actions of task
  const events = {
    onDeleteClick: (id: string) => {
      setTaskId(id)
      setOpenModal(true)
    },
    onTaskMove: (task: any) => {
      dispatch(editTodo(task))
    },
    onEditClick: (task: any) => {
      setTask(task)
      setOpenModal(true)
    },
  }

  // Determine modal properties based on task to show Delete modal or Edit modal
  const getModalProps = () => {
    // @ts-ignore
    if (taskId && !task?.id) {
      return {
        open: openModal,
        title: 'Are you sure want to delete this task?',
        onClose: () => {
          setOpenModal(false)
          setTaskId('')
          setTask(null)
        },
        confirmData: { label: 'Delete', onConfirm: handleDelete },
      }
    } else {
      return {
        open: openModal,
        onClose: () => {
          setOpenModal(false)
          setTaskId('')
          setTask(null)
        },
      }
    }
  }

  return (
    <>
      <StyledContainer maxWidth="lg">
        <BoardWrapperBox>
          <FilterBar
            //@ts-ignore
            activeTaskTab={activeTaskTab}
            events={{
              setActiveTaskTab,
              addTaskHandler: handleAdd,
            }}
          />

          <StyledBox>
            {!isSmallMobile ? (
              <DragDropContextHoc>
                {columns?.map((column) => (
                  <TaskColumn
                    key={column?.id}
                    {...column}
                    events={events}
                    //@ts-ignore
                    activeTaskTab={activeTaskTab}
                  />
                ))}
              </DragDropContextHoc>
            ) : (
              <TaskColumn
                title="All Tasks"
                tasks={todos}
                //@ts-ignore
                activeTaskTab={activeTaskTab}
                events={events}
              />
            )}
          </StyledBox>
        </BoardWrapperBox>
      </StyledContainer>
      <Modal {...getModalProps()}>
        {
          // @ts-ignore
          task?.id && (
            <TaskForm
              task={task}
              events={{
                onCancelClick: () => setOpenModal(false),
                onSubmitClick: handleEdit,
              }}
            />
          )
        }
      </Modal>
    </>
  )
}

export default TaskBoard
