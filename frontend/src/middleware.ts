import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest){
    const googleSessionToken = req.cookies.get("next-auth.session-token")

    if(!googleSessionToken){
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: [
        "/"
    ],
}