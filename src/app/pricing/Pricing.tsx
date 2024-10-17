"use client"

import Button from "@components/Button"
import { inter } from "app/layout"
import React, { useEffect } from "react"
import { useFormState } from "react-dom"
import { handlePay } from "./process/action"
import Script from "next/script"

const Pricing = () => {
    const [state, formAction] = useFormState(handlePay, {
        token: ""
    })

    useEffect(() => {
        if (state.token) {
            window.snap.pay(state.token)
        }
    }, [state.token])
    return (
        <>
            <div className=' flex flex-col py-[120px] justify-center items-center gap-[60px] h-full'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-semibold text-[52px]'>Pricing</h1>
                    <span className='text-7 text-[#818181]'>Experience the ultimate app benchmarking with Chamjo</span>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='  bg-base-1 rounded-[8px] shadow-[0px_4px_24px_0px_rgba(3,21,49,0.08)] px-6 pt-6 pb-[40px] w-[442px] h-[442px] gap-[40px] flex flex-col  items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-row items-center'>
                                <div className='flex flex-row'>
                                    <span className={`${inter.className} font-semibold text-7`}>$</span>
                                    <span className={`${inter.className} font-semibold text-[64px]`}>0</span>
                                </div>
                                <span className='pt-9 text-[#A1A1A1] text-5'>/month</span>
                            </div>
                            <span className='text-7'>Free Plan</span>
                        </div>
                        <div className='flex flex-col gap-5 items-center justify-center'>
                            <span className='text-3 text-[#818181]'>Limited Browse</span>
                            <span className='text-3 text-[#818181]'>Limited Request</span>
                            <span className='text-3 text-[#818181]'>Limited Search</span>
                        </div>

                        <Button className='!bg-[#F5F5F5] !outline-none !border-[#C2C2C2] !shadow-none !text-[#696969]'>
                            Current Plan
                        </Button>
                    </div>
                    <div className='  bg-base-1 rounded-[8px] shadow-[0px_4px_24px_0px_rgba(3,21,49,0.08)] px-6 pt-6 pb-[40px] w-[442px] h-[442px] gap-[40px] flex flex-col  items-center justify-center'>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-row items-center'>
                                <div className='flex flex-row'>
                                    <span className={`${inter.className} font-semibold text-7`}>$</span>
                                    <span className={`${inter.className} font-semibold text-[64px]`}>5</span>
                                </div>
                                <span className='pt-9 text-[#A1A1A1] text-5'>/month</span>
                            </div>
                            <span className='text-7'>Pro Plan</span>
                        </div>
                        <div className='flex flex-col gap-5 items-center justify-center'>
                            <span className='text-3 text-[#818181]'>Unlimited Browse</span>
                            <span className='text-3 text-[#818181]'>Unlimited Request</span>
                            <span className='text-3 text-[#818181]'>Unlimited Search</span>
                        </div>
                        <form action={formAction} method='POST'>
                            <Button type='submit'>Get Started</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Script
                type='text/javascript'
                src='https://app.sandbox.midtrans.com/snap/snap.js'
                data-client-key={process.env.MIDTRANS_CLIENT_KEY}
            />
        </>
    )
}

export default Pricing
