import axiosInstance from "@/api/axiosInstance"
import { endpoints } from "@/api/endpoints"
import { ITestimonial } from "@/typescript/interface/pages/testimonials"

export const fetchTestimonials = async () => {
    const res = await axiosInstance.get<ITestimonial>(
        endpoints.cms.testimoniallist,
    )
    return res
}