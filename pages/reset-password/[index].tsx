import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Wrapper } from '@/layout/wrapper/wrapper';

import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput } from '@/typescript/interface/common.interface';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CustomError } from '@/typescript/interface/apiresp.interfaces';
import { forgotPassword, loginMutation, resetPassword } from '@/api/functions/user.api';
import { useAppDispatch } from '@/api/redux/useAppDispatch';
import { useRouter } from 'next/router';
import { useResetPassword } from '@/api/hooks/user/hooks/useResetPassword';
import { useSearchParams } from 'next/navigation';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const defaultTheme = createTheme();

function ResetPassword() {

    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const router = useRouter()
    const params = router.query.index
    // const params = useSearchParams()

    let token:string, email:string;
    if(typeof params === "string") {
        token = params.split('&')[0].split('=')[1];

        email = params.split('&')[1].split('=')[1];
    }
    
    // console.log(params);
    
    // let token:string, email:string;
    // if(params){
    //     const token = params.get('token')
    //     const email = params.get('email')
    // }


    // const { mutate, data: successRes, error: errRes } = useMutation({
    //     mutationFn: (body: IFormInput) => resetPassword(body),
    //     onSuccess: (res) => {
    //         toast.success(res?.data?.message)
    //         router.push('/auth/login')
    //     },
    //     onError: (err: CustomError) => {
    //         toast.error(err?.response?.data?.message)
    //     }
    // })

    const resetPasswordMutation = useResetPassword()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        const formdata = {...data, token: token, email: email}
        resetPasswordMutation.mutate(formdata);
    }

    console.log(params);


    return (
        <>
            <Wrapper>
                <ThemeProvider theme={defaultTheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
                            <Typography component="h1" variant="h5">
                                Reset Password
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

                                {/* <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='email'
                                    id="email"
                                    label="Email Address"
                                    // name="email"
                                    autoComplete="email"
                                    autoFocus
                                    {...register('email')}
                                /> */}

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    // name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    {...register('password')}
                                />

                                {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Submit
                                </Button>
                                {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </ThemeProvider>
            </Wrapper>
        </>
    )
}

export default ResetPassword