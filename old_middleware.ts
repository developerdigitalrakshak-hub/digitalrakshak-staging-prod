import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value
    const { pathname } = request.nextUrl

    // List of public routes that don't require authentication
    const publicRoutes = ["/login", "/candidate/onboard", "/candidate/success"]

    const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

    // If user is not authenticated and trying to access protected routes
    if (!token && !isPublicRoute && !pathname.startsWith("/_next")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    // If user is authenticated and trying to access login page
    if (token && pathname.startsWith("/login")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
