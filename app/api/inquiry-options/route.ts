import { NextResponse } from "next/server"
import { API_CONFIG, FALLBACK_INQUIRY_OPTIONS, fetchFromFrontApi } from "@/lib/api/config"
import { InquiryOption } from "@/lib/types/front-api"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const { status, data } = await fetchFromFrontApi<InquiryOption[]>(API_CONFIG.ENDPOINTS.INQUIRY_OPTIONS, {
      method: "GET",
    })

    if (status === 200 && data.status && Array.isArray(data.data) && data.data.length > 0) {
      return NextResponse.json(data, { status: 200 })
    }

    // If 401 or no active data returned from API, provide fallback with info
    return NextResponse.json(
      {
        status: true,
        message: data.message || "Inquiry options retrieved (fallback list).",
        data: FALLBACK_INQUIRY_OPTIONS,
        isFallback: true,
        upstreamStatus: status,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Error fetching inquiry options:", error)
    return NextResponse.json(
      {
        status: true,
        message: "Inquiry options retrieved (fallback list).",
        data: FALLBACK_INQUIRY_OPTIONS,
        isFallback: true,
      },
      { status: 200 }
    )
  }
}
