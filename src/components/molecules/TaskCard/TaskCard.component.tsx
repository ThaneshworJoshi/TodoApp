import React from 'react'
import { Box, Chip, styled, Typography } from '@mui/material'
import { TaskCardProps } from './TaskCard.type'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

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
  tag,
  title,
  description,
  priority,
  //   status,
  media,
}: TaskCardProps) => {
  const { isSmallMobile, isMobile } = useMediaQuery()
  console.log(isSmallMobile)
  return (
    <StyledBox className="task-card">
      <StyledChip
        label={tag}
        color="secondary"
        size={isMobile ? 'small' : 'medium'}
      />
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
