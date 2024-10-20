"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"

import useAuth, { useProfile } from "@hooks/useAuth"
import classNames from "@utils/classnames"

import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import CollapseMenu from "@components/Navbar/components/CollapseMenu"
import Profile from "@components/Navbar/components/Profile"

const Navbar = () => {
    const [isOpenProfile, setOpenProfile] = useState(false)
    const { profile, loading } = useProfile()
    const { isLoggedIn } = useAuth()

    const name = profile?.user_metadata.name
    const email = profile?.user_metadata.email
    const avatar = profile?.user_metadata.avatar_url

    return (
        <div className='flex flex-row justify-between xl:px-8 px-4 py-[18px] xl:max-w-full max-w-[375px] mx-auto h-auto border-b border-base-400'>
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
                    #8
                    <span className='xl:block hidden'>on Product Hunt</span>
                    <span>
                        <Icons icon='ArrowNavbar' width={9} height={9} />
                    </span>
                </Link>
            </div>
            <div className='flex flex-row items-center gap-7'>
                <Link
                    href='https://forms.gle/3xG8ZkbApRvJjDoy6'
                    target='_blank'
                    className='text-base-800 xl:text-body-md text-body-sm hover:text-primary-500 hover:text-base-6 xl:block hidden'
                >
                    Request App
                </Link>
                <Link
                    href='/https://forms.gle/ny9eatUyZqXKejqn7'
                    target='_blank'
                    className='text-base-800 xl:text-body-md text-body-sm hover:text-primary-500 hover:text-base-6 xl:block hidden'
                >
                    Region Request
                </Link>

                <When condition={isLoggedIn}>
                    <If condition={loading}>
                        <Then>
                            <Skeleton circle width={20} height={20} />
                        </Then>
                        <Else>
                            <CollapseMenu
                                open={isOpenProfile}
                                onChange={setOpenProfile}
                                overlayClassName='xl:!w-fit xl:right-8 xl:!left-[initial] xl:!mt-[58px] !mt-[72px] '
                                overlay={
                                    <div id='profile' className='flex xl:justify-end flex-col w-full'>
                                        <Profile
                                            avatar={avatar}
                                            email={email}
                                            name={name}
                                            isLoading={loading}
                                            handleProfile={() => setOpenProfile(false)}
                                        />
                                    </div>
                                }
                            >
                                <If condition={loading}>
                                    <Then>
                                        <Skeleton circle width={20} height={20} />
                                    </Then>
                                    <Else>
                                        <div
                                            className={classNames(
                                                "bg-base-400 p-1.5 w-full h-full rounded-full transition-all duration-300",
                                                {
                                                    "border border-base-800": isOpenProfile
                                                }
                                            )}
                                        >
                                            <Image
                                                src={avatar as string}
                                                alt={name as string}
                                                width={20}
                                                height={20}
                                                className='rounded-full'
                                            />
                                        </div>
                                    </Else>
                                </If>
                            </CollapseMenu>
                        </Else>
                    </If>
                </When>
            </div>
        </div>
    )
}

export default Navbar
