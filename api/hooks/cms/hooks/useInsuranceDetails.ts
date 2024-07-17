import { useQuery } from "@tanstack/react-query"
import { fetchInsuranceDetails } from "../functions/cms.api"

export const useInsuranceDetails = (id:number) => {
    const mutation = useQuery({
        queryKey: ['getInsuranceDetails', id],
        queryFn: () => fetchInsuranceDetails(id)
    })
    return mutation
}