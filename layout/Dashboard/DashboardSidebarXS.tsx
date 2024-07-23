import { Box, Divider, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function DashboardSidebarXS() {

    const sidebarNav = [
        {
            name: 'Profile',
            path: '/dashboard'
        },
        {
            name: 'Policies',
            path: '/dashboard/policies'
        },
        {
            name: 'Support',
            path: '/dashboard/support'
        },
    ]

    return (
        <>
            <Box component={'div'} px={3} sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box component={'ul'} sx={{ display: 'flex', justifyContent: 'space-evenly', gap: 2, pl: 0 }}>
                    {
                        sidebarNav.map((item: { name: string, path: string }) => {
                            return (
                                <Link href={item.path} key={item.name} style={{ textDecoration: 'none', textTransform: 'capitalize' }}>
                                    <Typography variant='h4' fontWeight={'bold'} color={'rgb(70,70,70)'} sx={{fontSize: { xs: '14px', sm: '18px'}}}>{item.name}</Typography>
                                </Link>
                            )
                        })
                    }
                </Box>
                <Divider />
            </Box>
        </>
    )
}

export default DashboardSidebarXS