export interface IInsuranceDetails {
    success: boolean
    statusCode: number
    message: string
    data: IInsuranceDetailsData
  }
  
  export interface IInsuranceDetailsData {
    insuranceDetails: IInsuranceDetails
  }
  
  export interface IInsuranceDetails {
    id: number
    insurance_name: string
    slug: string
    company_name: string
    company_logo: string
    short_desc: string
    category_id: string
    active: number
    zip_code: string
    enroll: string
    period: number
    pdf: string
    benifits: string
    created_at: string
    updated_at: string
    deleted_at: any
    company_logo_path: string
    pdf_path: string
    benifit_array: string[]
    is_favorite: boolean
    states: IState[]
    plans: IPlan[]
    category: ICategory
  }
  
  export interface IState {
    id: number
    state_name: string
    state_code: string
    slug: string
    phone: string
    click_count: number
    active: number
    created_at: any
    updated_at: string
    pivot: IPivot
  }
  
  export interface IPivot {
    insurance_id: number
    state_id: number
  }
  
  export interface IPlan {
    id: number
    insurance_id: number
    plan_name: string
    price: string
    price_type: string
    short_desc: string
    policy_details: string
    benefits: string
    active: number
    pdf: string
    created_at: string
    updated_at: string
    deleted_at: any
    benifit_array: string[]
    cart_added: boolean
    pdf_path: string
  }
  
  export interface ICategory {
    id: number
    category_name: string
    slug: string
    parent_id: any
    logo: string
    description: string
    active: number
    created_at: string
    updated_at: string
    deleted_at: any
    logo_path: string
  }
  