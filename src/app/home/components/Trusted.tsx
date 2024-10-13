import Container from "@components/Container"
import { inter } from "app/layout"
import React from "react"
import Google from "../svgx/Google"
import FlipKart from "../svgx/FlipKart"
import Gojek from "../svgx/Gojek"
import Grab from "../svgx/Grab"
import Shopee from "../svgx/Shopee"
import Traveloka from "../svgx/Traveloka"

const Trusted = () => {
    return (
        <section className='xl:pb-[60px] pb-12'>
            <Container className='flex flex-col gap-6 justify-center items-center'>
                <span className='text-base-800 xl:text-body-lg text-body-md '>Trusted by people at</span>
                <div className='xl:flex xl:flex-row xl:flex-wrap grid grid-cols-3 grid-rows-2 justify-items-center gap-x-8 gap-y-7 items-center justify-center xl:gap-[50px] '>
                    <Google className=' xl:scale-100 scale-75 w-fit h-full' />
                    <FlipKart className=' xl:scale-100 scale-75 w-fit h-full' />
                    <Gojek className=' xl:scale-100 scale-75 w-fit h-full' />
                    <Grab className=' xl:scale-100 scale-75 w-fit h-full' />
                    <Shopee className=' xl:scale-100 scale-75 w-fit h-full' />
                    <Traveloka className=' xl:scale-100 scale-75 w-fit h-full' />
                </div>
            </Container>
        </section>
    )
}

export default Trusted
