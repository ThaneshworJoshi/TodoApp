import React, { useMemo, useState } from 'react'
import {
  Box,
  Chip,
  IconButton,
  MenuItem,
  styled,
  Typography,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'

import { TaskCardProps } from './TaskCard.type'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Button } from '../../atoms'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)',
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
  status,
  media,
  events,
}: TaskCardProps) => {
  const { isMobile } = useMediaQuery()
  const [taskStatus, setTaskStatus] = useState('')
  // Define a mapping of priority values to their corresponding color codes
  const priorityColorMap = {
    high: 'error',
    medium: 'info',
    low: 'secondary',
  }
  // Define a mapping of status values to arrays of menu items
  const statusMenuItems = {
    incomplete: [
      { label: 'Doing', value: 'inprogress' },
      { label: 'Done', value: 'completed' },
    ],
    completed: [
      { label: 'To Do', value: 'incomplete' },
      { label: 'Doing', value: 'inprogress' },
    ],
    inprogress: [
      { label: 'To Do', value: 'incomplete' },
      { label: 'Done', value: 'completed' },
    ],
  }

  // Calculate the color for displaying priority, based on the priority value
  const priorityColor = useMemo(() => {
    if (priority) {
      return priorityColorMap[priority as 'high' | 'medium' | 'low']
    }
  }, [priority])

  // Generate an array of MenuItems based on the current status
  const getMenuItems = () => {
    return statusMenuItems[status].map((item) => (
      <MenuItem key={item.label} value={item.value.toLowerCase()}>
        {item.label}
      </MenuItem>
    ))
  }

  const handleStatusChange = (event: SelectChangeEvent) => {
    setTaskStatus(event.target.value as string)

    events?.onTaskMove({
      id,
      tag,
      title,
      description,
      priority,
      status: event.target.value,
    })
  }
  return (
    <StyledBox className="task-card">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <StyledChip label={tag} size={isMobile ? 'small' : 'medium'} />

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
      <Box display="flex" justifyContent="space-between" mt="30px">
        {priority && (
          <Box>
            priority:{' '}
            <StyledChip
              label={priority}
              //@ts-ignore
              color={priorityColor}
              size={isMobile ? 'small' : 'medium'}
            />
          </Box>
        )}
        <Button size="small">Edit</Button>
      </Box>
      <Box display="flex" justifyContent={'flex-end'} mt="30px">
        <Select
          size="small"
          displayEmpty
          value={taskStatus}
          placeholder="Move"
          input={<OutlinedInput />}
          onChange={handleStatusChange}
        >
          <MenuItem disabled value="">
            <>Move</>
          </MenuItem>
          {getMenuItems()}
        </Select>
      </Box>
    </StyledBox>
  )
}

export default TaskCard
