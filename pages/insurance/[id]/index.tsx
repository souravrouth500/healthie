
import { useInsuranceDetails } from '@/api/hooks/insurance/hooks'
import CustomAccordions from '@/components/accordion'
import { Wrapper } from '@/layout/wrapper/wrapper'
import { IInsuranceDetails } from '@/typescript/interface/pages/insuranceDetail.interface'
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function InsuranceDetails() {

    const [insuranceDetails, setinsuranceDetails] = useState<IInsuranceDetails | null>(null)
    const router = useRouter()
    let { id } = router.query
    // let id;
    // id = Number(router?.query?.index)
    console.log(id);

    const { data, error } = useInsuranceDetails(Number(id))

    useEffect(() => {
        setinsuranceDetails(data?.data?.data?.insuranceDetails)
    }, [data])

    console.log(insuranceDetails);

    return (
        <>
            <Wrapper >
                <Container maxWidth={'lg'} sx={{ my: 2 }}>
                    <Typography variant='h2' fontWeight={'bolder'} my={2}>Plan Features</Typography>
                    <Grid container>

                        <Grid item xs={12} >
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Box component={'div'} sx={{ px: 2, py: 1, border: '1px solid #80808030', borderRadius: '7px', display: 'inline-block' }}>
                                    <img src={insuranceDetails?.company_logo_path} alt={insuranceDetails?.company_logo_path} height={70} width={80} style={{ objectFit: 'contain' }} />
                                </Box>
                                <Box>
                                    <Typography component={'h6'} variant='h3' fontWeight={'bolder'}>{insuranceDetails?.insurance_name}</Typography>
                                    <Typography variant='caption'>{insuranceDetails?.short_desc}</Typography>
                                </Box>
                            </Stack>
                            <Divider />
                            <Box my={2}>
                            <Typography variant='h3'>Benefits</Typography>
                            <ul>
                            {
                                insuranceDetails?.benifit_array?.map((item, index) => {
                                    return (
                                        <li key={index}><Typography component={'h5'} variant='body2'>{item}</Typography></li>
                                    )
                                })
                            }
                            </ul>
                            </Box>
                            <Box>
                                <Typography component={'h2'} variant='h4' my={2} fontWeight={'bolder'}>Our Plans</Typography>
                                {insuranceDetails && <CustomAccordions data={insuranceDetails?.plans} />}
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Wrapper>
        </>
    )
}

export default InsuranceDetails