import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material'

const StyledHeaderWrapper = styled(Box)(() => {
  return {
    padding: '20px 0',
    backgroundColor: '#76CC8E',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  }
})
export const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" fontWeight="bold">
          Todo App
        </Typography>
      </Container>
    </StyledHeaderWrapper>
  )
}

export default Header
