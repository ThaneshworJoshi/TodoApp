import React from 'react'
import { styled, Box } from '@mui/material'
import { Button } from '../../atoms'

const FilterWrapperBox = styled(Box)(() => {
  return {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export const FilterBar = () => {
  return (
    <Box p={'10px 0 20px'}>
      <FilterWrapperBox>
        <Box>
          Filter:
          <Button size="small" variant="text">
            Todo
          </Button>
          <Button size="small" variant="text">
            Doing
          </Button>
          <Button size="small" variant="text">
            Done
          </Button>
          <Button size="small" variant="contained">
            Add Task
          </Button>
        </Box>
      </FilterWrapperBox>
    </Box>
  )
}

export default FilterBar
