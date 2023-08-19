import { useMemo } from 'react'

/**
 * A custom hook that formats a todo list into data suitable for a task board.
 * @param {Array} todos - The list of todos to be formatted.
 * @returns {Array} Formatted data for rendering on a task board.
 */
export const useTaskBoardData = (todos: any) => {
  const columnsData = useMemo(() => {
    let formattedColumnsData = [
      {
        id: '1',
        title: 'To Do',
        tasks: [],
      },
      {
        id: '2',
        title: 'Doing',
        tasks: [],
      },
      {
        id: '3',
        title: 'Done',
        tasks: [],
      },
    ]

    todos.forEach((todo: any) => {
      switch (todo?.status) {
        case 'incomplete':
          //@ts-ignore
          formattedColumnsData[0].tasks.push(todo)
          break
        case 'completed':
          //@ts-ignore
          formattedColumnsData[2].tasks.push(todo)
          break
        default:
          //@ts-ignore
          formattedColumnsData[1].tasks.push(todo)
      }
    })

    return formattedColumnsData
  }, [todos])

  return columnsData
}

export default useTaskBoardData
