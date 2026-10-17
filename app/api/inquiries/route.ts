import { NextRequest, NextResponse } from "next/server"
import { API_CONFIG, fetchFromFrontApi } from "@/lib/api/config"
import { InquiryData, InquiryPayload } from "@/lib/types/front-api"

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  try {
    const body: InquiryPayload = await req.json()

    // Validate required fields before forwarding if desired, but upstream validates too
    if (!API_CONFIG.TOKEN) {
      console.warn("DIGITALRAKSHAK_API_TOKEN is not configured in environment variables.")
    }

    const { status, data } = await fetchFromFrontApi<InquiryData>(API_CONFIG.ENDPOINTS.INQUIRIES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    return NextResponse.json(data, { status })
  } catch (error: any) {
    console.error("Error submitting inquiry:", error)
    return NextResponse.json(
      {
        status: false,
        message: error?.message || "Internal server error submitting inquiry",
        data: null,
      },
      { status: 500 }
    )
  }
}
