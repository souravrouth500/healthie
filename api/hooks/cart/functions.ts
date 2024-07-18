import axiosInstance from "@/api/axiosInstance"
import { endpoints } from "@/api/endpoints"
import { IAddToCart } from "@/typescript/interface/pages/addToCart.interface"


export const addToCart = async (body: IAddToCart) => {
    const res = await axiosInstance.post(
        endpoints.cms.addToCart,
        body
    )
    return res.data;
}

export const fetchCart = async () => {
    const res = await axiosInstance.get(
        endpoints.cms.cart
    )
    return res;
}

export const resetCart = async () => {
    const res = await axiosInstance.post(
        endpoints.cms.resetCart
    )
    return res
}