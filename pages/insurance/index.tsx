import { Wrapper } from '@/layout/wrapper/wrapper';
import { IInsurancePlan, InsuranceOBj, State } from '@/typescript/interface/pages/insuranceList.interface';
import { Box, Button, Container, FormControl, Grid, InputLabel, NativeSelect, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import { useInsuranceCategories, useInsuranceList, useStateLists } from '@/api/hooks/insurance/hooks';
import { ICategory } from '@/typescript/interface/pages/insuranceDetail.interface';
import { useRouter } from 'next/router';
import { IInsuranceCategoryParams } from '@/typescript/interface/pages/InsuranceCategory.interface';

function Insurance() {

    const [insurancePlan, setInsurancePlan] = useState(0);
    const [selectedPlan, setSelectedPlan] = useState<IInsurancePlan | string | null | undefined>(null);
    const router = useRouter()
    // const { mutate, data, isPending, error } = useInsuranceList()
    const reqBody = {
        state_slug: router.query.state || null,
        category_slug: router.query.category || null,
        category_ids: null,
    };
    const { data: getInsuranceListRes, error } = useInsuranceList(reqBody)
    const { data: categoryRes } = useInsuranceCategories()
    const { data: getStateListsRes, } = useStateLists()

    // console.log(data?.data?.data?.insuranceList);
    const insuranceList = getInsuranceListRes?.data?.data?.insuranceList?.data;
    const insuranceCategoryList = categoryRes?.data?.data?.categories;
    const stateLists = getStateListsRes?.data?.data?.states

    const handleSetCategory = (e: any) => {

    }

    const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlan(event.target.value);
    };
    // console.log(insuranceList);
    console.log(stateLists);

    // console.log('index', insurancePlan);

    return (
        <>
            <Wrapper>
                <Container maxWidth={'lg'}>

                    {/* filters */}

                    <Box component={'div'} my={2}>
                        <Typography variant='h4' sx={{ borderLeft: '4px solid #3F51B5', pl: 1, color: '#303F9F', fontWeight: 'bold' }}>{`${insuranceList?.length} plans found`}</Typography>
                    </Box>

                    <Grid container maxWidth={'lg'}>
                        <Grid item xs={12} sm={9}>
                            <Grid container >
                                {
                                    insuranceList?.map((item: InsuranceOBj) => {
                                        return (
                                            <Grid item xs={12} key={item.insurance_name} py={2}>
                                                <Paper elevation={1} sx={{ borderRadius: '14px', letterSpacing: '1.5px', padding: '10px 8px' }}>
                                                    <Box display={'flex'} alignItems={'center'} gap={2} my={1}>
                                                        <img src={item?.company_logo_path} alt={item?.company_logo_path} style={{ height: 70, width: 70, objectFit: 'contain' }} />
                                                        <Box>
                                                            <Typography variant='h4' fontWeight={'bolder'} color={'#1A237E'}>{item?.insurance_name}</Typography>
                                                            <Typography variant='body2'>{item?.short_desc}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Stack direction={'row'} justifyContent={'space-between'} sx={{ px: { xs: 1, sm: '80px' } }}>

                                                        <Box>
                                                            <Typography variant='body1'>Benefits</Typography>
                                                            {
                                                                item?.plans[insurancePlan]?.benifit_array?.map((item, index) => {
                                                                    return (
                                                                        <Typography variant='body2' key={index} color={'black'} lineHeight={2}> <CheckIcon sx={{ fontSize: '12px', color: '#3F51B5', verticalAlign: 'middle' }} /> {item}</Typography>
                                                                    )
                                                                })
                                                            }

                                                        </Box>
                                                        <Stack justifyContent={'space-between'} spacing={2}>
                                                            <FormControl>
                                                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                                    Plans
                                                                </InputLabel>
                                                                <NativeSelect
                                                                    variant='outlined'
                                                                    // defaultValue={30}
                                                                    inputProps={{
                                                                        name: 'age',
                                                                        id: 'uncontrolled-native',
                                                                    }}
                                                                    onChange={handlePlanChange}
                                                                >
                                                                    {
                                                                        item?.plans?.map((plan: IInsurancePlan) => {
                                                                            return (
                                                                                <option value={plan.price} key={plan.id}><p style={{ color: 'black' }}>{`${plan.plan_name}`}</p></option>
                                                                                // <option value={plan.plan_name} key={plan.id}><p style={{ color: 'black' }}>{`${plan.plan_name}`}</p></option>
                                                                            )
                                                                        })
                                                                    }
                                                                </NativeSelect>
                                                            </FormControl>

                                                            <Link href={`/insurance/${item.id}`}><Button variant='contained' sx={{ bgcolor: '#303F9F', color: 'white' }}>View Features</Button></Link>
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={3} py={2} px={1} overflow={''}>
                            <Typography variant='h3' textAlign={'center'}>Category</Typography>
                            {
                                insuranceCategoryList?.map((category: ICategory) => {
                                    return (
                                        <Box component={'div'} key={category.id} sx={{ my: 2, px: 2, py: 1, border: '1px solid grey', borderRadius: '4px', textAlign: 'center', cursor: 'pointer' }} onClick={() => router.push(`${router.query.state ? `/insurance?state=${router.query.state}&category=${category.slug}` : `/insurance?category=${category.slug}`}`)}>
                                            <Typography variant='h3' color={'#303F9F'}>{category?.category_name}</Typography>
                                        </Box>
                                    )
                                })
                            }
                            {/* <Typography variant='h3' textAlign={'center'}>States</Typography> */}
                            {
                                stateLists?.map((state: State) => {
                                    return (
                                        // <Box component={'span'} key={state.id}>
                                            <Typography component={'span'} variant='body1' color={'#303F9F'} key={state.id} sx={{px: 1, py: 0.5, mx: 0.3, my: 0.5, border: '1px solid #80808030', borderRadius: '4px', display: 'inline-block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', cursor: 'pointer'}} onClick={() => router.push(`${router.query.category ? `/insurance?category=${router.query.category}&state=${state.slug}` : `/insurance?state=${state.slug}`}`)}>{state.state_name}</Typography>
                                        // {/* </Box> */}
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Wrapper>
        </>
    )
}

export default Insurance