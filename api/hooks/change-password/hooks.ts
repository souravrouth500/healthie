import { useMutation } from "@tanstack/react-query"
import { changePassword } from "./functions"
import { ChangePassword } from "@/typescript/interface/pages/changePassword.interface"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"
import { toast } from "sonner"

export const useChangePassword = () => {
    return useMutation({
        mutationKey: ['chnage-password'],
        mutationFn: (body: ChangePassword) => changePassword(body),
        onSuccess: (res) => {
            console.log(res);
            toast.success(res?.data?.message)
        },
        onError: (err: CustomError) => {
            console.log(err);
            toast.error(err?.response?.data?.message)
        }
    })
}