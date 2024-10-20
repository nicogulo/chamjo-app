import BackToTop from "@components/BackToTop"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { createClient } from "@config/supabase-server"
import { redirect } from "next/navigation"

import Benchmark from "./home/components/Benchmark"
import Benefit from "./home/components/Benefit"
import Content from "./home/components/Content"
import CTA from "./home/components/CTA"
import Faq from "./home/components/Faq"
import Hero from "./home/components/Hero"
import Trusted from "./home/components/Trusted"

interface HomeProps {
    searchParams?: { [key: string]: string }
}

const Home = async ({ searchParams }: HomeProps) => {
    const country = searchParams?.country
    const supabase = createClient()

    const { data } = await supabase.auth.getUser()
    if (data?.user) {
        redirect("/browse")
    }

    return (
        <>
            <Navbar />
            <main className='min-h-screen max-xl:max-w-[375px] max-xl:mx-auto'>
                <Hero />
                <Content />
                <Trusted />
                <Benefit />
                <Benchmark country={country} />
                <Faq />
                <CTA />
                <Footer />
            </main>
            <BackToTop />
        </>
    )
}

export default Home
