export interface IInsurance {
    success: boolean
    statusCode: number
    message: string
    data: IInsuranceListData
  }
  
  export interface IInsuranceListData {
    insuranceList: InsuranceList
  }
  
  export interface InsuranceList {
    current_page: number
    data: InsuranceOBj[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: any
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  
  export interface InsuranceOBj {
    id: number
    insurance_name: string
    benifit_array: string[][]
    company_name: string
    short_desc: string
    category_id: string
    slug: string
    active: number
    zip_code: string
    enroll: string
    pdf: string
    plans: IInsurancePlan[]
    category: Category
    company_logo_path: string
    states: State[]
    is_favorite: boolean
  }
  
  export interface IInsurancePlan {
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
  
  export interface Category {
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
  
  export interface State {
    id: number
    state_name: string
    state_code: string
    slug: string
    phone: string
    click_count: number
    active: number
    created_at: any
    updated_at: string
    pivot: Pivot
  }
  
  export interface Pivot {
    insurance_id: number
    state_id: number
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  