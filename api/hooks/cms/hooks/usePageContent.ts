import { useQuery } from "@tanstack/react-query"
import { fetchPageContent } from "../functions/cms.api"


export const usePageContent = () => {
    const mutation = useQuery({
        queryKey: ['fetchPageContent'],
        queryFn: () => fetchPageContent()
    })

    return mutation
}