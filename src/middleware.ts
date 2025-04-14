import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/login", "/register", "/verify-email"];
const PRIVATE_ROUTES = ["/contact"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isPrivateRoute = PRIVATE_ROUTES.includes(pathname);

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!token && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
