import axiosInstance from "@/api/axiosInstance"
import { endpoints } from "@/api/endpoints"
import { IPageContent } from "@/typescript/interface/pages/pageContent.interface"

export const fetchPageContent = async () => {
    const res = await axiosInstance.get<IPageContent>(
        endpoints.cms.pageContent
    )
    return res.data
}