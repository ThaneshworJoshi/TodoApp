import React from 'react'
import { Box, Container, styled } from '@mui/material'
import { TaskBoardProps } from './TaskBoard.type'
import { FilterBar, TaskColumn } from '../../molecules'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

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
  const { isSmallMobile } = useMediaQuery()

  return (
    <StyledContainer maxWidth="lg">
      <BoardWrapperBox>
        <FilterBar />
        <StyledBox>
          {!isSmallMobile &&
            columns?.map((column) => (
              <TaskColumn key={column?.id} {...column} />
            ))}

          {isSmallMobile && <TaskColumn {...columns[0]} />}
        </StyledBox>
      </BoardWrapperBox>
    </StyledContainer>
  )
}

export default TaskBoard
