import { useEffect, useState } from 'react'

import { TaskBoard } from './components/organisms'
import { useTaskBoardData } from './hooks/useTaskBoardData'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { fetchTodos } from './redux/features/todoSlice'

function App() {
  const dispatch = useAppDispatch()
  const { todos, loading, error } = useAppSelector((state) => state?.todos)

  // hook returns formatted data tailored for a task board
  const taskBoardData = useTaskBoardData(todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div>
      <TaskBoard columns={taskBoardData} todos={todos} />
    </div>
  )
}

export default App
