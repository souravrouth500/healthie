import axiosInstance from "@/api/axiosInstance"
import { endpoints } from "@/api/endpoints"
import { IInsuranceCategoryParams } from "@/typescript/interface/pages/InsuranceCategory.interface"
import { IInsurance } from "@/typescript/interface/pages/insuranceList.interface"

export const fetchInsuranceList = async (body: IInsuranceCategoryParams) => {
    const res = await axiosInstance.post<IInsurance>(
        endpoints.cms.insuranceList,
        body
    )
    return res
}

export const fetchInsuranceDetails = async (id: number) => {
    const res = await axiosInstance.get(
        `insurance/${id}`
    )
    return res;
}

export const fetchInsuranceCategories = async () => {
    const res = await axiosInstance.get(
        endpoints.cms.categories
    )
    return res;
}

export const fetchStateLists = async () => {
    const res = await axiosInstance.get(
        endpoints.cms.stateList
    )
    return res;
}
