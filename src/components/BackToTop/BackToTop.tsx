"use client"

import Icons from "@components/Icons"
import React, { useState, useEffect } from "react"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    return (
        <div className='fixed max-xl:flex max-xl:items-center max-xl:justify-center bottom-9 xl:right-[5%] max-xl:w-full'>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='p-4 rounded-full w-12 h-12 text-base-100 transition duration-300'
                    style={{
                        background: "linear-gradient(180deg, #3D3C3D 0%, #302F30 14.17%, #272627 50.11%)"
                    }}
                >
                    <Icons icon='ArrowTop' />
                </button>
            )}
        </div>
    )
}

export default BackToTop
