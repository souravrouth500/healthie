import { useUser } from '@/api/hooks/user/hooks';
import { Wrapper } from '@/layout/wrapper/wrapper'
import { Box, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PolicyIcon from '@mui/icons-material/Policy';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

function DashboardSidebar() {

    const data = useUser()

    // console.log(data?.data);
    // console.log(data?.data?.data?.user?.email);

    return (
        <>
            <Box component={'div'} sx={{ mx: 'auto' }} className='sidebar'>
                <Box component={'div'} className='profile_details' textAlign={'center'} sx={{ mx: 'auto', my: 4 }}>
                    <figure style={{ height: '144px', width: '144px', borderRadius: '50%', overflow: 'hidden', margin: '10px auto' }}>
                        <img src={data?.data?.data?.user?.profile_photo} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </figure>
                    <Typography variant='h3' fontWeight={'bolder'} color={'#1A237E'} mt={2.5}>{`${data?.data?.data?.user?.first_name} ${data?.data?.data?.user?.last_name}`}</Typography>
                </Box>
                <Divider sx={{ width: '90%', mx: 'auto' }} />
                <Box component={'div'} sx={{ my: 2 }}>
                    <List>
                        <Link href={`/dashboard`} style={{ textDecoration: 'none' }}>
                            <ListItem sx={{ color: 'rgb(56, 56, 56)' }}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={'My Profile'}
                                    sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bolder' }}
                                />
                            </ListItem>
                        </Link>

                        <Link href={`/dashboard/policies`} style={{ textDecoration: 'none' }}>
                            <ListItem>
                                <ListItemIcon>
                                    <PolicyIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={'My Policies'}
                                    sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bolder' }}
                                />
                            </ListItem>
                        </Link>

                        <Link href={`/dashboard/favourites`} style={{ textDecoration: 'none' }}>
                            <ListItem>
                                <ListItemIcon>
                                    <FavoriteBorderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={'My Favourites'}
                                    sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bolder' }}
                                />
                            </ListItem>
                        </Link>

                        <Link href={`/dashboard/notifications`} style={{ textDecoration: 'none' }}>
                            <ListItem>
                                <ListItemIcon>
                                    <NotificationsIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={'Notifications'}
                                    sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bolder' }}
                                />
                            </ListItem>
                        </Link>

                        <Link href={`/dashboard/support`} style={{ textDecoration: 'none' }}>
                            <ListItem>
                                <ListItemIcon>
                                    <SupportIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={'Support'}
                                    sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bolder' }}
                                />
                            </ListItem>
                        </Link>
                    </List>

                    <Box my={3}>
                        <Link href={`/`} style={{ textDecoration: 'none' }}>
                            <ListItem>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText
                                    disableTypography
                                    primary={'Logout'}
                                    sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bolder' }}
                                />
                            </ListItem>
                        </Link>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DashboardSidebar