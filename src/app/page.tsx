import Image from "next/image"
import Hero from "./components/Hero"
import MainPage from "./components/MainPage"
import { Metadata } from "next"

interface HomeProps {
    searchParams?: { [key: string]: string }
}
export const metadata: Metadata = {
    title: "Chamjo | Discover Asia-based App Patterns",
    description:
        "Bored of using Airbnb, Doordash, and Yadayadayada for inspiration? Say no more! Here you can be inspired by the Asian-based App Patterns that could be your next favorite app."
}

const Home = ({ searchParams }: HomeProps) => {
    const categoryParams = searchParams?.category
    const categoryidParams = searchParams?.id
    const search = searchParams?.search
    return (
        <main className='min-h-screen '>
            <Hero />
            <div className='max-w-[1407px] my-0 mx-auto'>
                <div className='content-page bg-base-1' id='content'>
                    <MainPage categoryParams={categoryParams} categoryidParams={categoryidParams} search={search} />
                </div>
            </div>
        </main>
    )
}

export default Home
