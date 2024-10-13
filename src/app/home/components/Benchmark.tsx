import React from "react"
import Image from "next/image"

import Container from "@components/Container"

import ListApp from "../images/list-app.webp"
import ListAppMobile from "../images/list-app-mobile.webp"

interface Props {
    country?: string
}
const Benchmark: React.FC<Props> = ({ country }) => {
    return (
        <section className='xl:py-[120px] py-8'>
            <Container className='flex flex-col xl:gap-[60px] gap-12'>
                <div className='flex flex-col xl:items-start items-center gap-3'>
                    <div className='rounded-full bg-base-300 py-2.5 px-5 w-fit'>
                        <span className='uppercase text-primary-500 xl:text-body-md text-body-xs font-semibold'>
                            collections
                        </span>
                    </div>
                    <div className='flex xl:flex-row flex-col xl:items-end items-center xl:gap-6 gap-4'>
                        <span className='text-base-900 xl:text-heading-lg text-heading-sm font-semibold xl:max-w-[636px] xl:text-left text-center'>
                            Benchmark these popular apps from {country ?? "Indonesia"}
                        </span>
                        <span className='text-base-800 xl:text-body-xl text-body-lg xl:max-w-[416px] xl:text-left text-center'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.
                        </span>
                    </div>
                </div>
                <Image
                    src={ListApp}
                    alt=''
                    width={0}
                    height={0}
                    unoptimized
                    sizes='100vw'
                    className='xl:block hidden'
                    style={{ height: "auto", width: "100%" }}
                />
                <Image
                    src={ListAppMobile}
                    alt=''
                    width={0}
                    height={0}
                    unoptimized
                    sizes='100vw'
                    className='xl:hidden block'
                    style={{ height: "auto", width: "100%" }}
                />
            </Container>
        </section>
    )
}

export default Benchmark
