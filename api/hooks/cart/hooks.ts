import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { FetchSessionCart, addToCart, fetchCart, removeItemFromCart, resetCart, sessionAddToCart } from "./functions"
import { IAddToCart, IAddToCartResponse, SessionAddToCart } from "@/typescript/interface/pages/addToCart.interface"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"
import { toast } from "sonner"
import { parseCookies, setCookie } from "nookies"



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

    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['resetCart'],
        mutationFn: () => resetCart(),
        onSuccess: (res) => {
            // console.log("agswrghar",res);
            toast.success(res?.data?.message)
            queryClient.invalidateQueries({
                queryKey: ['fetchCart'],
              })
        },
        onError: (err: CustomError) => {
            console.log(err);
            toast.error(err?.response?.data?.message)
        }
    })
    // return useQuery({
    //     queryKey: ['resetCart'],
    //     queryFn: () => resetCart(),
    // })
}

export const useRemoveFromCart = () => {
    
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['removeFromCart'],
        mutationFn: (id: string) => removeItemFromCart(id),
        onSuccess: (res) => {
            console.log("bsffh",res);
            toast.success(res?.data?.message);
            queryClient.invalidateQueries({
                queryKey: ['fetchCart'],
              })
        },
        onError: (err: CustomError) => {
            console.log(err);
            toast.error(err?.response?.data?.message)
        }
    })
}

export const useSessionCart = (sessionId: string) => {
    return useQuery({
        queryKey: ['fetchSessionCart', sessionId],
        queryFn: () => FetchSessionCart(sessionId)
    })
}

export const useSessionAddtoCart = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['sessionAddToCart'],
        mutationFn: (body: IAddToCart) => sessionAddToCart(body),
        onSuccess: (res: SessionAddToCart) => {
            console.log(res?.data.sessionId);
            toast.success(res?.message);
            const cookies = parseCookies()
            if(!cookies[process.env.NEXT_PUBLIC_SESSIONID_NAME!]){
                setCookie(null, process.env.NEXT_PUBLIC_SESSIONID_NAME!, res?.data.sessionId)
            }
            // queryClient.invalidateQueries({
            //     queryKey: ['fetchSessionCart',res?.data.sessionId],
            // })
            FetchSessionCart(res?.data.sessionId)
        },
        onError: (err: CustomError) => {
            console.log(err?.response?.data?.message);
            toast.error(err?.response?.data?.message)
        }
    })
}