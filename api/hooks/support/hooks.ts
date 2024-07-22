import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createSupportTicket, fetchTickets } from "./functions"
import { FetchTickets, supportTicket } from "@/typescript/interface/pages/support.interface"
import { CustomError } from "@/typescript/interface/apiresp.interfaces"
import { toast } from "sonner"

export const useFetchTickets = (body: FetchTickets) => {
    return useQuery({
        queryKey: ['getTickets', body],
        queryFn: () => fetchTickets(body)
    })
}

export const useCreateTicket = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['createTicket'],
        mutationFn: (body: supportTicket) => createSupportTicket(body),
        onSuccess: (res) => {
            console.log('avares', res?.data);
            toast.success(res?.data?.message)
            queryClient.invalidateQueries({
                queryKey: ['getTickets']
            })
        },
        onError: (err: CustomError) => {
            console.log(err);
            toast.error(err.message)
        }
    })
}