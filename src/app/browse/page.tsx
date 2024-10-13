import Category from "./components/Category"
import MainPage from "./components/MainPage"

interface BrowseProps {
    searchParams?: { [key: string]: string }
}

const Browse = async ({ searchParams }: BrowseProps) => {
    const categoryParams = searchParams?.category
    const categoryidParams = searchParams?.id
    const search = searchParams?.search
    return (
        <main>
            <MainPage categoryParams={categoryParams} categoryidParams={categoryidParams} search={search} />
        </main>
    )
}

export default Browse
