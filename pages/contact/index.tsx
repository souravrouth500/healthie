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
import { ContactMutation } from '@/api/functions/cms.api'
import { useMutation } from '@tanstack/react-query'
import { Wrapper } from '@/layout/wrapper/wrapper';
import { useForm } from 'react-hook-form';
import { IFormInput } from '@/typescript/interface/common.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/lib/yup/validationSchema';
import { toast } from 'sonner';
import { CustomError } from '@/typescript/interface/apiresp.interfaces';
import { useContact } from '@/api/hooks/cms/hooks/useContact';

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

function ContactUs() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactSchema)
    })

    // const { mutate, data, error } = useMutation({
    //     mutationFn: (body: IFormInput) => ContactMutation(body),
    //     onSuccess: (res) => {
    //         console.log(res);
    //         toast.success(res?.data?.message)
    //     },
    //     onError: (err: CustomError) => {
    //         console.log("error", err);
    //         toast.error(err?.response?.data?.message)
    //     }
    // })

    const contactUsMutation = useContact()

    const onSubmit = (data: IFormInput) => {
        contactUsMutation.mutate(data)
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

                            <Typography variant="h5">
                                Contact Us
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='first_name'
                                    id="first_name"
                                    label="First Name"
                                    // name="first_name"
                                    autoComplete="first_name"
                                    autoFocus
                                    {...register('firstname')}
                                    helperText={errors.firstname?.message}
                                    FormHelperTextProps={{
                                        style: {
                                            color: 'red',
                                            fontSize: "12px"
                                        }
                                    }}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='last_name'
                                    id="last_name"
                                    label="Last Name"
                                    // name="last_name"
                                    autoComplete="last_name"
                                    autoFocus
                                    {...register('lastname')}
                                    helperText={errors.lastname?.message}
                                    FormHelperTextProps={{
                                        style: {
                                            color: 'red',
                                            fontSize: "12px"
                                        }
                                    }}
                                />

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
                                    helperText={errors.email?.message}
                                    FormHelperTextProps={{
                                        style: {
                                            color: 'red',
                                            fontSize: "12px"
                                        }
                                    }}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='subject'
                                    id="subject"
                                    label="Subject"
                                    // name="subject"
                                    autoComplete="subject"
                                    autoFocus
                                    {...register('subject')}
                                    helperText={errors.subject?.message}
                                    FormHelperTextProps={{
                                        style: {
                                            color: 'red',
                                            fontSize: "12px"
                                        }
                                    }}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='message'
                                    id="message"
                                    label="Message"
                                    // name="message"
                                    autoComplete="message"
                                    autoFocus
                                    {...register('message')}
                                    helperText={errors.message?.message}
                                    FormHelperTextProps={{
                                        style: {
                                            color: 'red',
                                            fontSize: "12px"
                                        }
                                    }}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Container>
                </ThemeProvider>
            </Wrapper>
        </>
    )
}

export default ContactUs