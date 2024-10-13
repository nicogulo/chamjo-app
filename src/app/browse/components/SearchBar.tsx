import React from "react"
import { Inter } from "next/font/google"
import "./module.css"

const inter = Inter({ subsets: ["latin"] })

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export default function SearchBar({ onChange, value }: Props) {
    const onSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='relative mb-5 max-[1066px]:mb-6 max-[1066px]:w-full max-[1066px]:px-4'>
            <form action='' onSubmit={onSubmit}>
                <input
                    autoComplete='off'
                    // ref={inputEl}
                    type='search'
                    name='search'
                    rel='search'
                    className={`mobile-search input-search  text-base-7 focus:text-base-8 focus:bg-base-100 focus:outline-none focus:ring-primary-5 focus:ring-2 focus:border-transparent flex-1 placeholder-base-6`}
                    placeholder='Search with name app'
                    value={value}
                    onChange={onChange}
                />
            </form>
        </div>
    )
}
