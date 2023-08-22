import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { TaskColumnProps } from './TaskColumn.type'
import { TaskCard } from '../TaskCard'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const StyledBox = styled(Box)<{ isActiveColumn?: boolean }>(({
  isActiveColumn,
}) => {
  return {
    flex: 1,
    borderRadius: '5px',
    // boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)',
    padding: '20px 20px 10px',
    backgroundColor: '#e7f1ec',
    width: 'fit-content',
    height: '88vh',
    overflowY: 'auto',
    '& .task-card:not(:last-child)': {
      marginBottom: '20px',
    },

    '& .task-card': {
      opacity: isActiveColumn ? 1 : 0.2,
    },
  }
})

const StyledTitle = styled(Typography)(({}) => {
  return {
    marginBottom: '20px',
    fontWeight: 'bold',
    color: 'rgb(23, 43, 77)',
    width: '100%',
    textTransform: 'uppercase',
  }
})

export const TaskColumn = ({
  id,
  title,
  tasks,
  events,
  activeTaskTab,
}: TaskColumnProps) => {
  const { isSmallMobile } = useMediaQuery()

  // Map the active tab to the appropriate column title
  const mapActiveTabToTitle = () => {
    if (activeTaskTab === 'completed') {
      return 'Done'
    } else if (activeTaskTab === 'inprogress') {
      return 'Doing'
    } else {
      return 'All'
    }
  }

  // Display all tasks in one column for small devices
  if (isSmallMobile) {
    // Filter tasks based on the active tab and create TaskCard components
    const filteredTasks = tasks
      ?.filter((task) => {
        if (task?.status === activeTaskTab || activeTaskTab === 'all') {
          return true
        }
        return false
      })
      .map((task) => <TaskCard key={task.id} {...task} events={events} />)

    return (
      <StyledBox className="task-column" isActiveColumn={true}>
        <StyledTitle variant="h6">
          {mapActiveTabToTitle()} {filteredTasks?.length}
        </StyledTitle>
        {filteredTasks}
      </StyledBox>
    )
  }

  // Display the title and all tasks in the column for larger devices
  return (
    <Droppable droppableId={`${id}`}>
      {(provided) => (
        <StyledBox
          className="task-column"
          isActiveColumn={
            activeTaskTab === tasks?.[0]?.status || activeTaskTab === 'all'
          }
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <StyledTitle variant="h6">
            {title} {tasks?.length}
          </StyledTitle>

          {tasks?.map((task, index) => (
            <TaskCard key={task.id} {...task} events={events} index={index} />
          ))}
        </StyledBox>
      )}
    </Droppable>
  )
}

export default TaskColumn
