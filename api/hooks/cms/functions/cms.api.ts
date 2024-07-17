import axiosInstance from "@/api/axiosInstance"
import { endpoints } from "@/api/endpoints"
import { IgetSignUpQuery, PageContentData } from "@/typescript/interface/apiresp.interfaces"
import { IFormInput } from "@/typescript/interface/common.interface"
import { IInsurance } from "@/typescript/interface/pages/insuranceList.interface"
import { IPageContent } from "@/typescript/interface/pages/pageContent.interface"
import { ITestimonial } from "@/typescript/interface/pages/testimonials"


export const fetchPageContent = async () => {
    const res = await axiosInstance.get<IPageContent>(
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

export const fetchTestimonials = async () => {
    const res = await axiosInstance.get<ITestimonial>(
        endpoints.cms.testimoniallist,
    )
    return res
}

export const fetchInsuranceList = async () => {
    const res = await axiosInstance.post<IInsurance>(
        endpoints.cms.insuranceList
    )
    return res
}

export const fetchInsuranceDetails = async (id: number) => {
    const res = await axiosInstance.get(
        `insurance/${id}`
    )
    return res;
}