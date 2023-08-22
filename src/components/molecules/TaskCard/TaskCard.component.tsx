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
import { Draggable } from 'react-beautiful-dnd'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    // border: '1px solid rgba(0,0,0,0.2)',
    boxShadow: '0px 0px 10px 10px rgba(0,0,0,0)',
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

export const TaskCard = (task: TaskCardProps) => {
  const { isMobile, isSmallMobile } = useMediaQuery()
  const [taskStatus, setTaskStatus] = useState(task?.status ?? '')

  const { id, tag, title, description, priority, status, media, events } = task
  // Define a mapping of priority values to their corresponding color codes
  const priorityColorMap = {
    high: 'error',
    medium: 'info',
    low: 'secondary',
  }
  // Define a mapping of status values to arrays of menu items
  const statusMenuItems = {
    incomplete: ['inprogress', 'completed'],
    completed: ['incomplete', 'inprogress'],
    inprogress: ['incomplete', 'completed'],
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
      <MenuItem key={item} value={item.toLowerCase()}>
        {item}
      </MenuItem>
    ))
  }

  const handleStatusChange = (event: SelectChangeEvent) => {
    setTaskStatus(event.target.value as any)

    events?.onTaskMove({
      id,
      tag,
      title,
      description,
      priority,
      status: event.target.value,
    })
  }

  // Common JSX content for both conditions
  const commonContent = (
    <Box>
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
        {events?.onEditClick && (
          <Button size="small" onClick={() => events?.onEditClick?.(task)}>
            Edit
          </Button>
        )}
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
          <MenuItem value={taskStatus}>{taskStatus}</MenuItem>
          {getMenuItems()}
        </Select>
      </Box>
    </Box>
  )

  if (!isSmallMobile) {
    return (
      //@ts-ignore
      <Draggable
        key={task.id}
        draggableId={task?.id.toString()}
        index={task.index}
      >
        {(provided, snapshot) => (
          <StyledBox
            className="task-card"
            ref={provided.innerRef}
            //@ts-ignore
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {commonContent}
          </StyledBox>
        )}
      </Draggable>
    )
  } else {
    return <StyledBox className="task-card">{commonContent}</StyledBox>
  }
}

export default TaskCard
