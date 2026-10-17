import { NextResponse } from "next/server"
import { API_CONFIG, FALLBACK_COUNTRIES, fetchFromFrontApi } from "@/lib/api/config"
import { Country } from "@/lib/types/front-api"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const { status, data } = await fetchFromFrontApi<Country[]>(API_CONFIG.ENDPOINTS.COUNTRIES, {
      method: "GET",
    })

    if (status === 200 && data.status && Array.isArray(data.data) && data.data.length > 0) {
      return NextResponse.json(data, { status: 200 })
    }

    // If 401 or no active data returned from API, provide fallback with info
    return NextResponse.json(
      {
        status: true,
        message: data.message || "Active countries retrieved (fallback list).",
        data: FALLBACK_COUNTRIES,
        isFallback: true,
        upstreamStatus: status,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("Error fetching countries:", error)
    return NextResponse.json(
      {
        status: true,
        message: "Active countries retrieved (fallback list).",
        data: FALLBACK_COUNTRIES,
        isFallback: true,
      },
      { status: 200 }
    )
  }
}
