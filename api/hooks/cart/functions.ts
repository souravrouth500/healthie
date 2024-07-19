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
        endpoints.cms.resetCart,
        {}
    )
    return res
}

export const removeItemFromCart = async (id: string) => {
    const res = await axiosInstance.post(
        endpoints.cms.removeFromCart,
        { cartId: id }
    )
    return res;
}

export const sessionAddToCart = async (body: IAddToCart) => {
    const res = await axiosInstance.post(
        endpoints.cms.sessionAddToCart,
        body
    )
    return res.data;
}

export const FetchSessionCart = async (sessionId: string) => {
    const res = await axiosInstance.get(
        `${endpoints.cms.sessionCart}?uuid=${sessionId}`,
        )
    return res;
}

export const sessionRemoveCart = async (id: string) => {
    const res = await axiosInstance.post(
        endpoints.cms.removeFromCart,
        { cartId: id }
    )
    return res;
}