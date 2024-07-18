import { IFormInput, IProfileDetails } from "@/typescript/interface/common.interface";
import { IgetSignUpQuery } from "@/typescript/interface/apiresp.interfaces";
import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";


export const signUpMuation = async (body: IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.signup,
        body
    );
    return res;
}

export const signInMutation = async (body: IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.login,
        body
    );
    return res;
}

export const getProfileDetails = async () => {
    const res = await axiosInstance.get<IProfileDetails>(
        endpoints.auth.profileDetails
    );
    return res?.data;
}

export const forgotPassword = async (body: IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.forgotPassword,
        body
    );
    return res;
}

export const resetPassword = async (body: IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.passwordReset,
        body
    );
    return res;
}

export const updateProfile = async (body: IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.profileUpdate,
        body
    );
    return res;
}

export const updatePassword = async (body:IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.passwordUpdate,
        body
    );
    return res
}