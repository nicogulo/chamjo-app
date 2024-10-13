"use client"

import React, { useState } from "react"

import { supabaseAuth } from "@config/auth"
import { getURL } from "@helpers/get-url"
import toast from "@utils/toast"

import Button from "@components/Button"
import Container from "@components/Container"
import ModalLogin from "@components/Navbar/components/ModalLogin"
import { removeClickedCard } from "@components/Navbar/utils/clikced-card"

import ElipseInside from "../svgx/elipse-inside.svg"
import ElipseInsideMobile from "../svgx/elipse-inside-mobile.svg"
import ElipseOutside from "../svgx/elipse-outside.svg"

const CTA = () => {
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
        <section
            className='xl:py-[120px] py-[80px] relative'
            style={{
                background: "linear-gradient(180deg, #3D3C3D 0%, #302F30 14.17%, #272627 50.11%)"
            }}
        >
            <Container className='flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center gap-3'>
                    <span className='text-base-50 xl:text-heading-lg text-heading-md font-semibold xl:max-w-[636px] text-center'>
                        Interested in Chamjo?
                    </span>
                    <span className='text-base-50 xl:text-body-xl text-body-lg xl:max-w-[416px] text-center font-normal'>
                        Unlock exclusive screenshots that will elevate your benchmark process.
                    </span>
                </div>
                <Button className='w-fit !h-full text-body-xl font-semibold' onClick={handleOpenModal}>
                    Sign up for free
                </Button>
            </Container>
            {open && <ModalLogin openModal={open} setOpenModal={setOpen} signInWithGoogle={signInWithGoogle} />}
            <ElipseInside className='absolute top-0 left-0  w-full h-full xl:block hidden' />
            <ElipseInsideMobile className='absolute top-1/2 left-0 transform translate-x-[17%] -translate-y-1/2 w-[276px] h-[276px] xl:hidden block' />
            <ElipseOutside className='absolute top-0 left-0  w-full h-full' />
        </section>
    )
}

export default CTA
