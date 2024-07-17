import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput } from '@/typescript/interface/common.interface';
import { Wrapper } from '@/layout/wrapper/wrapper';
import { useAppDispatch } from '@/api/redux/useAppDispatch';
import { useLogin } from '@/api/hooks/user/hooks/useLogin';
import { LoadingButton } from '@mui/lab';




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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {

    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // const { mutate, data: signUpRes, error: signUpErr } = useMutation({
    //     mutationFn: (body: IFormInput) => loginMutation(body),
    //     onSuccess: (res) => {
    //         console.log(res);
    //         dispatch(setLoginData(res?.data?.data))
    //         setCookie(null, "user", JSON.stringify(res?.data?.data))
    //         setCookie(null, process.env.NEXT_PUBLIC_TOKEN_NAME!, res?.data?.token)
    //         toast.success(res?.data?.message)
    //     },
    //     onError: (err: CustomError) => {
    //         console.log("error", err);
    //         toast.error(err?.response?.data?.message)
    //     }
    // })

    // if (signUpErr) {
    //     console.log(signUpErr);
    // }
    // console.log(signUpRes);

    const loginMutation = useLogin()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        loginMutation.mutate(data);
    }




    return (
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

                        <Typography component={'h4'} variant="h4">
                            Sign In
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

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {loginMutation.isPending ? <LoadingButton loading loadingPosition='center' sx={{ '& .MuiCircularProgress-root': { color: 'white', height: '30px' } }} /> : 'Sign In'}
                            </Button>

                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </Wrapper>
    );
}