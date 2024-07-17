import { useQuery } from "@tanstack/react-query"
import { getProfileDetails } from "../functions/user.api"


export const useUser = () => {

    const mutation = useQuery({
        queryKey: ['get-profile'],
        queryFn: () => getProfileDetails()
    })

    return mutation
}