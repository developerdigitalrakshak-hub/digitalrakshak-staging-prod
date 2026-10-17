export interface Country {
  id: number
  name: string
  iso_code_2: string | null
  iso_code_3: string | null
  numeric_code: string | null
  phone_code: string | null
  currency_code: string | null
  currency_symbol: string | null
  capital: string | null
  continent: string | null
  flag_icon: string | null
  flag_image: string | null
  latitude: string | null
  longitude: string | null
  timezones: string | null
  postal_code_format: string | null
  postal_code_regex: string | null
  is_default: number
  display_order: number
  status: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface InquiryOption {
  id: number
  name: string
  status: string
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface InquiryConsent {
  terms?: boolean
  marketing?: boolean
}

export interface InquiryPayload {
  type: string
  name: string
  business_email: string
  company_name?: string
  gst_number?: string
  mobile_number: string
  country_id?: number
  option_id?: number
  consent?: InquiryConsent
}

export interface InquiryData {
  id: number
  type: string
  name: string
  business_email: string
  company_name?: string | null
  gst_number?: string | null
  country?: string | null
  country_id?: number | null
  mobile_number: string
  option?: string | null
  option_id?: number | null
  consent?: InquiryConsent
  status: string
  created_at: string
  updated_at: string
}

export interface ApiResponse<T> {
  status: boolean
  message: string
  data: T
  timestamp?: string
  errors?: Record<string, string[]>
}

export interface ApiValidationError {
  status: false
  message: string
  errors: Record<string, string[]>
  timestamp?: string
}
