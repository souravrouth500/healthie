export interface supportTicket {
    "subject": "string",
    "priority": "string",
    "description": "string"
}

export interface FetchTickets {
    page: number; 
    per_page: number;
}