import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define which routes are public
const publicPaths = ["/", "/about", "/contact", "/projects", "/store"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Redirect old routes or broken links if needed
  if (pathname === "/home") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // ✅ Block access to other undefined routes (optional)
  if (!publicPaths.includes(pathname) && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    const notFoundUrl = request.nextUrl.clone();
    notFoundUrl.pathname = "/";
    return NextResponse.redirect(notFoundUrl);
  }

  // ✅ Allow access to all public pages
  return NextResponse.next();
}

// Run middleware for these routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};