"use client"
import React, { useState } from "react"
import { Inter } from "next/font/google"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from "react-responsive"

import { supabase } from "@config/auth"
import toast from "@utils/toast"
import useAuth, { useProfile } from "@hooks/useAuth"

import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import Button from "@components/Button"
import { getURL } from "@helpers/get-url"

import "./module.css"
import { removeClickedCard } from "./utils/clikced-card"
import ModalLogin from "./components/ModalLogin"

const inter = Inter({ subsets: ["latin"] })

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenProfile, setOpenProfile] = useState(false)

    const { profile, loading } = useProfile()
    const { isLoggedIn } = useAuth()
    const isMobile = useMediaQuery({ maxWidth: "1066px" })

    const name = profile?.user_metadata.name
    const email = profile?.user_metadata.email
    const avatar = profile?.user_metadata.avatar_url

    const signInWithGoogle = async () => {
        const { error, data } = await supabase.auth.signInWithOAuth({
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

    const logout = async () => {
        try {
            setIsLoading(true)
            const { error } = await supabase.auth.signOut()
            if (error) {
                throw new Error(error.message)
            } else {
                toast.success("Logout success")

                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
            setIsLoading(false)
        } catch (err: any) {
            toast.error(err.message)
            setIsLoading(false)
        }
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const handleProfile = () => {
        setOpenProfile(!isOpenProfile)
    }

    const itemNav = [
        {
            title: "About Us",
            item: [
                {
                    id: 1,
                    title: "Introduction",
                    url: "https://tulip-heaven-489.notion.site/About-us-9ad473de875b47bbbdeeb5fb6f55e941"
                },
                {
                    id: 2,
                    title: "Contributor",
                    url: "https://tulip-heaven-489.notion.site/Say-hello-to-Champions-9c057e9bf835424c859bf27733e6362f"
                },
                {
                    id: 3,
                    title: "Change Log",
                    url: "https://tulip-heaven-489.notion.site/2022-3-What-s-up-Chamjo-f17e95f5729843f2a1a83cac833caccc"
                },
                {
                    id: 4,
                    title: "T&Cs",
                    url: "https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197"
                },
                {
                    id: 5,
                    title: "Privacy Policies",
                    url: "https://tulip-heaven-489.notion.site/Chamjo-Privacy-Policies-a019198a19d441fe9cc069dc223c9dc9"
                }
            ]
        },
        {
            title: "Support",
            item: [
                {
                    id: 1,
                    title: "Buy us a coffee",
                    url: "https://linktr.ee/supportchamjo"
                },
                {
                    id: 2,
                    title: "Follow us",
                    url: "https://linktr.ee/chamjodesign"
                }
            ]
        }
    ]
    return (
        <header className='relative'>
            <div className='flex fixed left-0 right-0 top-0  z-50 justify-between h-[72px] py-0 pl-6 pr-[40px]  bg-base-1 transition-all duration-300'>
                <div className='inline-flex items-center gap-1.5'>
                    <div className='flex flex-row gap-3 items-center'>
                        <Icons icon='LogoChamjo' width={79} height={24} />
                        <p className='opacity-50 flex flex-row text-base-4'>&#x2022;</p>
                        <Image src='/next/assets/images/star.svg' alt='' width={24} height={24} />
                    </div>

                    <a
                        href='https://www.producthunt.com/products/chamjo#chamjo'
                        target='_blank'
                        className={`${inter.style} font-sans font-normal text-base-7 text-sm !leading-[22px] hover:text-base-6 flex flex-row items-center gap-0.5`}
                    >
                        #8 on Product Hunt
                        <span>
                            <Icons icon='ArrowNavbar' width={9} height={9} />
                        </span>
                    </a>
                </div>

                <div className='inline-flex items-center gap-6'>
                    {itemNav.map((item, index) => (
                        <div
                            key={index}
                            className='inline-block relative z-10 dropdown'
                            id={item.title === "About Us" ? "about" : ""}
                        >
                            <span
                                className={`${inter.style} font-sans font-normal text-sm !leading-[22px] text-base-7 hover:text-primary-5 cursor-pointer`}
                            >
                                {item.title}
                            </span>
                            <ul className='dropdown-menu rounded-xl list-none py-3 px-[18px] hidden flex-col absolute justify-center ml-[-50px] gap-[14px] bg-base-1'>
                                {item.item.map((subItem, index) => (
                                    <li key={index} className='list-link'>
                                        <span
                                            className='link-a'
                                            onClick={() => {
                                                window.open(subItem.url, "popup", "width=600, height=600")
                                            }}
                                        >
                                            {subItem.title}
                                            <Icons icon='ArrowNavbar' width={9} height={9} />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <span
                        className={`${inter.style} font-sans font-normal text-sm !leading-[22px] text-base-7 hover:text-primary-5 cursor-pointer`}
                        onClick={() => {
                            if (!isLoggedIn) {
                                setOpenModal(true)
                            } else {
                                window.open("https://forms.gle/DxFDvVu3irnTW6u58", "popup", "width=600, height=600")
                            }
                        }}
                    >
                        Request
                    </span>
                    <span
                        className={`${inter.style} font-sans font-normal text-sm !leading-[22px] text-base-7 hover:text-primary-5 cursor-pointer`}
                        onClick={() => {
                            if (!isLoggedIn) {
                                setOpenModal(true)
                            } else {
                                window.open("https://t.me/designfellowid", "popup", "width=600, height=600")
                            }
                        }}
                    >
                        Join Comunity
                    </span>
                    <If condition={isLoggedIn}>
                        <Then>
                            <div className='relative'>
                                <div
                                    className={classNames(
                                        "after-login w-[80px] h-[40px] flex flex-row items-center px-2 py-2.5 bg-base-3 rounded-[48px] cursor-pointer ",
                                        {
                                            "bg-primary-5 bg-opacity-[8%]": isOpenProfile
                                        }
                                    )}
                                    onClick={handleProfile}
                                >
                                    <div className='pr-1 w-full h-full'>
                                        <If condition={loading}>
                                            <Then>
                                                <Skeleton circle width={20} height={20} />
                                            </Then>
                                            <Else>
                                                <Image
                                                    src={avatar as string}
                                                    alt={name}
                                                    width={20}
                                                    height={20}
                                                    className='rounded-full'
                                                />
                                            </Else>
                                        </If>
                                    </div>

                                    <Icons
                                        icon='ArrowRightCircle'
                                        width={20}
                                        height={20}
                                        wrapperClassname={classNames(
                                            "iconsClassName pl-1 border-l border-l-base-4 border-opacity-30 w-full h-full transition-all ease-in-out",
                                            {
                                                "!border-l-primary-4": isOpenProfile
                                            }
                                        )}
                                        className={classNames("rotate-90 text-base-5", {
                                            "!text-primary-4 !rotate-[-90deg]": isOpenProfile
                                        })}
                                    />
                                </div>
                                <When condition={isOpenProfile}>
                                    <AnimatePresence>
                                        <motion.div
                                            initial={{ y: -50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -50, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            // isOpenProfile={isOpenProfile}
                                            id='profile'
                                            className='w-[223px] h-[207px] overflow-hidden rounded flex-col absolute justify-center right-1.5 mt-1 top-full gap-[14px] bg-base-1 shadow-[ 0px 8px 44px rgba(3, 21, 49, 0.06)]'
                                        >
                                            <div className='w-full relative bg-[#FABBAA] rounded-t py-3 px-[18px]'>
                                                <If condition={loading}>
                                                    <Then>
                                                        <Skeleton circle width={40} height={40} />
                                                    </Then>
                                                    <Else>
                                                        <div
                                                            className='w-10 h-10 rounded-full'
                                                            style={{
                                                                border: "4px solid rgba(0, 0, 0, 0.05)"
                                                            }}
                                                        >
                                                            <Image
                                                                src={avatar as string}
                                                                alt={name}
                                                                width={40}
                                                                height={40}
                                                                className='rounded-full'
                                                            />
                                                        </div>
                                                    </Else>
                                                </If>
                                                <Icons
                                                    icon='Art1'
                                                    width={33}
                                                    height={38}
                                                    wrapperClassname='absolute top-[22px] left-[78px]'
                                                />
                                                <Icons
                                                    icon='Art2'
                                                    width={33}
                                                    height={38}
                                                    wrapperClassname='absolute top-[0px] left-[147px]'
                                                />
                                                <Icons
                                                    icon='Art3'
                                                    width={33}
                                                    height={38}
                                                    wrapperClassname='absolute top-[38px] right-[14px]'
                                                />
                                            </div>
                                            <div className='flex flex-col p-[18px]'>
                                                <div className='flex flex-col gap-0.5 pb-3.5 border-b border-b-base-3'>
                                                    <span className='text-[16px] font-medium text-base-8 leading-6 w-[187px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                                        {name}
                                                    </span>
                                                    <span className='text-[14px] font-normal text-base-7 leading-[22px]  w-[187px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                                        {email}
                                                    </span>
                                                </div>

                                                <div
                                                    className='action flex flex-row items-center gap-3.5 pt-3.5 cursor-pointer'
                                                    onClick={logout}
                                                >
                                                    <Icons icon='LogoutNormal' width={20} height={20} />{" "}
                                                    <p>{isLoading ? "loading..." : "Logout"}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </When>
                            </div>
                        </Then>
                        <Else>
                            <Button
                                className=' flex flex-row items-center gap-[10px] pl-3 pr-3.5 py-1'
                                onClick={handleOpenModal}
                            >
                                <span className='text-base-1 text-[14px] leading-6'>Login</span>
                                <Icons icon='ArrowRightCircle' width={20} height={20} className='text-base-1' />
                            </Button>
                        </Else>
                    </If>
                </div>
            </div>
            <If condition={!isMobile}>
                <When condition={openModal}>
                    <Then>
                        <ModalLogin
                            signInWithGoogle={signInWithGoogle}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    </Then>
                </When>
            </If>
        </header>
    )
}

export default Navbar
