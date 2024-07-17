import { IFormInput, IProfileDetails } from "@/typescript/interface/common.interface";
import axiosInstance from "../axiosInstance";
import { IgetSignUpQuery } from "@/typescript/interface/apiresp.interfaces";
import { endpoints } from "../endpoints";


export const signUpMuation = async (body: IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.auth.signup,
        body
    );
    return res;
}

export const loginMutation = async (body: IFormInput) => {
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
    return res;
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