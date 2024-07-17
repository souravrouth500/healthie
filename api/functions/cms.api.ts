import { IgetSignUpQuery, PageContentData } from "@/typescript/interface/apiresp.interfaces"
import axiosInstance from "../axiosInstance"
import { endpoints } from "../endpoints"
import { IFormInput } from "@/typescript/interface/common.interface"


export const fetchPageContent = async () => {
    const res = await axiosInstance.get(
        endpoints.cms.pageContent
    )
    return res.data
}

export const ContactMutation = async (body:IFormInput) => {
    const res = await axiosInstance.post<IgetSignUpQuery>(
        endpoints.cms.contactUs,
        body
    );
    return res;
}