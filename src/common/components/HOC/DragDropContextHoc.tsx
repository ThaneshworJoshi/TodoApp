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
    if (
      !result.destination ||
      destination?.droppableId === source?.droppableId
    ) {
      return
    }

    const todo = todos?.find((todo) => todo?.id == draggableId)

    let status = 'incomplete'

    if (destination?.droppableId === '2') {
      status = 'inprogress'
    } else if (destination?.droppableId === '3') {
      status = 'completed'
    }

    dispatch(updateTodoState({ ...todo, status }))
    dispatch(editTodo({ ...todo, status }))
  }

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
}

export default DragDropContextHoc
