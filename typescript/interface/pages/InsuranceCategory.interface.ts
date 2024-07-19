export interface IInsuranceCategory {
    success: boolean
    statusCode: number
    message: string
    data: IInsuranceCategoryData
}

export interface IInsuranceCategoryData {
    categories: ICategory[]
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

export interface IInsuranceCategoryParams {
    state_slug: string | string[] | null;
    category_slug: string | string[] | null;
    category_ids: string | string[] | null;
  }
  
