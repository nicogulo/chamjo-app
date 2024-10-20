import React from "react"

import "./module.css"

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export default function SearchBar({ onChange, value }: Props) {
    const onSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='relative'>
            <form action='' onSubmit={onSubmit}>
                <input
                    autoComplete='off'
                    // ref={inputEl}
                    type='search'
                    name='search'
                    rel='search'
                    className='mobile-search input-search  text-base-900 focus:text-base-900 focus:bg-base-100 focus:outline-none focus:ring-base-800 focus:ring-2 focus:border-transparent flex-1 placeholder-base-600'
                    placeholder='Search with name app'
                    value={value}
                    onChange={onChange}
                />
            </form>
        </div>
    )
}
