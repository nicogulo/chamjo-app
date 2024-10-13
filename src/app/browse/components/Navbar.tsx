"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"

import { useProfile } from "@hooks/useAuth"

import Icons from "@components/Icons"
import { Else, If, Then } from "@components/If"

const Navbar = () => {
    const { profile, loading } = useProfile()

    const name = profile?.user_metadata.name
    const email = profile?.user_metadata.email
    const avatar = profile?.user_metadata.avatar_url
    return (
        <div className='flex flex-row justify-between px-8 py-6 border-b border-base-400'>
            <div className='flex flex-row items-center gap-3'>
                <Link href='/' className='cursor-pointer'>
                    <Icons icon='LogoChamjo' width={79} height={24} />
                </Link>
                <p className='opacity-50 flex flex-row text-base-4'>&#x2022;</p>
                <Link
                    href='https://www.producthunt.com/products/chamjo#chamjo'
                    target='_blank'
                    className='font-sans font-normal text-base-800 xl:text-body-md text-body-sm hover:text-primary-500 flex flex-row items-center gap-1 '
                >
                    <Image src='/next/assets/images/star.svg' alt='' width={24} height={24} />
                    #8 on Product Hunt
                    <span>
                        <Icons icon='ArrowNavbar' width={9} height={9} />
                    </span>
                </Link>
            </div>
            <div className='flex flex-row gap-7'>
                <Link
                    href='/browse'
                    className='text-base-800 xl:text-body-md text-body-sm hover:text-primary-500 hover:text-base-6'
                >
                    Request App
                </Link>
                <Link
                    href='/about'
                    className='text-base-800 xl:text-body-md text-body-sm hover:text-primary-500 hover:text-base-6'
                >
                    Region Request
                </Link>

                <If condition={loading}>
                    <Then>
                        <Skeleton circle width={20} height={20} />
                    </Then>
                    <Else>
                        <Image src={avatar as string} alt={name} width={24} height={24} className='rounded-full' />
                    </Else>
                </If>
            </div>
        </div>
    )
}

export default Navbar
