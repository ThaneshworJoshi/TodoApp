import React from 'react'
import { Box, Chip, IconButton, styled, Typography } from '@mui/material'
import { TaskCardProps } from './TaskCard.type'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)',
    minHeight: '300px',
    padding: '20px',
    backgroundColor: theme.palette.common.white,
  }
})

const StyledTitle = styled(Typography)(({ theme }) => {
  return {
    margin: '20px 0',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
    },
  }
})

const StyledChip = styled(Chip)(({ theme }) => {
  return {
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem',
    },
  }
})

export const TaskCard = ({
  id,
  tag,
  title,
  description,
  priority,
  //   status,
  media,
  events,
}: TaskCardProps) => {
  const { isMobile } = useMediaQuery()

  return (
    <StyledBox className="task-card">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <StyledChip
          label={tag}
          color="secondary"
          size={isMobile ? 'small' : 'medium'}
        />

        {events?.onDeleteClick && (
          <IconButton
            onClick={() => events?.onDeleteClick?.(id)}
            data-testid="delete-button"
          >
            <DeleteForeverIcon sx={{ color: 'red' }} />
          </IconButton>
        )}
      </Box>
      <StyledTitle>{title}</StyledTitle>
      <hr />
      {media?.imageUrl && (
        <Box>
          <img src={media?.imageUrl} alt={media?.altText} width={'100%'} />
        </Box>
      )}
      <Typography
        color={'rgba(0, 0, 0, 0.4)'}
        mb="20px"
        fontSize={isMobile ? '.8rem' : 'initial'}
      >
        {description}
      </Typography>
      {priority && (
        <>
          priority:{' '}
          <StyledChip
            label={priority}
            color="primary"
            size={isMobile ? 'small' : 'medium'}
          />
        </>
      )}
    </StyledBox>
  )
}

export default TaskCard
