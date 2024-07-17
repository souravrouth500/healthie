export interface ITestimonial {
    success: boolean
    statusCode: number
    message: string
    data: ITestimonialData
  }
  
  export interface ITestimonialData {
    testimonials: TestimonialItem[]
  }
  
  export interface TestimonialItem {
    id: number
    client_says: string
    client_name: string
    client_plan: string
    active: number
    profile_photo: string
  }
  