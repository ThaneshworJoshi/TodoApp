import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { TaskColumnProps } from './TaskColumn.type'
import { TaskCard } from '../TaskCard'

const StyledBox = styled(Box)(() => {
  return {
    flex: 1,
    borderRadius: '5px',
    boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)',
    padding: '20px 10px 10px 10px',
    backgroundColor: '#f4f5f7',
    width: 'fit-content',
    height: 'auto',
    '& .task-card:not(:last-child)': {
      marginBottom: '20px',
    },
  }
})

const StyledTitle = styled(Typography)(({}) => {
  return {
    marginBottom: '20px',
    fontWeight: 'bold',
    color: 'rgb(23, 43, 77)',
    width: '100%',
  }
})

export const TaskColumn = ({ title, tasks }: TaskColumnProps) => {
  return (
    <StyledBox className="task-column">
      <StyledTitle variant="h6">
        {title} {tasks?.length}
      </StyledTitle>

      {tasks?.map((task) => <TaskCard key={task.id} {...task} />)}
    </StyledBox>
  )
}

export default TaskColumn
