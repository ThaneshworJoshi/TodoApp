import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { editTodo, updateTodoState } from '../../../redux/features/todoSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

interface Props {
  children: React.ReactNode
}

const DragDropContextHoc = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector((state) => state?.todos)
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    // Check if the drag was not completed or dropped in the same place
    if (
      !result.destination ||
      destination?.droppableId === source?.droppableId
    ) {
      return
    }

    // Find the dragged todo item using the draggableId
    const todo = todos?.find((todo) => todo?.id == draggableId)

    let status = 'incomplete'
    // Determine the new status based on the droppableId
    if (destination?.droppableId === '2') {
      status = 'inprogress'
    } else if (destination?.droppableId === '3') {
      status = 'completed'
    }
    // Update the local state with the new status
    dispatch(updateTodoState({ ...todo, status }))
    // Perform an optimistic update by sending the status change to the server
    dispatch(editTodo({ ...todo, status }))
  }

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
}

export default DragDropContextHoc
