"use client"

import React from "react"
import { Inter } from "next/font/google"
import Button from "@components/Button"

const inter = Inter({ subsets: ["latin"] })

const Hero = () => {
    const handleClick = () => {
        const content = document.getElementById("content")
        content?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div className='hero-wrapper '>
            <div className='flex flex-col items-center gap-3 xl:gap-4 w-full'>
                <h1 className='font-medium xl:text-[48px] text-[28px] xl:leading-[54px] leading-9 xl:w-[560px] w-[inherit] text-[#121212] text-center'>
                    Backed your product with{" "}
                    <span className=' font-medium xl:text-[48px] text-[28px] xl:leading-[54px] leading-9 text-[#7543df]'>
                        various
                    </span>{" "}
                    references
                </h1>

                <p
                    className={`text-base-7 ${inter.className} font-normal text-[16px] !leading-[32px] text-center max-[1439px]:w-[453px] max-xl:text-sm max-xl:!leading-[27px] max-xl:py-0 max-xl:px-6 max-xl:w-[inherit]`}
                >
                    Chamjo inspire you with amazing product from across the world
                </p>
            </div>
            <Button onClick={handleClick} width={127} height={49} className='!rounded-xl'>
                <span className='font-medium text-[16px] leading-6 py-3 px-8'>Discover</span>
            </Button>
        </div>
    )
}

export default Hero
