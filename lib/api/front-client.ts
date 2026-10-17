import { useState, useEffect } from "react"
import { Country, InquiryOption, InquiryPayload, ApiResponse, InquiryData } from "@/lib/types/front-api"
import {
  API_ENDPOINTS,
  getFullApiUrl,
  getAuthHeaders,
  FALLBACK_COUNTRIES,
  FALLBACK_INQUIRY_OPTIONS,
} from "@/lib/api/config"

export function getFlagEmoji(iso2: string | null | undefined): string {
  if (!iso2 || iso2.length !== 2) return "🌐"
  return iso2
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("")
}

/**
 * Hook to fetch active countries and inquiry options directly from:
 * https://api.digitalrakshak.com/api/v1/front/countries
 * https://api.digitalrakshak.com/api/v1/front/inquiry-options
 */
export function useFrontApiData() {
  const [countries, setCountries] = useState<Country[]>([])
  const [inquiryOptions, setInquiryOptions] = useState<InquiryOption[]>([])
  const [isLoadingCountries, setIsLoadingCountries] = useState(true)
  const [isLoadingOptions, setIsLoadingOptions] = useState(true)
  const [defaultCountryId, setDefaultCountryId] = useState<number | undefined>(undefined)

  useEffect(() => {
    let isMounted = true

    async function loadCountries() {
      const url = getFullApiUrl(API_ENDPOINTS.COUNTRIES)
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: getAuthHeaders(),
        })

        const json: ApiResponse<Country[]> = await res.json()

        if (isMounted && res.status === 200 && json.status && Array.isArray(json.data) && json.data.length > 0) {
          setCountries(json.data)
          const defaultC =
            json.data.find((c) => c.is_default === 1) ||
            json.data.find((c) => c.iso_code_2 === "IN") ||
            json.data[0]
          if (defaultC) {
            setDefaultCountryId(defaultC.id)
          }
          return
        }

        // Fallback if token not yet authorized
        if (isMounted) {
          setCountries(FALLBACK_COUNTRIES)
          setDefaultCountryId(2)
        }
      } catch (err) {
        console.warn(`Direct fetch to ${url} encountered an issue, using fallback list:`, err)
        if (isMounted) {
          setCountries(FALLBACK_COUNTRIES)
          setDefaultCountryId(2)
        }
      } finally {
        if (isMounted) setIsLoadingCountries(false)
      }
    }

    async function loadOptions() {
      const url = getFullApiUrl(API_ENDPOINTS.INQUIRY_OPTIONS)
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: getAuthHeaders(),
        })

        const json: ApiResponse<InquiryOption[]> = await res.json()

        if (isMounted && res.status === 200 && json.status && Array.isArray(json.data) && json.data.length > 0) {
          setInquiryOptions(json.data)
          return
        }

        // Fallback if token not yet authorized
        if (isMounted) {
          setInquiryOptions(FALLBACK_INQUIRY_OPTIONS)
        }
      } catch (err) {
        console.warn(`Direct fetch to ${url} encountered an issue, using fallback list:`, err)
        if (isMounted) {
          setInquiryOptions(FALLBACK_INQUIRY_OPTIONS)
        }
      } finally {
        if (isMounted) setIsLoadingOptions(false)
      }
    }

    loadCountries()
    loadOptions()

    return () => {
      isMounted = false
    }
  }, [])

  return {
    countries,
    inquiryOptions,
    isLoadingCountries,
    isLoadingOptions,
    defaultCountryId,
  }
}

/**
 * Submit inquiry directly to:
 * https://api.digitalrakshak.com/api/v1/front/inquiries
 */
export async function submitInquiry(payload: InquiryPayload): Promise<{
  success: boolean
  status: number
  data?: InquiryData
  message: string
  errors?: Record<string, string[]>
}> {
  const url = getFullApiUrl(API_ENDPOINTS.INQUIRIES)

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: getAuthHeaders({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(payload),
    })

    let result: any
    try {
      result = await res.json()
    } catch (parseErr) {
      result = {
        status: false,
        message: `Response parse error: ${res.statusText}`,
      }
    }

    if (res.status === 200 && result.status) {
      return {
        success: true,
        status: 200,
        data: result.data,
        message: result.message || "Inquiry submitted successfully.",
      }
    }

    if (res.status === 422) {
      return {
        success: false,
        status: 422,
        message: result.message || "Validation error",
        errors: result.errors || {},
      }
    }

    if (res.status === 401) {
      return {
        success: false,
        status: 401,
        message: result.message || "Unauthenticated. Invalid or missing X-API-TOKEN.",
      }
    }

    return {
      success: false,
      status: res.status,
      message: result.message || `Request failed with status ${res.status}`,
      errors: result.errors,
    }
  } catch (error: any) {
    return {
      success: false,
      status: 500,
      message: error?.message || "Failed to connect to https://api.digitalrakshak.com/api/v1/front/inquiries",
    }
  }
}
