export interface IAddToCart {
  uuid?: string;
  insurance_id: number
  insurance_plans_id: number
  insurance_add_ons_id: number | null;
}

export interface IAddToCartResponse {
  success: boolean
  statusCode: number
  message: string
  data: Data
}

export interface Data {
  carts: Cart[]
}

export interface Cart {
  id: number
  user_id: number
  insurance_id: number
  insurance_add_ons_id: any
  insurance_plans_id: number
  type: string
  created_at: string
  updated_at: string
  sessionId: string
}

export interface SessionAddToCart {
  success: boolean
  statusCode: number
  message: string
  data: SessionData
}

export interface SessionData {
  carts: SessionCart[]
  sessionId: string
}

export interface SessionCart {
  id: number
  session_id: string
  insurance_id: number
  insurance_add_ons_id: any
  insurance_plans_id: number
  type: string
  created_at: string
  updated_at: string
}
