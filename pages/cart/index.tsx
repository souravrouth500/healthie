import { useCart, useResetCart } from '@/api/hooks/cart/hooks'
import { Wrapper } from '@/layout/wrapper/wrapper';
import { InsuranceOBj } from '@/typescript/interface/pages/insuranceList.interface';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useQueryClient } from '@tanstack/react-query';
import { resetCart } from '@/api/hooks/cart/functions';

function Cart() {

  const [cartData, setCartData] = useState<InsuranceOBj[] | null>(null);
  const [insurancePlan, setInsurancePlan] = useState(0);
  const queryClient = useQueryClient ()

  const { data: cartRes } = useCart()
  const handleResetCart = () => {
    resetCart()
    queryClient.invalidateQueries({
      queryKey: ['fetchCart'],
    })
  }

  console.log("ac", cartRes);
  
  console.log("cartdata",cartData);

  useEffect(() => {
    setCartData(cartRes?.data?.data?.userCarts)
  }, [cartRes])

  return (
    <div>
      <Wrapper>
                <Container maxWidth={'lg'}>

                    {/* filters */}

                    {/* <Box component={'div'} my={2}>
                        <Typography variant='h4' sx={{ borderLeft: '4px solid #3F51B5', pl: 1, color: '#303F9F', fontWeight: 'bold' }}>{`${insuranceList?.length} plans found`}</Typography>
                    </Box> */}

                            <Grid container >
                                {
                                    cartData?.map((item: any) => {
                                        return (
                                            <Grid item xs={12} key={item.insurance_name} py={2}>
                                                <Paper elevation={1} sx={{ borderRadius: '14px', letterSpacing: '1.5px', padding: '10px 8px', position: 'relative' }}>
                                                  <Button sx={{position: 'absolute', top: 10, right: 2, borderRadius: '50%'}}><ClearIcon /></Button>
                                                    <Box display={'flex'} alignItems={'center'} gap={2} my={1}>
                                                        <img src={item?.insurance?.company_logo_path} alt={item?.company_logo_path} style={{ height: 70, width: 70, objectFit: 'contain' }} />
                                                        <Box>
                                                            <Typography variant='h4' fontWeight={'bolder'} color={'#1A237E'}>{item?.insurance?.insurance_name}</Typography>
                                                            <Typography variant='body2'>{item?.insurance?.short_desc}</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Stack direction={'row'} justifyContent={'space-between'} sx={{ px: { xs: 1, sm: '80px' } }}>

                                                        <Box>
                                                            <Typography variant='body1'>Benefits</Typography>
                                                            {
                                                                item?.insurance_plan?.benifit_array?.map((item: string, index: number) => {
                                                                    return (
                                                                        <Typography variant='body2' key={index} color={'black'} lineHeight={2}> <CheckIcon sx={{ fontSize: '12px', color: '#3F51B5', verticalAlign: 'middle' }} /> {item}</Typography>
                                                                    )
                                                                })
                                                            }
                                                        </Box>
                                                    </Stack>
                                                </Paper>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>

                            <Button variant='contained' onClick={() => handleResetCart()}>Clear Cart</Button>
                </Container>
            </Wrapper>
    </div>
  )
}

export default Cart