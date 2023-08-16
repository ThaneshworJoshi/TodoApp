import React from 'react'
import { Box, Chip, styled, Typography } from '@mui/material'
import { TaskCardProps } from './TaskCard.type'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    boxShadow: '0px 0px 8px 8px rgba(0,0,0,0.1)',
    borderRadius: theme.spacing(2),
    maxWidth: '330px',
    minHeight: '300px',
    padding: '20px',
  }
})

const StyledTitle = styled(Typography)(({}) => {
  return {
    margin: '20px 0',
    fontWeight: 'bold',
  }
})

export const TaskCard = ({
  tag,
  title,
  description,
  priority,
  //   status,
  media,
}: TaskCardProps) => {
  return (
    <StyledBox>
      <Chip label={tag} color="secondary" />
      <StyledTitle>{title}</StyledTitle>
      <hr />
      {media?.imageUrl && (
        <Box>
          <img src={media?.imageUrl} alt={media?.altText} width={'100%'} />
        </Box>
      )}
      <Typography color={'rgba(0, 0, 0, 0.4)'} mb="20px">
        {description}
      </Typography>
      {priority && (
        <>
          priority: <Chip label={priority} color="primary" />
        </>
      )}
    </StyledBox>
  )
}

export default TaskCard
