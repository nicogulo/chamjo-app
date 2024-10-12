"use client"

import Container from "@components/Container"
import Image from "next/image"
import React from "react"

const Content = () => {
    return (
        <section className='xl:pb-10 pb-12'>
            <Container>
                <div className='xl:px-2.5 xl:pt-2.5 rounded-3xl bg-base-200 w-fit h-full'>
                    <Image
                        src='/next/assets/images/content.webp'
                        alt='content-item'
                        priority
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ height: "auto", width: "100%" }}
                    />
                </div>
            </Container>
        </section>
    )
}

export default Content
