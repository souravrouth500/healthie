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

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from '@/typescript/interface/common.interface';
import { userSchema } from '@/lib/yup/validationSchema';
import { Wrapper } from '@/layout/wrapper/wrapper';
import { LoadingButton } from '@mui/lab';
import { useRegister } from '@/api/hooks/user/hooks';


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

export default function RegisterPage() {

  const [showPassword, setShowPassword] = React.useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(userSchema)
  })

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const {mutate, data: signUpRes, error: signUpErr} = useMutation({
  //   mutationFn: (body:IFormInput) => signUpMuation(body),
  //   onSuccess: (res) => {
  //     console.log(res);
  //     toast.success(res?.data?.message)
  //   },
  //   onError: (err: CustomError) => {
  //     console.log("error",err);
  //     toast.error(err?.response?.data?.message)
  //   }
  // })


  // if(signUpErr) {
  //   console.log(signUpErr);
  // }
  // console.log(signUpRes);

  const registerMutation = useRegister()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    registerMutation.mutate(data);
  }

  console.log(registerMutation.isPending);
  



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
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

              <TextField
              error={!!errors.first_name}
              color={!errors.first_name ? 'success' : 'error'}
                margin="normal"
                required
                fullWidth
                variant="outlined"
                id="first_name"
                label="First Name"
                // name="first_name"
                autoComplete="first_name"
                autoFocus
                {...register('first_name')}
                // helperText={errors.first_name?.type === "required" && 'Please enter first name'}
                helperText={errors.first_name && 'First Name is required'}
                FormHelperTextProps={{
                  style: {
                    color: 'red',
                    fontSize: "12px"
                  }
                }}
                sx={{}}
              />

              <TextField
              error={!!errors.last_name}
              color={!errors.last_name ? 'success' : 'error'}
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                // name="last_name"
                autoComplete="last_name"
                autoFocus
                {...register('last_name')}
                helperText={errors.last_name && 'Last Name is required'}
                FormHelperTextProps={{
                  style: {
                    color: 'red',
                    fontSize: "12px"
                  }
                }}
              />

              <TextField
              error={!!errors.email}
              color={!errors.email ? 'success' : 'error'}
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
              error={!!errors.phone}
              color={!errors.phone ? 'success' : 'error'}
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                // name="phone"
                autoComplete="phone"
                autoFocus
                {...register('phone')}
                helperText={errors.phone?.message}
                FormHelperTextProps={{
                  style: {
                    color: 'red',
                    fontSize: "12px"
                  }
                }}
              />

              <TextField
              error={!!errors.password}
              color={!errors.password ? 'success' : 'error'}
                margin="normal"
                variant='outlined'
                required
                fullWidth
                // name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                  ),
                }}
                {...register('password')}
                helperText={errors.password?.message}
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
                error={!!errors.confirm_password}
                color={!errors.confirm_password ? 'success' : 'error'}
                // name="confirm_password"
                label="Confirm Password"
                type="confirm_password"
                id="confirm_password"
                autoComplete="current-confirm_password"
                // className={errors.password && validationClass.errorInput}
                {...register('confirm_password')}
                helperText={errors.confirm_password?.message}
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
                {registerMutation.isPending ? <LoadingButton loading loadingPosition='center' sx={{ '& .MuiCircularProgress-root': { color: 'white', height: '30px' } }} /> : 'Sign Up'}
              </Button>

            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Wrapper>
  );
}