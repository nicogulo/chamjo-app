import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export function createClient() {
    const cookieStore = cookies()
    const maxAge = 60 * 60 * 24 * 3

    return createServerClient(process.env.NEXT_PUBLIC_API_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!, {
        cookieOptions: {
            maxAge
        },
        cookies: {
            getAll() {
                return cookieStore.getAll()
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        cookieStore.set(name, value, { ...options, maxAge })
                    })
                } catch {
                    // The `setAll` method was called from a Server Component.
                    // This can be ignored if you have middleware refreshing
                    // user sessions.
                }
            }
        }
    })
}
