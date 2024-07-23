import axiosInstance from "@/api/axiosInstance"
import { endpoints } from "@/api/endpoints"
import { ChangePassword } from "@/typescript/interface/pages/changePassword.interface";


export const changePassword = async (body: ChangePassword) => {
    const res = await axiosInstance.post(
        endpoints.auth.passwordUpdate,
        body
    )
    return res;
}