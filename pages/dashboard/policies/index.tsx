import DashboardWrapper from '@/layout/Dashboard/DashboardWrapper'
import { Container, Typography } from '@mui/material'
import React from 'react'

function Policy() {

  return (
    <>
      <DashboardWrapper >
        <Container sx={{ borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', height: 'fit', py: 2 }}>
          <Typography variant='h3'>My Policies</Typography>
          <Typography variant='body1'>No policies found</Typography>
        </Container>
      </DashboardWrapper>
    </>
  )
}

export default Policy