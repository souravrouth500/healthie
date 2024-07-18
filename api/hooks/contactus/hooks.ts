import { useMutation } from "@tanstack/react-query";
import { ContactMutation } from "./functions";
import { IFormInput } from "@/typescript/interface/common.interface";
import { CustomError } from "@/typescript/interface/apiresp.interfaces";
import { toast } from "sonner";

export const useContact = () => {

    const mutation = useMutation({
        mutationKey: ['contact'],
        mutationFn: (body:IFormInput) => ContactMutation(body),
        onSuccess: (res) => {
            console.log(res);
            toast.success(res?.data?.message)
        },
        onError: (err: CustomError) => {
            console.log("error", err);
            toast.error(err?.response?.data?.message)
        }
    })

    return mutation
}