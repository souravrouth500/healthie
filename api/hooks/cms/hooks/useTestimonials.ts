import { IFormInput } from "@/typescript/interface/common.interface"
import { useQuery } from "@tanstack/react-query"
import { fetchTestimonials } from "../functions/cms.api"


export const useTestimonial = () => {
    const mutation = useQuery({
        queryKey: ['fetchTestimonial'],
        queryFn: () => fetchTestimonials()
    })
    return mutation
}