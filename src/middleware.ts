import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export { default } from "next-auth/middleware"
  
export function middleware(req: NextRequest) {
  // This function can be marked `async` if using `await` inside
  // You can modify the response object
  // See "Modifying the response" below to learn more
 
  const authTocken = req.cookies.get('next-auth.session-token')
    if (req.nextUrl.pathname.startsWith('/api/auth/signin') && authTocken) {
        return NextResponse.redirect(new URL('/api/auth/signout', req.url))
    } else if (req.nextUrl.pathname.startsWith('/api/auth/signout') && !authTocken) {
        return NextResponse.rewrite(new URL('/api/auth/signin', req.url))   
    } else {
        return NextResponse.next()
    }

}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/auth/signin/:path*', '/api/auth/signout/:path*',]
}