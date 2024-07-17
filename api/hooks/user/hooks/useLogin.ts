import { useMutation } from "@tanstack/react-query"
import { signInMutation, signUpMuation } from "../functions/user.api"
import { IFormInput } from "@/typescript/interface/common.interface"
import { toast } from "sonner";
import { setCookie } from "nookies";
import { CustomError } from "@/typescript/interface/apiresp.interfaces";
import { setLoginData } from "@/redux-toolkit/slices/userSlice";
import { useAppDispatch } from "@/api/redux/useAppDispatch";
import { useRouter } from "next/router";

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