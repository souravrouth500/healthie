import { useQuery } from "@tanstack/react-query"
import { fetchTestimonials } from "./functions"

export const useTestimonial = () => {
    const mutation = useQuery({
        queryKey: ['fetchTestimonial'],
        queryFn: () => fetchTestimonials()
    })
    return mutation
}