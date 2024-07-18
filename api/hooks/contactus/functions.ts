import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { IgetSignUpQuery } from "@/typescript/interface/apiresp.interfaces";
import { IFormInput } from "@/typescript/interface/common.interface";

export const ContactMutation = async (body:IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.cms.contactUs,
        body
    );
    return res;
}