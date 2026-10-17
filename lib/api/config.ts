import { Country, InquiryOption, ApiResponse } from "@/lib/types/front-api"

/**
 * Global Configuration for DigitalRakshak Front APIs
 * Managed globally via environment variables with fallback to live production URL:
 * https://api.digitalrakshak.com
 */
export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.DIGITALRAKSHAK_API_BASE_URL ||
  "https://api.digitalrakshak.com"
).replace(/\/+$/, "")

export const API_TOKEN =
  process.env.NEXT_PUBLIC_API_TOKEN ||
  process.env.DIGITALRAKSHAK_API_TOKEN ||
  ""

export const API_ENDPOINTS = {
  COUNTRIES: "/api/v1/front/countries",
  INQUIRY_OPTIONS: "/api/v1/front/inquiry-options",
  INQUIRIES: "/api/v1/front/inquiries",
} as const

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  TOKEN: API_TOKEN,
  ENDPOINTS: API_ENDPOINTS,
}

export function getFullApiUrl(endpoint: string): string {
  const base = (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.DIGITALRAKSHAK_API_BASE_URL ||
    "https://api.digitalrakshak.com"
  ).replace(/\/+$/, "")
  return `${base}${endpoint}`
}

export function getAuthHeaders(extraHeaders?: HeadersInit): Record<string, string> {
  const token =
    process.env.NEXT_PUBLIC_API_TOKEN ||
    process.env.DIGITALRAKSHAK_API_TOKEN ||
    ""

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(extraHeaders as Record<string, string>),
  }

  if (token) {
    headers["X-API-TOKEN"] = token
  }

  return headers
}

/**
 * Fallback active countries if API token is missing during initial dev setup
 */
export const FALLBACK_COUNTRIES: Country[] = [
  {
    id: 2,
    name: "India",
    iso_code_2: "IN",
    iso_code_3: "IND",
    numeric_code: "356",
    phone_code: "91",
    currency_code: "INR",
    currency_symbol: "₹",
    capital: "New Delhi",
    continent: "Asia",
    flag_icon: null,
    flag_image: null,
    latitude: "20.5937",
    longitude: "78.9629",
    timezones: '["Asia/Kolkata"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 1,
    display_order: 1,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 1,
    name: "United States",
    iso_code_2: "US",
    iso_code_3: "USA",
    numeric_code: "840",
    phone_code: "1",
    currency_code: "USD",
    currency_symbol: "$",
    capital: "Washington D.C.",
    continent: "North America",
    flag_icon: null,
    flag_image: null,
    latitude: "37.0902",
    longitude: "-95.7129",
    timezones: '["America/New_York"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 0,
    display_order: 2,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 4,
    name: "United Kingdom",
    iso_code_2: "GB",
    iso_code_3: "GBR",
    numeric_code: "826",
    phone_code: "44",
    currency_code: "GBP",
    currency_symbol: "£",
    capital: "London",
    continent: "Europe",
    flag_icon: null,
    flag_image: null,
    latitude: "55.3781",
    longitude: "-3.4360",
    timezones: '["Europe/London"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 0,
    display_order: 3,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 5,
    name: "Australia",
    iso_code_2: "AU",
    iso_code_3: "AUS",
    numeric_code: "036",
    phone_code: "61",
    currency_code: "AUD",
    currency_symbol: "$",
    capital: "Canberra",
    continent: "Oceania",
    flag_icon: null,
    flag_image: null,
    latitude: "-25.2744",
    longitude: "133.7751",
    timezones: '["Australia/Sydney"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 0,
    display_order: 4,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 6,
    name: "United Arab Emirates",
    iso_code_2: "AE",
    iso_code_3: "ARE",
    numeric_code: "784",
    phone_code: "971",
    currency_code: "AED",
    currency_symbol: "د.إ",
    capital: "Abu Dhabi",
    continent: "Asia",
    flag_icon: null,
    flag_image: null,
    latitude: "23.4241",
    longitude: "53.8478",
    timezones: '["Asia/Dubai"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 0,
    display_order: 5,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 7,
    name: "Singapore",
    iso_code_2: "SG",
    iso_code_3: "SGP",
    numeric_code: "702",
    phone_code: "65",
    currency_code: "SGD",
    currency_symbol: "$",
    capital: "Singapore",
    continent: "Asia",
    flag_icon: null,
    flag_image: null,
    latitude: "1.3521",
    longitude: "103.8198",
    timezones: '["Asia/Singapore"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 0,
    display_order: 6,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 8,
    name: "Canada",
    iso_code_2: "CA",
    iso_code_3: "CAN",
    numeric_code: "124",
    phone_code: "1",
    currency_code: "CAD",
    currency_symbol: "$",
    capital: "Ottawa",
    continent: "North America",
    flag_icon: null,
    flag_image: null,
    latitude: "56.1304",
    longitude: "-106.3468",
    timezones: '["America/Toronto"]',
    postal_code_format: null,
    postal_code_regex: null,
    is_default: 0,
    display_order: 7,
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
]

/**
 * Fallback inquiry options if API token is missing during initial dev setup
 */
export const FALLBACK_INQUIRY_OPTIONS: InquiryOption[] = [
  {
    id: 1,
    name: "API & SDK Integration",
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 2,
    name: "Identity & KYC Verification",
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 3,
    name: "Enterprise Compliance & Audit",
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
  {
    id: 4,
    name: "Custom Security Solutions",
    status: "active",
    created_at: "2026-01-01 00:00",
    updated_at: "2026-01-01 00:00",
    deleted_at: null,
  },
]

/**
 * Universal fetcher for DigitalRakshak Front APIs
 */
export async function fetchFromFrontApi<T>(
  endpoint: string,
  init?: RequestInit
): Promise<{ status: number; data: ApiResponse<T> }> {
  const url = getFullApiUrl(endpoint)
  const headers = getAuthHeaders(init?.headers)

  const response = await fetch(url, {
    ...init,
    headers,
    cache: "no-store",
  })

  let responseData: any
  try {
    responseData = await response.json()
  } catch (err) {
    responseData = {
      status: false,
      message: `Failed to parse response: ${response.statusText}`,
      data: null,
    }
  }

  return {
    status: response.status,
    data: responseData,
  }
}
