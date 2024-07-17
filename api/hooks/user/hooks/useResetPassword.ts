import { IFormInput } from "@/typescript/interface/common.interface"
import { useMutation } from "@tanstack/react-query"
import { resetPassword } from "../functions/user.api"
import { toast } from "sonner"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"


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