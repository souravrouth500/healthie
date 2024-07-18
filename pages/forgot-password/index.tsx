import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Wrapper } from '@/layout/wrapper/wrapper';

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from '@/typescript/interface/common.interface';
import { useMutation } from '@tanstack/react-query';
import { userSchema } from '@/lib/yup/validationSchema';
import { toast } from 'sonner';
import { CustomError } from '@/typescript/interface/apiresp.interfaces';
import { forgotPassword, loginMutation } from '@/api/functions/user.api';
import { setCookie } from 'nookies';
import { useAppDispatch } from '@/api/redux/useAppDispatch';
import { setLoginData } from '@/redux-toolkit/slices/userSlice';
import { useRouter } from 'next/router';
import { useForgotPassword } from '@/api/hooks/user/hooks';

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

function ForgotPassword() {

    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const router = useRouter()

    // const {mutate, data: successRes, error: errRes} = useMutation({
    //     mutationFn: (body: IFormInput) => forgotPassword(body),
    //     onSuccess: (res) => {
    //         toast.success(res?.data?.message)
    //         router.push('/reset-password')
    //     },
    //     onError: (err: CustomError) => {
    //         toast.error(err?.response?.data?.message)
    //     }
    // })

    const forgotPasswordMutation = useForgotPassword()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        forgotPasswordMutation.mutate(data);
    }

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

                            <TextField
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

export default ForgotPassword