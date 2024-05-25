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
                <div
                    className='flex bg-base-1 mx-12 gap-12 max-[1066px]:max-w-full max-[1066px]:my-0 max-[1066px]:mx-[16px] max-[1066px]:pt-[48px] max-[1066px]:pt-[40px]'
                    id='content'
                >
                    <Sidebar categoryParams={categoryParams} categoryidParams={categoryidParams} search={search} />
                </div>
            </div>
        </main>
    )
}

export default Home
