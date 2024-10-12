import Hero from "./home/components/Hero"

import Content from "./home/components/Content"
import Trusted from "./home/components/Trusted"
import Benefit from "./home/components/Benefit"
import Benchmark from "./home/components/Benchmark"

import Faq from "./home/components/Faq"
import CTA from "./home/components/CTA"

interface HomeProps {
    searchParams?: { [key: string]: string }
}

const Home = async ({ searchParams }: HomeProps) => {
    const country = searchParams?.country

    return (
        <main className='min-h-screen max-xl:max-w-[375px] max-xl:mx-auto'>
            <Hero />
            <Content />
            <Trusted />
            <Benefit />
            <Benchmark country={country} />
            <Faq />
            <CTA />
        </main>
    )
}

export default Home
