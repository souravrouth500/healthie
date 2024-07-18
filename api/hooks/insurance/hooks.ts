import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchInsuranceCategories, fetchInsuranceDetails, fetchInsuranceList } from "./functions"
import { IInsuranceCategoryParams } from "@/typescript/interface/pages/InsuranceCategory.interface"

export const useInsuranceList = () => {

    // const mutation = useQuery({
    //     queryKey: ['fetchInsuranceList'],
    //     queryFn: () => fetchInsuranceList()
    // })
    const mutation = useMutation({
        mutationKey: ['insuranceList'],
        mutationFn: (body:IInsuranceCategoryParams) => fetchInsuranceList(body)
    })
    return mutation
}

export const useInsuranceDetails = (id:number) => {
    const mutation = useQuery({
        queryKey: ['getInsuranceDetails', id],
        queryFn: () => fetchInsuranceDetails(id)
    })
    return mutation
}

export const useInsuranceCategories = () => {
    const mutation = useQuery({
        queryKey: ['fetchInsuranceCategories'],
        queryFn: () => fetchInsuranceCategories()
    })
    return mutation;
}