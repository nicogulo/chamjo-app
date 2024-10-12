"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { supabaseAuth } from "@config/auth"
import { getURL } from "@helpers/get-url"
import toast from "@utils/toast"

import Button from "@components/Button"
import Icons from "@components/Icons"
import { removeClickedCard } from "@components/Navbar/utils/clikced-card"
import ModalLogin from "@components/Navbar/components/ModalLogin"

const Hero = () => {
    const [open, setOpen] = useState(false)

    const signInWithGoogle = async () => {
        const { error, data } = await supabaseAuth.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: getURL()
            }
        })

        if (data) {
            removeClickedCard()
            toast.loading(`Redirect to ${data.provider}`)
        }

        if (error) {
            toast.error(error.message)
        }
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    return (
        <section className='hero-wrapper '>
            <div className='flex flex-col items-center gap-3 xl:gap-4 w-full'>
                <Link
                    href='https://www.producthunt.com/products/chamjo#chamjo'
                    target='_blank'
                    className='font-sans font-normal text-base-900 xl:text-3 text-sm !leading-[22px] hover:text-base-6 flex flex-row items-center gap-1 border border-base-400 py-2 px-5 rounded-lg'
                >
                    <Image src='/next/assets/images/star.svg' alt='' width={24} height={24} />
                    #8 on Product Hunt
                    <span>
                        <Icons icon='ArrowNavbar' width={9} height={9} />
                    </span>
                </Link>
                <h1 className='xl:text-[56px] text-13 font-semibold xl:leading-[64px] leading-[41px] text-center'>
                    Your Local Apps <br />
                    Research Companion
                </h1>

                <p className=' text-base-800  font-normal xl:text-4 text-3 text-center xl:max-w-[587px] xl:leading-[27px] leading-6'>
                    Explore apps from different countries, offering you insights into <br className='xl:block hidden' />
                    regional standards across the globe.
                </p>
            </div>
            <Button onClick={handleOpenModal} className='!rounded-xl !h-fit font-semibold'>
                Sign up for free
            </Button>
            {open && <ModalLogin openModal={open} setOpenModal={setOpen} signInWithGoogle={signInWithGoogle} />}
        </section>
    )
}

export default Hero
