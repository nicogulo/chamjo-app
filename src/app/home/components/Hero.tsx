"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { login } from "app/action"

import useAuth from "@hooks/useAuth"

import ModalLogin from "@components/Navbar/components/ModalLogin"
import Button from "@components/Button"
import Icons from "@components/Icons"

const Hero = () => {
    const [open, setOpen] = useState(false)
    const { isLoggedIn } = useAuth()

    const handleOpenModal = () => {
        setOpen(true)
    }

    return (
        <section className='hero-wrapper '>
            <div className='flex flex-col items-center gap-3 xl:gap-4 w-full'>
                <Link
                    href='https://www.producthunt.com/products/chamjo#chamjo'
                    target='_blank'
                    className='font-sans font-normal text-base-900 xl:text-body-lg text-body-md hover:text-primary-500 flex flex-row items-center gap-1 border border-base-400 py-2 px-5 rounded-lg'
                >
                    <Image src='/next/assets/images/star.svg' alt='' width={24} height={24} />
                    #8 on Product Hunt
                    <span>
                        <Icons icon='ArrowNavbar' width={9} height={9} />
                    </span>
                </Link>
                <h1 className='xl:text-heading-xl text-heading-md font-semibold  text-center'>
                    Your Local Apps <br />
                    Research Companion
                </h1>

                <p className=' text-base-800 font-normal xl:text-body-xl text-body-lg text-center xl:max-w-[587px]'>
                    Explore apps from different countries, offering you insights into <br className='xl:block hidden' />
                    regional standards across the globe.
                </p>
            </div>
            <Button
                onClick={() => {
                    if (!isLoggedIn) {
                        handleOpenModal()
                    }
                }}
                className='!rounded-xl !h-fit font-semibold xl:text-body-xl text-body-lg'
            >
                {isLoggedIn ? "Go to dashboard" : "Sign up for free"}
            </Button>
            {open && <ModalLogin openModal={open} setOpenModal={setOpen} signInWithGoogle={login} />}
        </section>
    )
}

export default Hero
