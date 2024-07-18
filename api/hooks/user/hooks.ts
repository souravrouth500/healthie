import { useMutation, useQuery } from "@tanstack/react-query"
import { IFormInput } from "@/typescript/interface/common.interface"
import { toast } from "sonner"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"
import { forgotPassword, getProfileDetails, resetPassword, signInMutation, signUpMuation, updateProfile } from "./functions"
import { setCookie } from "nookies"
import { useAppDispatch } from "@/api/redux/useAppDispatch"
import { useRouter } from "next/router"
import { setLoginData } from "@/redux-toolkit/slices/userSlice"

export const useRegister = () => {

    const mutation = useMutation({
        mutationKey: ['userRegister'],
        mutationFn: (body:IFormInput) => signUpMuation(body),
        onSuccess: (response) => {
            console.log(response);
            if (response?.data) {
            //   setLoginData(response.data.data); // Assuming setLoginData updates Redux state
              toast.success(response.data.message); // Display success message
              setCookie(null, 'token', response.data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
              }); // Set cookie for token
              // Additional logic can be added here
            }
          },
          onError: (error: CustomError) => {
            console.error('Login mutation error:', error);
            // Handle error logic as needed
            toast.error(error?.response?.data?.message)
          },
    })

    return mutation
}

export const useLogin = () => {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const mutation = useMutation({
        mutationKey: ['userLogin'],
        mutationFn: (body:IFormInput) => signInMutation(body),
        onSuccess: (response) => {
            console.log(response);
            if (response?.data) {
              dispatch(setLoginData(response.data.data)); // Assuming setLoginData updates Redux state
              toast.success(response.data.message); // Display success message
              setCookie(null, process.env.NEXT_PUBLIC_TOKEN_NAME!, response.data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
              }); // Set cookie for token
              // Additional logic can be added here
              // window.location.href = '/'
              router.push('/')
            }
          },
          onError: (error: CustomError) => {
            console.error('Login mutation error:', error);
            // Handle error logic as needed
            toast.error(error?.response?.data?.message)
          },
    })

    return mutation
}

export const useForgotPassword = () => {

    const mutation = useMutation({
        mutationKey: ['forgotPassword'],
        mutationFn: (body: IFormInput) => forgotPassword(body),
        onSuccess: (res) => {
            toast.success(res?.data?.message)
            window.location.href = '/reset-password'
        },
        onError: (err: CustomError) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return mutation
}

export const useResetPassword = () => {

    const mutation = useMutation({
        mutationKey: ['resetPassword'],
        mutationFn: (body:IFormInput) => resetPassword(body),
        onSuccess: (res) => {
            toast.success(res?.data?.message)
            window.location.href = '/auth/login'
        },
        onError: (err: CustomError) => {
            toast.error(err?.response?.data?.message)
        }
    })

    return mutation
}

export const useUpdateProfile = () => {
    const mutation = useMutation({
        mutationKey: ['updateProfile'],
        mutationFn: (body:IFormInput) => updateProfile(body),
        onSuccess: (res) => {
            toast.success(res?.data?.message)
        },
        onError: (error: CustomError) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return mutation
}

export const useUser = () => {

    const mutation = useQuery({
        queryKey: ['get-profile'],
        queryFn: () => getProfileDetails()
    })

    return mutation
}