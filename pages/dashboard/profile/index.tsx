import { getProfileDetails } from '@/api/functions/user.api'
import { Wrapper } from '@/layout/wrapper/wrapper';
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { useUser } from '@/api/hooks/user/hooks';

function Dashboard() {

  // const { data, error } = useQuery({
  //   queryKey: ['get-profile'],
  //   queryFn: () => getProfileDetails()
  // })

  const data = useUser()

  // console.log(data);
  console.log(data?.data?.data?.user?.email);


  return (
    <>
      <Wrapper>
        <Container maxWidth={'lg'} sx={{my: 2}}>
        <Typography variant='h3' textAlign={'center'} sx={{ color: 'black'}}>Profile</Typography>
        <Paper elevation={0}>
          <Grid container maxWidth={'lg'} mx={'auto'} mt={2} px={0} sx={{ borderRadius: '8px', overflow: 'hidden'}}>
            
            <Grid item xs={12} sm={6} sx={{ bgcolor: '#1A237E' }} textAlign={'center'}>
              <Stack spacing={2}>
                <Typography variant='h5' color={'whitesmoke'} fontWeight={'bold'}>Email</Typography>
                <Typography variant='h5' color={'whitesmoke'} fontWeight={'bold'}>{data?.data?.data?.user?.email}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} textAlign={'center'}>
              <Stack spacing={2}>
                <Typography variant='h5' color={'black'}>First Name: {data?.data?.data?.user?.first_name}</Typography>
                <Typography variant='h5' color={'black'}>Last Name: {data?.data?.data?.user?.last_name}</Typography>
                <Typography variant='h5' color={'black'}>Email: {data?.data?.data?.user?.email}</Typography>
                <Typography variant='h5' color={'black'}>Phone: {data?.data?.data?.user?.phone}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
        </Container>
      </Wrapper>
    </>
  )
}

export default Dashboard