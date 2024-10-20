import { createClient } from "@config/supabase-server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get("code")
    const next = searchParams.get("next") ?? "/browse"

    if (code) {
        const supabase = createClient()
        try {
            const { error } = await supabase.auth.exchangeCodeForSession(code)
            if (!error) {
                const forwardedHost = request.headers.get("x-forwarded-host")
                const isLocalEnv = process.env.NODE_ENV === "development"
                if (isLocalEnv) {
                    return NextResponse.redirect(`${origin}${next}`)
                } else if (forwardedHost) {
                    return NextResponse.redirect(`https://${forwardedHost}${next}`)
                } else {
                    return NextResponse.redirect(`${origin}${next}`)
                }
            } else {
                console.error("Error exchanging code for session:", error)
            }
        } catch (error) {
            console.error("Unexpected error during code exchange:", error)
        }
    }

    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
