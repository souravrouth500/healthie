import { useMutation } from "@tanstack/react-query"
import { updateProfile } from "../functions/user.api"
import { IFormInput } from "@/typescript/interface/common.interface"
import { toast } from "sonner"
import { error } from "console"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"


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