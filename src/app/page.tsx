import Image from "next/image"
import Hero from "./components/Hero"
import Sidebar from "./components/Sidebar"

interface HomeProps {
    searchParams?: { [key: string]: string }
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
                    <Sidebar categoryParams={categoryParams} categoryidParams={categoryidParams} search={search} />
                </div>
            </div>
        </main>
    )
}

export default Home
