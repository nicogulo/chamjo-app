"use server"

import { removeClickedCard } from "@components/Navbar/utils/clikced-card"
import { createClient } from "@config/supabase-server"
import { getURL } from "@helpers/get-url"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function login() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            // redirectTo: getURL()
            redirectTo: "https://chamjo-app-dev.vercel.app/auth/callback"
        }
    })
    console.log("asasasa", getURL())

    if (data.url) {
        removeClickedCard()
        redirect(data.url)
    }

    if (error) {
        console.error(error)
    }

    revalidatePath("/browse", "layout")
    redirect("/browse")
}
