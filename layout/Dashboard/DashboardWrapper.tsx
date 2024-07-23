import React from 'react'
import { Wrapper } from '../wrapper/wrapper'
import { Container, Grid } from '@mui/material'
import DashboardSidebarMD from './DashboardSidebarMD'
import DashboardSidebarXS from './DashboardSidebarXS'

function DashboardWrapper({ children }: { children: JSX.Element }) {

    return (
        <>
            <Wrapper>
                <Container maxWidth={'lg'}>
                    <Grid container mt={18} mb={4} px={2}>
                        <Grid item xs={12} md={3.2} sx={{ border: '1px solid transparent', borderRadius: '10px', bgcolor: {xs: 'none', md: '#ede7f6'} }} px={3}>
                            <DashboardSidebarMD />
                            <DashboardSidebarXS />
                        </Grid>
                        <Grid item xs={12} md={8.8} px={3}>
                            <main className='dashboard_wrapper'>
                                {children}
                            </main>
                        </Grid>
                    </Grid>
                </Container>
            </Wrapper>
        </>
    )
}

export default DashboardWrapper