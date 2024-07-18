import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addToCart, fetchCart, resetCart } from "./functions"
import { IAddToCart, IAddToCartResponse } from "@/typescript/interface/pages/addToCart.interface"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"
import { toast } from "sonner"



export const useAddtoCart = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['addToCart'],
        mutationFn: (body: IAddToCart) => addToCart(body),
        onSuccess: (res: IAddToCartResponse) => {
            console.log(res);
            toast.success(res?.message);
            queryClient.invalidateQueries({
                queryKey: ['fetchCart'],
            })
        },
        onError: (err: CustomError) => {
            console.log(err?.response?.data?.message);
            toast.error(err?.response?.data?.message)
        }
    })
}

export const useCart = () => {
    return useQuery({
        queryKey: ['fetchCart'],
        queryFn: () => fetchCart()
    })
}

export const useResetCart = () => {
    return useQuery({
        queryKey: ['resetCart'],
        queryFn: () => resetCart(),
    })
}