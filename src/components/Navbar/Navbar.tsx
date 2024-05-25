"use client"
import React, { useState } from "react"
import { Inter } from "next/font/google"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from "react-responsive"

import { supabaseAuth } from "@config/auth"
import toast from "@utils/toast"
import useAuth, { useProfile } from "@hooks/useAuth"

import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import Button from "@components/Button"
import { getURL } from "@helpers/get-url"

import "./module.css"
import { removeClickedCard } from "./utils/clikced-card"
import ModalLogin from "./components/ModalLogin"
import Link from "next/link"
import BottomSheet from "@components/BottomSheet"

const inter = Inter({ subsets: ["latin"] })

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenProfile, setOpenProfile] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [bottomSheet, setBottomSheet] = useState(false)

    const { profile, loading } = useProfile()
    const { isLoggedIn } = useAuth()
    const isMobile = useMediaQuery({ maxWidth: "1066px" })

    const name = profile?.user_metadata.name
    const email = profile?.user_metadata.email
    const avatar = profile?.user_metadata.avatar_url

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

    const logout = async () => {
        try {
            setIsLoading(true)
            const { error } = await supabaseAuth.auth.signOut()
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
        setDropdown(false)
        setOpenProfile(!isOpenProfile)
    }

    const itemNav = [
        {
            title: "About us",
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
                    title: "Privacy policies",
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
            <If condition={!isMobile}>
                <Then>
                    <div className='flex justify-between fixed left-0 right-0 top-0  z-50  h-[72px] py-0 pl-8 pr-[40px]  bg-base-1 transition-all duration-300 xl:max-w-full max-w-[375px]'>
                        <div className='inline-flex items-center gap-1.5'>
                            <div className='flex flex-row gap-3 items-center'>
                                <Icons icon='LogoChamjo' width={79} height={24} />
                                <p className='opacity-50 flex flex-row text-base-4'>&#x2022;</p>
                                <Image src='/next/assets/images/star.svg' alt='' width={24} height={24} />
                            </div>

                            <Link
                                href='https://www.producthunt.com/products/chamjo#chamjo'
                                target='_blank'
                                className={`${inter.className} font-sans font-normal text-base-7 text-sm !leading-[22px] hover:text-base-6 hidden xl:flex flex-row items-center gap-1 `}
                            >
                                #8 on Product Hunt
                                <span>
                                    <Icons icon='ArrowNavbar' width={9} height={9} />
                                </span>
                            </Link>
                        </div>

                        <div className='xl:inline-flex hidden items-center gap-6'>
                            {itemNav.map((item, index) => (
                                <div
                                    key={index}
                                    className='inline-block relative z-10 dropdown'
                                    id={item.title === "About Us" ? "about" : ""}
                                >
                                    <span
                                        className={`${inter.className} font-sans font-normal text-sm !leading-[22px] text-base-7 hover:text-primary-5 cursor-pointer`}
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
                                className={`${inter.className} font-sans font-normal text-sm !leading-[22px] text-base-7 hover:text-primary-5 cursor-pointer`}
                                onClick={() => {
                                    if (!isLoggedIn) {
                                        setOpenModal(true)
                                    } else {
                                        window.open(
                                            "https://forms.gle/DxFDvVu3irnTW6u58",
                                            "popup",
                                            "width=600, height=600"
                                        )
                                    }
                                }}
                            >
                                Request
                            </span>
                            <span
                                className={`${inter.className} font-sans font-normal text-sm !leading-[22px] text-base-7 hover:text-primary-5 cursor-pointer`}
                                onClick={() => {
                                    if (!isLoggedIn) {
                                        setOpenModal(true)
                                    } else {
                                        window.open("https://t.me/designfellowid", "popup", "width=600, height=600")
                                    }
                                }}
                            >
                                Join Community
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
                                                            <Icons icon='Logout' width={20} height={20} />{" "}
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
                                        className=' flex flex-row items-center gap-[10px] pl-4 pr-3.5 py-1'
                                        onClick={handleOpenModal}
                                    >
                                        <span className='text-base-1 text-[14px] leading-6'>Login</span>
                                        <Icons icon='ArrowRightCircle' width={20} height={20} className='text-base-1' />
                                    </Button>
                                </Else>
                            </If>
                        </div>
                    </div>

                    <When condition={openModal}>
                        <Then>
                            <ModalLogin
                                signInWithGoogle={signInWithGoogle}
                                openModal={openModal}
                                setOpenModal={setOpenModal}
                            />
                        </Then>
                    </When>
                </Then>
                <Else>
                    <div className='flex justify-between py-3.5 px-4 my-0 mx-auto fixed left-0 right-0 bg-base-1 z-50  '>
                        <div className='inline-flex items-center gap-1.5'>
                            <div className='flex flex-row gap-2 items-center'>
                                {/* <Link href='/'> */}
                                <Icons icon='LogoChamjo' wrapperClassname='w-[66px] h-5' width={66} height={20} />
                                {/* </Link> */}
                                <p className='opacity-50 flex flex-row text-base-4'>&#x2022;</p>
                                <Image src='/next/assets/images/star.svg' alt='' width={24} height={24} />
                            </div>

                            <Link
                                href='https://www.producthunt.com/products/chamjo#chamjo'
                                target='_blank'
                                className={`${inter.className} font-sans font-normal text-base-7 text-sm !leading-[22px] hover:text-base-6  flex-row items-center gap-0.5 `}
                            >
                                #8{" "}
                                <span>
                                    <Icons icon='ArrowNavbar' width={9} height={9} />
                                </span>
                            </Link>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <When condition={isLoggedIn}>
                                <div className='relative'>
                                    <div
                                        className={classNames(
                                            "w-[36px] h-[36px] flex flex-row items-center  bg-base-3 rounded-[48px] cursor-pointer",
                                            {
                                                "bg-primary-5 border border-primary-4 bg-opacity-[8%]": isOpenProfile
                                            }
                                        )}
                                        onClick={handleProfile}
                                    >
                                        <If condition={loading}>
                                            <Then>
                                                <div className='flex items-center justify-center w-full h-full '>
                                                    <Skeleton circle width={20} height={20} />
                                                </div>
                                            </Then>
                                            <Else>
                                                <div className='flex items-center justify-center w-full h-full '>
                                                    <Image
                                                        src={avatar as string}
                                                        alt={name}
                                                        width={24}
                                                        height={24}
                                                        className='rounded-full'
                                                    />
                                                </div>
                                            </Else>
                                        </If>
                                    </div>
                                    <AnimatePresence>
                                        {isOpenProfile && (
                                            <motion.div
                                                initial={{ y: -50, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -50, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className='w-[343px] h-[207px] overflow-hidden rounded flex-col absolute justify-center right-[-48px] mt-1 top-full gap-[14px] bg-base-1'
                                                id='profile'
                                                style={{
                                                    boxShadow: "0px 8px 44px rgba(3, 21, 49, 0.06);"
                                                }}
                                            >
                                                <div className='w-full relative bg-[#FABBAA] rounded-t py-3 px-[18px]'>
                                                    <If condition={loading}>
                                                        <Then>
                                                            <div className='flex items-center justify-center w-full h-full '>
                                                                <Skeleton circle width={40} height={40} />
                                                            </div>
                                                        </Then>
                                                        <Else>
                                                            <Image
                                                                src={avatar as string}
                                                                alt={name}
                                                                width={24}
                                                                height={24}
                                                                className='rounded-full'
                                                            />
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
                                                <div className='flex flex-col p-[18px] '>
                                                    <div className='flex flex-col gap-0.5 pb-3.5 border-b border-b-base-3'>
                                                        <span className='text-[16px] font-medium text-base-8 leading-6 max-w-[307px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                                            {name}
                                                        </span>
                                                        <span className='text-sm font-normal text-base-7 !leading-[22px]  max-w-[307px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                                            {email}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className='action flex flex-row items-center gap-3.5 pt-3.5 cursor-pointer'
                                                        onClick={logout}
                                                    >
                                                        <Icons icon='Logout' width={20} height={20} />{" "}
                                                        <p>{isLoading ? "loading..." : "Logout"}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </When>

                            <If condition={dropdown}>
                                <Then>
                                    <Button
                                        className='gap-2.5 rounded-[10px] w-9 h-9 !p-1 !border-none'
                                        width={36}
                                        height={36}
                                        style={{
                                            boxShadow: "0px 6px 12px -5px rgba(3, 21, 49, 0.25)",
                                            transition: "all 0.5s ease-out",
                                            backgroundColor: "#031531"
                                        }}
                                        onClick={() => setDropdown(false)}
                                    >
                                        <Icons icon='Close' width={12} height={12} />
                                    </Button>
                                </Then>
                                <Else>
                                    <Button
                                        className='gap-2.5 rounded-[10px] w-9 h-9 !p-1 !border-none'
                                        width={36}
                                        height={36}
                                        style={{
                                            boxShadow: "#E0634340",
                                            transition: "all 0.5s ease-out",
                                            backgroundColor: "#E06343"
                                        }}
                                        onClick={() => {
                                            setOpenProfile(false)
                                            setDropdown(true)
                                        }}
                                    >
                                        <Icons icon='More' />
                                    </Button>
                                </Else>
                            </If>
                        </div>
                    </div>
                    <AnimatePresence>
                        {dropdown && (
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className='flex flex-col w-full h-[100vh] z-40 max-w-[375px] pt-[64px] pb-4 fixed mx-auto left-0 right-0  bg-base-1 overflow-scroll'
                            >
                                <div className='w-full h-1.5 bg-base-2' />
                                <If condition={!isLoggedIn}>
                                    <Then>
                                        <div className='flex flex-col gap-4 py-6 px-5'>
                                            <Button
                                                className='!px-3.5  !rounded-lg !flex-row !justify-center relative'
                                                onClick={signInWithGoogle}
                                                style={{
                                                    boxShadow: "0px 6px 12px -5px rgba(224, 99, 67, 0.25)",
                                                    height: 39
                                                }}
                                            >
                                                <span className=' font-medium text-[14px] text-[#fff] w-full'>
                                                    Login
                                                </span>
                                                <Icons icon='ArrowRightCircle' width={20} height={20} />
                                            </Button>
                                        </div>
                                        <div className='w-[90%] h-[1px] bg-base-2 mx-auto' />
                                    </Then>
                                </If>
                                {/* item navbar */}

                                {itemNav.map((item, index) => (
                                    <>
                                        <div className='flex flex-col gap-4 py-6 px-5'>
                                            <p
                                                className={`${inter.className} font-sans font-normal text-base-5 text-sm !leading-[24px]`}
                                            >
                                                {item.title}
                                            </p>
                                            <ul className='list-none p-0 flex flex-col gap-4'>
                                                {item.item.map((subItem, index) => (
                                                    <a
                                                        key={index}
                                                        className={`w-full ${inter.className} font-sans font-normal text-base-7 text-sm !leading-[22px] flex justify-between items-center cursor-pointer hover:text-primary-5 active:text-primary-5 focus:text-primary-5`}
                                                    >
                                                        {subItem.title === "T&Cs"
                                                            ? "Terms and conditions"
                                                            : subItem.title}
                                                        <Icons icon='ArrowNavbar' width={9} height={9} />
                                                    </a>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='w-[90%] h-[1px] bg-base-2 mx-auto' />
                                    </>
                                ))}
                                <div className='flex flex-col gap-4 py-6 px-5'>
                                    <p
                                        className={`${inter.className} font-sans font-normal text-base-5 text-sm !leading-[24px]`}
                                    >
                                        More
                                    </p>
                                    <ul className='list-none p-0 flex flex-col gap-4'>
                                        <a
                                            className={`w-full ${inter.className} font-sans font-normal text-base-7 text-sm !leading-[22px] flex justify-between items-center cursor-pointer hover:text-primary-5 active:text-primary-5 focus:text-primary-5`}
                                            onClick={() => {
                                                if (!isLoggedIn) {
                                                    setDropdown(false)
                                                    setBottomSheet(true)
                                                } else {
                                                    window.open(
                                                        "https://forms.gle/DxFDvVu3irnTW6u58",
                                                        "popup",
                                                        "width=600, height=600"
                                                    )
                                                }
                                            }}
                                        >
                                            Request <Icons icon='ArrowNavbar' width={9} height={9} />
                                        </a>
                                    </ul>
                                    <ul className='list-none p-0 flex flex-col gap-4'>
                                        <a
                                            className={`w-full ${inter.className} font-sans font-normal text-base-7 text-sm !leading-[22px] flex justify-between items-center cursor-pointer hover:text-primary-5 active:text-primary-5 focus:text-primary-5`}
                                            onClick={() => {
                                                if (!isLoggedIn) {
                                                    setDropdown(false)
                                                    setBottomSheet(true)
                                                } else {
                                                    window.open(
                                                        "https://t.me/designfellowid",
                                                        "popup",
                                                        "width=600, height=600"
                                                    )
                                                }
                                            }}
                                        >
                                            Join Community <Icons icon='ArrowNavbar' width={9} height={9} />
                                        </a>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <BottomSheet
                        open={bottomSheet}
                        onDismiss={() => setBottomSheet(false)}
                        contentClassName='max-h-[324px] !max-w-[375px]'
                        header={
                            <span className='font-medium text-3 leading-6 text-base-9 text-center'>
                                Login or Sign up
                            </span>
                        }
                    >
                        <div className='flex flex-col px-1.5 pt-1 gap-[18px]'>
                            <div className='flex flex-col gap-8 w-full'>
                                <div className='flex flex-col gap-4 items-center'>
                                    <Icons icon='IlusColor' width={134} height={67} />
                                    <span
                                        className={`${inter.className} font-sans text-1 leading-[18px] text-base-6 text-center w-[288px]`}
                                    >
                                        You can access and discover more app patterns by logging in or signing up
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <Button
                                        className={`!border-none !bg-base-3 !text-base-9 gap-2 text-2 justify-center ${inter.className} font-sans !leading-[22px] hover:text-base-3`}
                                        block
                                        onClick={signInWithGoogle}
                                    >
                                        <Icons icon='GoogleColor' />
                                        Continue with google
                                    </Button>
                                    <p className={`text-base-6 text-1 ${inter.className} font-sans text-center`}>
                                        By continuing, you agree to our{" "}
                                        <span
                                            className='text-[#424242] font-medium cursor-pointer'
                                            onClick={() => {
                                                window.open(
                                                    "https://tulip-heaven-489.notion.site/Chamjo-Privacy-Policies-a019198a19d441fe9cc069dc223c9dc9",
                                                    "popup",
                                                    "width=600, height=600"
                                                )
                                            }}
                                        >
                                            Privacy Policy
                                        </span>{" "}
                                        and{" "}
                                        <span
                                            className='text-[#424242] font-medium cursor-pointer'
                                            onClick={() => {
                                                window.open(
                                                    "https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197",
                                                    "popup",
                                                    "width=600, height=600"
                                                )
                                            }}
                                        >
                                            T&Cs
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </BottomSheet>
                </Else>
            </If>
        </header>
    )
}

export default Navbar
