
import { useCreateTicket, useFetchTickets } from '@/api/hooks/support/hooks'
import DashboardWrapper from '@/layout/Dashboard/DashboardWrapper'
import { Avatar, Box, Button, Container, Grid, IconButton, MenuItem, Pagination, PaginationItem, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { indigo } from '@mui/material/colors'
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form'


function Support() {

    const [tablePage, setTablePage] = useState({ page: 1, per_page: 3 });
    const { data: getTicketsRes, error: getTicketsErrorRes } = useFetchTickets(tablePage)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const priorityVal = ['low', 'high'];

    const ticketCreate = useCreateTicket()

    const onSubmit = (data: any) => {
        ticketCreate.mutate(data)
    }
    console.log(getTicketsRes?.data?.data?.mySupportTickets);


    return (
        <>
            <DashboardWrapper >
                <Container sx={{ borderRadius: '8px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', height: 'fit', py: 2 }}>
                    <Typography variant='h3'>Support</Typography>
                    {/* <Typography variant='body1'>No policies found</Typography> */}

                    <Grid container sx={{ mt: 4 }} spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2} component={'div'} sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', p: 2, borderRadius: '7px', border: '1px solid #8080802e' }}>
                                <Avatar sx={{ height: 70, width: 70, bgcolor: indigo[900] }}>{getTicketsRes?.data?.data?.totalTickets}</Avatar>
                                <Box>
                                    <Typography variant='h3' fontWeight={'bolder'} color={'rgb(100, 100, 100)'}>Total</Typography>
                                    <Typography variant='body1' color={'rgb(100, 100, 100)'}>Tickets</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2} component={'div'} sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', p: 2, borderRadius: '7px', border: '1px solid #8080802e' }}>
                                <Avatar sx={{ height: 70, width: 70, bgcolor: indigo[900] }}>{getTicketsRes?.data?.data?.resolvedTickets}</Avatar>
                                <Box>
                                    <Typography variant='h3' fontWeight={'bolder'} color={'rgb(100, 100, 100)'}>Resolved</Typography>
                                    <Typography variant='body1' color={'rgb(100, 100, 100)'}>Tickets</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2} component={'div'} sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', p: 2, borderRadius: '7px', border: '1px solid #8080802e' }}>
                                <Avatar sx={{ height: 70, width: 70, bgcolor: indigo[900] }}>{getTicketsRes?.data?.data?.pendingTickets}</Avatar>
                                <Box>
                                    <Typography variant='h3' fontWeight={'bolder'} color={'rgb(100, 100, 100)'}>Pending</Typography>
                                    <Typography variant='body1' color={'rgb(100, 100, 100)'}>Tickets</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box component={'form'} mt={4} px={2} onSubmit={handleSubmit(onSubmit)}>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='body1' fontWeight={'bold'} mb={2} color={'rgb(87, 87, 87)'}>Subject</Typography>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    // label='Subject'
                                    placeholder='Subject'
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            fontWeight: 'normal',
                                            color: 'rgb(84, 79, 79)',
                                            backgroundColor: '#d7d6d66b', // Change background color here
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
                                    InputLabelProps={{ style: { color: 'rgb(100, 100, 100)' } }}
                                    {...register('subject')}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography variant='body1' fontWeight={'bold'} mb={2} color={'rgb(87, 87, 87)'}>Priority</Typography>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    select
                                    // label='Subject'
                                    placeholder='Priority'
                                    defaultValue={'low'}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            fontWeight: 'normal',
                                            color: 'rgb(84, 79, 79)',
                                            backgroundColor: '#d7d6d66b', // Change background color here
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        textTransform: 'capitalize'
                                    }}
                                    InputLabelProps={{ style: { color: 'rgb(100, 100, 100)' } }}
                                    {...register('priority')}
                                >
                                    {
                                        priorityVal.map((item: string) => {
                                            return (
                                                <MenuItem key={item} value={item}>{item}</MenuItem>
                                            )
                                        })
                                    }
                                </TextField>
                            </Grid>

                            <Grid item xs={12} >
                                <Typography variant='body1' fontWeight={'bold'} mb={2} color={'rgb(87, 87, 87)'}>Description</Typography>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    multiline
                                    rows={5}
                                    // label='Subject'
                                    placeholder='Description'
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            fontWeight: 'normal',
                                            color: 'rgb(84, 79, 79)',
                                            backgroundColor: '#d7d6d66b', // Change background color here
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                    }}
                                    InputLabelProps={{ style: { color: 'rgb(100, 100, 100)' } }}
                                    {...register('description')}
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
                            <Button sx={{ bgcolor: '#1A237E', color: 'white', px: 4, py: 2, '&:hover': { bgcolor: '#FBC02D' } }} type='submit'>Submit</Button>
                        </Box>
                    </Box>

                    <TableContainer sx={{ width: '100%', minHeight: '230px', borderRadius: '20px', overflow: 'hidden' }}>
                        <Table >
                            <TableHead sx={{ borderRadius: '18px' }}>
                                <TableRow sx={{ bgcolor: '#ede7f6' }}>
                                    <TableCell sx={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>TicketID</TableCell>
                                    <TableCell sx={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>Priority</TableCell>
                                    <TableCell sx={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>Subject</TableCell>
                                    <TableCell sx={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    getTicketsRes?.data?.data?.mySupportTickets?.data?.map((item: any, index: number) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell sx={{ color: 'black', fontSize: '14px', textTransform: 'capitalize' }}>#{item?.ticket_id}</TableCell>
                                                <TableCell sx={{ color: 'black', fontSize: '14px', textTransform: 'capitalize' }}>{item?.priority}</TableCell>
                                                <TableCell sx={{ color: 'black', fontSize: '14px', textTransform: 'capitalize' }}>{item?.subject}</TableCell>
                                                <TableCell sx={{ color: 'black', fontSize: '14px', textTransform: 'capitalize' }}><IconButton sx={{ bgcolor: 'white', color: '#1A237E', '&:hover': { bgcolor: '#1A237E', color: 'white' } }}><VisibilityIcon /></IconButton></TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box my={2} display={'flex'} justifyItems={'center'} alignItems={'center'}>
                        {/* <Pagination count={Math.ceil(getTicketsRes?.data?.data?.mySupportTickets?.total / 3)} shape="rounded" sx={{ mx: 'auto', bgcolor: '#3949AB', color: 'white' }} onChange={(e, page) => setTablePage({ ...tablePage, page: page })} /> */}
                        <Pagination
                            count={Math.ceil(getTicketsRes?.data?.data?.mySupportTickets?.total / 3)}
                            // variant='outlined'
                            shape="rounded"
                            boundaryCount={2}
                            sx={{ mx: 'auto', bgcolor: '#3949AB', color: 'white' }}
                            onChange={(e, page) => setTablePage({ ...tablePage, page: page })}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                    sx={{
                                        color: 'white', // Change text color of PaginationItem here
                                        '&.Mui-selected': {
                                            bgcolor: '#283593', // Change background color when item is selected
                                        },
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Container>
            </DashboardWrapper>
        </>
    )
}

export default Support