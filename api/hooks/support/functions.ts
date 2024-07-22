import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { FetchTickets, supportTicket } from "@/typescript/interface/pages/support.interface";

export const fetchTickets = async (body: FetchTickets) => {
    const res = await axiosInstance.post(
        endpoints.support.myTickets,
        body
        // {
        //     page: 1,
        //     per_page: 5
        // }
    )
    return res;
}

export const createSupportTicket = async (body: supportTicket) => {
    const res = await axiosInstance.post(
        endpoints.support.createTicket,
        body
    )
    return res;
}