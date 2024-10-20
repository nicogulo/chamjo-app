import Hero from "./home/components/Hero"

import Content from "./home/components/Content"
import Trusted from "./home/components/Trusted"
import Benefit from "./home/components/Benefit"
import Benchmark from "./home/components/Benchmark"

import Faq from "./home/components/Faq"
import CTA from "./home/components/CTA"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import BackToTop from "@components/BackToTop"
import { createClient } from "@config/supabase-server"
import { redirect } from "next/navigation"

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
