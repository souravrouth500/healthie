import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchInsuranceList } from "../functions/cms.api"

export const useInsuranceList = () => {

    const mutation = useQuery({
        queryKey: ['fetchInsuranceList'],
        queryFn: () => fetchInsuranceList()
    })
    // const mutation = useMutation({
    //     mutationKey: ['fetchInsuranceList'],
    //     mutationFn: () => fetchInsuranceList()
    // })
    return mutation
}