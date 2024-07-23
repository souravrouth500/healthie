import { useUpdateProfile, useUser } from '@/api/hooks/user/hooks';
import DashboardWrapper from '@/layout/Dashboard/DashboardWrapper';
import { Box, Button, Container, Divider, IconButton, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { IFormInput } from '@/typescript/interface/common.interface';
import ChangePassword from './change-password';

function Dashboard() {

    const [nameEdit, setNameEdit] = useState(false);
    const [phoneEdit, setPhoneEdit] = useState(false);
    const [userDeatils, setUserDeatils] = useState<IFormInput>({})
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);
    const data = useUser();
    const updateProfile = useUpdateProfile()

    const handleNameEdit = () => {
        setNameEdit(true);
    }
    const handlePhoneEdit = () => {
        setPhoneEdit(true);
    }

    const handleSave = () => {
        if (nameEdit) {
            setNameEdit(false)
        }
        if (phoneEdit) {
            setPhoneEdit(false)
        }
        updateProfile.mutate(userDeatils)
    }

    console.log('profile',data?.data);
    console.log(data?.data?.data?.user?.email);

    return (
        <>
            <DashboardWrapper >
                <Container sx={{ borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', py: 2 }}>
                    <Typography variant='h3'>Profile</Typography>
                    <Box component={'div'} className='profile_details' textAlign={'center'} sx={{ mx: 'auto', my: 8 }}>
                        <figure style={{ height: '164px', width: '164px', borderRadius: '50%', overflow: 'hidden', margin: '10px auto' }}>
                            <img src={data?.data?.data?.user?.profile_photo ?? 'https://healthie-web.dedicateddevelopers.us/_next/image/?url=%2Fassets%2Fimages%2Fno_image.png&w=256&q=75'} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </figure>
                    </Box>

                    <Box component={'div'} sx={{ lineHeight: '3', letterSpacing: '2px' }} >
                        <Table sx={{ width: '100%' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell><Typography variant='h4' sx={{ color: 'rgb(100, 100, 100)' }}>Full Name</Typography></TableCell>
                                    <TableCell sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {
                                            !nameEdit ? (
                                                <Typography variant='h4' sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bold' }}>
                                                    {`${data?.data?.data?.user?.first_name} ${data?.data?.data?.user?.last_name}`}
                                                </Typography>
                                            ) : (
                                                <>
                                                    <input type="text" defaultValue={data?.data?.data?.user?.first_name} name='first_name' style={{ border: 'none', backgroundColor: '#f5f8fa' }} onChange={(e) => setUserDeatils({ ...userDeatils, first_name: e.target.value })} />
                                                    <input type="text" defaultValue={data?.data?.data?.user?.last_name} name='last_name' style={{ border: 'none', backgroundColor: '#f5f8fa' }} onChange={(e) => setUserDeatils({ ...userDeatils, last_name: e.target.value })} />
                                                </>
                                            )
                                        }
                                        {
                                            nameEdit ? (
                                                <Button sx={{ borderRadius: '20px', bgcolor: '#ede7f6', color: '#283593', fontSize: '12px', '&:hover': { bgcolor: '#283593', color: 'white' } }} onClick={handleSave}>
                                                    <BorderColorIcon sx={{ fontSize: '12px', marginRight: '4px' }} />
                                                    <Typography variant='body2' fontWeight={'bolder'} color={'#283593'} sx={{ '&:hover': { color: 'white' } }}>Save</Typography>
                                                </Button>
                                            ) : (
                                                <Button sx={{ borderRadius: '20px', bgcolor: '#ede7f6', color: '#283593', fontSize: '12px', '&:hover': { bgcolor: '#283593', color: 'white' } }} onClick={handleNameEdit}>
                                                    <BorderColorIcon sx={{ fontSize: '12px', marginRight: '4px' }} />
                                                    <Typography variant='body2' fontWeight={'bolder'} color={'#283593'} sx={{ '&:hover': { color: 'white' } }}>Edit</Typography>
                                                </Button>
                                            )
                                        }
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell><Typography variant='h4' sx={{ color: 'rgb(100, 100, 100)' }}>Email</Typography></TableCell>
                                    <TableCell>
                                        <Typography variant='h4' sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bold' }}>
                                            {`${data?.data?.data?.user?.email}`}
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell><Typography variant='h4' sx={{ color: 'rgb(100, 100, 100)' }}>Phone Number</Typography></TableCell>
                                    <TableCell sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        {
                                            !phoneEdit ? (
                                                <Typography variant='h4' sx={{ color: 'rgb(56, 56, 56)', fontWeight: 'bold' }}>
                                                    {`${data?.data?.data?.user?.phone}`}
                                                </Typography>
                                            ) : (
                                                <input type="number" defaultValue={data?.data?.data?.user?.phone} name="phone" style={{ border: 'none', backgroundColor: '#f5f8fa' }} onChange={(e) => setUserDeatils({ ...userDeatils, phone: e.target.value })} />
                                            )
                                        }
                                        {
                                            phoneEdit ? (
                                                <Button sx={{ borderRadius: '20px', bgcolor: '#ede7f6', color: '#283593', fontSize: '12px', '&:hover': { bgcolor: '#283593', color: 'white' } }} onClick={handleSave}>
                                                    <BorderColorIcon sx={{ fontSize: '12px', marginRight: '4px' }} />
                                                    <Typography variant='body2' fontWeight={'bolder'} color={'#283593'} sx={{ '&:hover': { color: 'white' } }}>Save</Typography>
                                                </Button>
                                            ) : (
                                                <Button sx={{ borderRadius: '20px', bgcolor: '#ede7f6', color: '#283593', fontSize: '12px', '&:hover': { bgcolor: '#283593', color: 'white' } }} onClick={handlePhoneEdit}>
                                                    <BorderColorIcon sx={{ fontSize: '12px', marginRight: '4px' }} />
                                                    <Typography variant='body2' fontWeight={'bolder'} color={'#283593'} sx={{ '&:hover': { color: 'white' } }}>Edit</Typography>
                                                </Button>
                                            )
                                        }
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Box display={'flex'} justifyContent={'center'} my={4} gap={1}>
                            <Button sx={{ bgcolor: "#1A237E", color: 'white', fontSize: '16px', px: 2, py: 1, textTransform: 'capitalize', '&:hover': { bgcolor: '#FBC02D' } }} onClick={handleModalOpen}>Change Password</Button>
                            <Button sx={{ bgcolor: "#1A237E", color: 'white', fontSize: '12px', px: 2, py: 1, textTransform: 'capitalize', '&:hover': { bgcolor: '#FBC02D' }, display: { xs: 'block', md: 'none' } }}>Logout</Button>
                        </Box>
                    </Box>
                </Container>
            </DashboardWrapper>

            {
                open && <ChangePassword open={open} handleClose={handleModalClose} />
            }
        </>
    )
}

export default Dashboard