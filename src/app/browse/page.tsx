import { createClient } from "@config/supabase-server"
import { redirect } from "next/navigation"

import MainPage from "./components/MainPage"

interface BrowseProps {
    searchParams?: { [key: string]: string }
}

const Browse = async ({ searchParams }: BrowseProps) => {
    const categoryParams = searchParams?.category
    const categoryidParams = searchParams?.id
    const search = searchParams?.search

    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect("/")
    }

    return (
        <main>
            <MainPage categoryParams={categoryParams} categoryidParams={categoryidParams} search={search} />
        </main>
    )
}

export default Browse
