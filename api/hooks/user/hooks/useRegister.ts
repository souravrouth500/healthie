import { useMutation, MutationKey } from "@tanstack/react-query"
import { signUpMuation } from "../functions/user.api"
import { IFormInput } from "@/typescript/interface/common.interface"
import { toast } from "sonner";
import { setCookie } from "nookies";
import { CustomError } from "@/typescript/interface/apiresp.interfaces";

interface IRegisterResponse {
    data?: {
      data: any; // Adjust as per your response structure
      statusCode: number; // Adjust as per your response structure
      message: string; // Adjust as per your response structure
      token: string; // Adjust as per your response structure
    };
  }

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