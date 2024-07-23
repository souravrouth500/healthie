import React from 'react'
import Modal from '@mui/material/Modal';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { useChangePassword } from '@/api/hooks/change-password/hooks';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80%', md: '700px' },
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '14px'
};

function ChangePassword({ open, handleClose }: { open: boolean, handleClose: any }) {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const updatePassword = useChangePassword()

    const onSubmit = (data:any) => {
        updatePassword.mutate(data)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container sx={style}>
                    <IconButton sx={{ position: 'absolute', right: 20, top: 25}} onClick={handleClose}>
                        <CloseIcon sx={{bgcolor: '#1A237E', color: 'white', borderRadius: '50%', fontSize: '18px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}}/>
                    </IconButton>
                    <Typography variant='h3' textAlign={'center'} sx={{color: 'rgb(50,50,50)'}}>Change Password</Typography>
                    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
                        <Box component={'div'} my={2}>
                            <Typography variant='body1' fontWeight={'bold'} mb={0.5} color={'rgb(87, 87, 87)'}>Old Password</Typography>
                            <TextField
                                variant='outlined'
                                fullWidth
                                // label='Subject'
                                placeholder='Old Password'
                                sx={{
                                    '& .MuiInputBase-root': {
                                        fontWeight: 'normal',
                                        color: 'rgb(84, 79, 79)',
                                        // backgroundColor: '#d7d6d66b', // Change background color here
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                        borderRadius: '8px',
                                        backgroundColor: '#d7d6d66b'
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'rgb(100, 100, 100)' } }}
                                {...register('old_password')}
                            />
                        </Box>

                        <Box component={'div'} my={2}>
                            <Typography variant='body1' fontWeight={'bold'} mb={0.5} color={'rgb(87, 87, 87)'}>New Password</Typography>
                            <TextField
                                variant='outlined'
                                fullWidth
                                // label='Subject'
                                placeholder='new password'
                                sx={{
                                    '& .MuiInputBase-root': {
                                        fontWeight: 'normal',
                                        color: 'rgb(84, 79, 79)',
                                        // backgroundColor: '#d7d6d66b', // Change background color here
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                        borderRadius: '8px',
                                        backgroundColor: '#d7d6d66b'
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'rgb(100, 100, 100)' } }}
                                {...register('password')}
                            />
                        </Box>

                        <Box component={'div'} my={2}>
                            <Typography variant='body1' fontWeight={'bold'} mb={0.5} color={'rgb(87, 87, 87)'}>Confirm Passsword</Typography>
                            <TextField
                                variant='outlined'
                                fullWidth
                                // label='Subject'
                                placeholder='confirm password'
                                sx={{
                                    '& .MuiInputBase-root': {
                                        fontWeight: 'normal',
                                        color: 'rgb(84, 79, 79)',
                                        // backgroundColor: '#d7d6d66b', // Change background color here
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                        borderRadius: '8px',
                                        backgroundColor: '#d7d6d66b'
                                    },
                                }}
                                InputLabelProps={{ style: { color: 'rgb(100, 100, 100)' } }}
                                {...register('password_confirmation')}
                            />
                        </Box>

                        <Box display={'flex'} justifyContent={'center'} my={4} gap={1}>
                            <Button sx={{ bgcolor: "#1A237E", color: 'white', fontSize: '16px', px: 4, py: 2, textTransform: 'capitalize', '&:hover': { bgcolor: '#FBC02D' } }} type='submit'>Submit</Button>
                        </Box>
                    </Box>
                </Container>
            </Modal>
        </>
    )
}

export default ChangePassword