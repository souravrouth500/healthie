import { useMutation } from "@tanstack/react-query"
import { forgotPassword } from "../functions/user.api"
import { IFormInput } from "@/typescript/interface/common.interface"
import { toast } from "sonner"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"


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