import { useTestimonial } from '@/api/hooks/cms/hooks/useTestimonials'
import { Wrapper } from '@/layout/wrapper/wrapper';
import { TestimonialItem } from '@/typescript/interface/pages/testimonials';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'

function Testimonial() {

    const { data: testimonialRes, error } = useTestimonial()

    console.log(testimonialRes?.data?.data?.testimonials);

    return (
        <>
            <Wrapper>
            <Grid container maxWidth={'lg'} mx={'auto'} my={2}>
                <Grid item xs={12} >
                    <Typography variant='h3' textAlign={'center'}>Testimonials</Typography>
                </Grid>
                {
                    testimonialRes?.data?.data?.testimonials?.map((item: TestimonialItem) => {
                        return (
                            <Grid item xs={12} sm={6} key={item.id} p={2}>
                                <Paper elevation={0} sx={{ minHeight: '200px', py: 0.5, px: 2 }}>
                                    <Box sx={{minHeight: '80px'}}>
                                    <Typography variant='h6'>{item.client_says}</Typography>
                                    </Box>
                                    {/* <Box component={'div'} sx={{overflow: 'hidden', borderRadius: '50%', height: '50px', border: '5px solid greyText', my: 2}}>
                                        <img src={item.profile_photo} alt="" height={50} width={'100%'} style={{objectFit: 'contain'}}/>
                                    </Box> */}
                                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, mb: 1}}>
                                        <Avatar alt={item.profile_photo} src={item.profile_photo}/>
                                    </Box>
                                    <Typography variant='body1' textAlign={'center'}>{item.client_name}</Typography>
                                    <Typography variant='body2' textAlign={'center'}>{item.client_plan}</Typography>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
            </Wrapper>
        </>
    )
}

export default Testimonial