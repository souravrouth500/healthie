import { fetchPageContent } from '@/api/functions/cms.api'
import { Wrapper } from '@/layout/wrapper/wrapper';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AboutusTeamDetail, DetailedBenifit, Usp } from '@/typescript/interface/apiresp.interfaces';
import { usePageContent } from '@/api/hooks/cms/hooks/usePageContent';
import Loading from '@/components/loading';


function Home() {

    // const { data, error } = useQuery({
    //     queryKey: ['fetchPageContents'],
    //     queryFn: () => fetchPageContent()
    // })

    const {data, isPending, error} = usePageContent();

    if(isPending) {
        return <Box sx={{height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Loading /></Box>
    }

    // console.log(data?.data.pageContents);

    return (
        <>
            <Box sx={{ background: "linear-gradient(270deg,#559af3,#1462f3,#559af3)", color: 'white', display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', p: 1, }}>
                <Stack spacing={2} direction={'row'}>
                    <img src={data?.data.pageContents.logo} alt="" width={100} />
                    <Box>
                        <EmailIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                        <Typography variant='body1' sx={{ display: "inline", color: 'white' }}>{data?.data?.pageContents?.email_address}</Typography>
                    </Box>
                    <Box>
                        <LocationOnIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                        <Typography variant='body1' sx={{ display: "inline", color: 'white' }}>{data?.data?.pageContents?.address}</Typography>
                    </Box>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                    <Box >
                        <FacebookIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                        <InstagramIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                        <XIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                        <LinkedInIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                    </Box>
                    <Box >
                        <CallIcon sx={{ display: "inline", verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />
                        <Typography variant='body1' sx={{ display: "inline", color: 'white' }}>Call US: {data?.data?.pageContents?.call_now}</Typography>
                    </Box>
                </Stack>
            </Box>
            <Wrapper>
                <Container maxWidth={'xl'}>
                    <Typography variant='h3'>{data?.data?.pageContents?.main_headline}</Typography>
                    <Typography variant='h5'>{data?.data?.pageContents?.sub_headline}</Typography>
                    <Box sx={{ height: '70vh', bgcolor: '#fdfded' }}>
                        <img src={data?.data?.pageContents?.introduction_heading_image} alt="" width={'100%'} height={'100%'} style={{ objectFit: "contain" }} />
                    </Box>

                    {/* USP section */}
                    <Grid container maxWidth={'xl'} py={2} sx={{ mt: {sm: '0', md: -12}}}>
                        {/* <Grid item xs={12}>
                            <Typography variant='h2' textAlign={'center'} fontWeight={'bold'} my={1}>Why Choose Us ?</Typography>
                        </Grid> */}
                        {
                            data?.data?.usps.map((item: Usp) => {
                                return (
                                    <Grid item xs={12} sm={4} px={2} py={1} key={item.title}>
                                        <Card elevation={0}>
                                            <CardMedia
                                                component={'img'}
                                                image={item.photo}
                                                height={200}
                                                sx={{ width: '100px', objectFit: "contain", mx: "auto" }}
                                            />
                                            <CardContent>
                                                <Typography variant='h6'>{item.title}</Typography>
                                                <Typography variant='body2'>{item.description.length > 165 ? `${item.description.slice(0, 165)}...` : item.description}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    {/* USP Section */}

                    {/* who we are */}

                    <Box >
                        <Typography variant='h2' textAlign={'center'} fontWeight={'bold'} my={1}>Who We Are ?</Typography>
                        <div style={{ position: "relative" }}>
                            <img src={data?.data?.pageContents?.who_we_are_image} alt="" width={'100%'} height={500} style={{ objectFit: "contain", position: 'relative', left: '-250px' }} />
                            <div style={{ position: 'absolute', top: '100px', right: '0', width: '50%' }}>
                                <Typography variant='h3'>{data?.data?.pageContents?.who_we_are}</Typography>
                            </div>
                        </div>
                    </Box>

                    {/* who we are */}

                    {/* detailedBenifits */}

                    <Grid container maxWidth={'xl'} py={2}>
                        <Grid item xs={12}>
                            <Typography variant='h2' textAlign={'center'} fontWeight={'bold'} my={1}>Services We Offer</Typography>
                        </Grid>
                        {
                            data?.data?.detailedBenifits?.map((item: DetailedBenifit) => {
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={item.title} p={1}>
                                        <Card elevation={0}>
                                            <CardMedia
                                                component={'img'}
                                                image={item.photo}
                                                height={300}
                                                sx={{ width: '100%', objectFit: "contain", mx: "auto" }}
                                            />
                                            <CardContent>
                                                <Typography variant='h5' color={'#1A237E'}>{item?.title}</Typography>
                                                {/* <Typography variant='body2'>{item?.description?.length > 165 ? `${item?.description?.slice(0, 165)}...` : item?.description }</Typography> */}
                                                <ul style={{ paddingLeft: '5px' }}>
                                                    {
                                                        item?.benifit_array?.map((benefit) => {
                                                            return (
                                                                <li key={benefit}><Typography variant='body2'>{benefit}</Typography></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                    {/* detailedBenifits */}

                    {/* About us team */}

                    <Grid container maxWidth={'md'} mx={'auto'} py={2}>
                        <Grid item xs={12}>
                            <Typography variant='h2' textAlign={'center'} fontWeight={'bold'} my={1}>Our Team</Typography>
                        </Grid>

                        {
                            data?.data?.aboutusTeamDetails?.slice(0, 6)?.map((item: AboutusTeamDetail) => {
                                return (
                                    <Grid item xs={12} sm={4} key={item.name} px={2} py={1}>
                                        <Card elevation={0} sx={{
                                            '&:hover .MuiCardMedia-root': {
                                                transform: 'scale(1.1)',
                                            },
                                        }}>
                                            <div style={{ overflow: 'hidden' }}>
                                                <CardMedia
                                                    component={'img'}
                                                    image={item.profile_photo_path}
                                                    height={340}
                                                    sx={{
                                                        width: '100%',
                                                        objectFit: 'cover',
                                                        transition: 'transform 0.3s ease-in-out',
                                                    }}
                                                />
                                            </div>
                                            <CardContent sx={{ position: 'relative' }}>
                                                <div className='socialLinks' style={{ color: '#3F51B5', margin: "14px 0" }}>
                                                    <Stack direction={'row'} spacing={3} justifyContent={'center'}>
                                                        <FacebookIcon sx={{ cursor: 'pointer', '&:hover': { color: '#1A237E' } }} />
                                                        <InstagramIcon sx={{ cursor: 'pointer', '&:hover': { color: '#1A237E' } }} />
                                                        <XIcon sx={{ cursor: 'pointer', '&:hover': { color: '#1A237E' } }} />
                                                        <LinkedInIcon sx={{ cursor: 'pointer', '&:hover': { color: '#1A237E' } }} />
                                                    </Stack>
                                                </div>
                                                <Typography variant='body1' color={'#1A237E'} textAlign={'center'}>{item?.name}</Typography>
                                                <Typography variant='body2' textAlign={'center'}>{item.designation}</Typography>

                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }

                    </Grid>

                    {/* About us team */}

                    {/* Contact us */}

                    <Box component={'div'} maxWidth={'md'} minHeight={300} height={300} py={1} my={2} mx={'auto'} sx={{ position: 'relative', bgcolor: '#3949AB', overflow: 'hidden' }}>
                        <img src={data?.data?.pageContents?.contact_a_licensed_agent_image} alt="" height={'100%'} />
                        <Box sx={{ position: 'absolute', top: '50%', right: 20, color: 'white' }}>
                            <Typography variant='body1' sx={{ color: 'white', fontWeight: 'bold' }}>Got a question? </Typography>
                            <Typography variant='body1' sx={{ display: "inline", color: 'white', fontWeight: 'bold' }}>Call US: <CallIcon sx={{ verticalAlign: "middle", fontSize: '18px', marginRight: '5px' }} />{data?.data?.pageContents?.call_now}</Typography>
                            <br /><Button variant='contained' sx={{
                                bgcolor: 'yellow',
                                borderRadius: '8px',
                                '&:hover': {
                                    bgcolor: 'indigo.700',
                                    borderRadius: '8px'
                                }
                            }}>
                                Contact Us
                            </Button>

                        </Box>
                    </Box>
                    {/* Contact Us */}
                </Container>
            </Wrapper>
        </>
    )
}

export default Home