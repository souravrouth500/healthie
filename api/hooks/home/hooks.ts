import { useQuery } from "@tanstack/react-query"
import { fetchPageContent } from "./functions"

export const usePageContent = () => {
    const mutation = useQuery({
        queryKey: ['fetchPageContent'],
        queryFn: () => fetchPageContent()
    })

    return mutation
}