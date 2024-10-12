"use client"

import React, { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import classNames from "classnames"
import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from "react-responsive"

import fetchAPI, { supabaseAuth } from "@config/auth"
import toast from "@utils/toast"
import useAuth, { useProfile } from "@hooks/useAuth"
import { getURL } from "@helpers/get-url"
import { Database } from "@utils/supabase"

import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import Button from "@components/Button"
import BottomSheet from "@components/BottomSheet"

import "./module.css"
import { removeClickedCard } from "./utils/clikced-card"
import ModalLogin from "./components/ModalLogin"
import CollapseMenu from "./components/CollapseMenu"

type CountryProps = Database["public"]["Tables"]["country"]["Row"]

const Navbar = () => {
    const router = useRouter()
    const [openModal, setOpenModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenProfile, setOpenProfile] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [bottomSheet, setBottomSheet] = useState(false)
    const [scrollPos, setScrollPos] = useState(0)
    const [showNav, setShowNav] = useState(true)
    const [country, setCountry] = useState<CountryProps[]>()
    const [selectedCountry, setSelectedCountry] = useState<string | null>("Indonesia")
    const [showCountry, setShowCountry] = useState(false)

    const { profile, loading } = useProfile()
    const { isLoggedIn } = useAuth()
    const isMobile = useMediaQuery({ maxWidth: "1066px" })

    const name = profile?.user_metadata.name
    const email = profile?.user_metadata.email
    const avatar = profile?.user_metadata.avatar_url

    const getCountry = async () => {
        try {
            const res = await fetchAPI({
                url: "/country",
                method: "GET",
                params: {
                    select: "*"
                }
            })
            setCountry(res?.data as CountryProps[])
        } catch (error) {
            console.log(error)
        }
    }

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

    const handleScroll = () => {
        if (dropdown) return

        const currentScrollPos = window.scrollY
        setShowNav(scrollPos > currentScrollPos || currentScrollPos < 100)
        setScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scrollPos, dropdown])

    useEffect(() => {
        if (openModal) {
            document.body.classList.add("overflow-hidden")
            document.body.classList.remove("overflow-auto")
        } else {
            document.body.classList.remove("overflow-hidden")
            document.body.classList.add("overflow-auto")
        }
    }, [openModal])

    useEffect(() => {
        getCountry()
    }, [])

    const itemNav = [
        {
            title: "Benefit"
        },
        {
            title: "Library"
        },
        {
            title: "Available Country"
        },
        {
            title: "FAQ"
        }
    ]

    return (
        <header className='relative flex justify-center'>
            <If condition={!isMobile}>
                <Then>
                    <div
                        className={classNames(
                            "flex items-center xl:gap-[72px] fixed top-5 z-50  h-[72px] py-0 px-8  bg-base-200 rounded-full transition-all duration-300",
                            {
                                "transform -translate-y-[130%]": !showNav
                            }
                        )}
                        style={{
                            backdropFilter: "blur(8px)"
                        }}
                    >
                        <Link href='/' className=''>
                            <Icons icon='LogoChamjo' width={79} height={24} className='cursor-pointer' />
                        </Link>
                        <div className='xl:flex hidden flex-row gap-6'>
                            {itemNav.map((item, index) => (
                                <div key={index} className='inline-block relative z-10'>
                                    <span className='font-sans font-normal text-sm !leading-[22px] text-base-800 hover:text-primary-5 cursor-pointer'>
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className='xl:flex hidden flex-row items-center gap-8'>
                            <CollapseMenu
                                open={showCountry}
                                onChange={setShowCountry}
                                overlay={
                                    <div className='flex flex-col gap-4 py-6 px-5 '>
                                        <span className='text-center font-sans font-medium text-base-900 text-[16px] !leading-[24px]'>
                                            Select app country
                                        </span>
                                        <div className='grid grid-cols-5 gap-4'>
                                            {country?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        router.replace(`?country=${item?.name}`, {
                                                            scroll: false
                                                        })
                                                        setSelectedCountry(item?.name)
                                                        setShowCountry(false)
                                                    }}
                                                    className='flex flex-col items-center p-5 bg-base-200 rounded-xl cursor-pointer'
                                                >
                                                    <p className='font-sans font-normal text-base-900 text-sm !leading-[24px]'>
                                                        {item?.name}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                            >
                                <div className='flex flex-row items-center gap-2 text-base-800 hover:text-primary-500 cursor-pointer'>
                                    <span className='font-sans font-normal text-sm !leading-[22px]'>
                                        {selectedCountry}
                                    </span>
                                    <Icons
                                        icon='ChevronDown'
                                        width={16}
                                        height={16}
                                        className={classNames("transition-transform duration-300 rotate-0 ", {
                                            "!rotate-180": showCountry
                                        })}
                                    />
                                </div>
                            </CollapseMenu>
                            <If condition={isLoggedIn}>
                                <Then>
                                    <div className='relative'>
                                        <div
                                            className={classNames(
                                                "after-login w-[80px] h-[40px] flex flex-row items-center px-2 py-2.5 bg-base-300 rounded-[48px] cursor-pointer ",
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
                                                className={classNames("rotate-90 text-base-800", {
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
                                                    className='w-[223px] h-[207px] overflow-hidden rounded flex-col absolute justify-center right-1.5 mt-1 top-full gap-[14px] bg-base-100 shadow-[0px_8px_44px_rgba(3,21,49,0.06)]'
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
                                                            <span className='text-[16px] font-medium text-base-900 leading-6 w-[187px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                                                {name}
                                                            </span>
                                                            <span className='text-[14px] font-normal text-base-800 leading-[22px]  w-[187px] whitespace-nowrap overflow-hidden text-ellipsis'>
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
                                        <span className='text-base-100 text-[14px] leading-6'>Login</span>
                                        <Icons
                                            icon='ArrowRightCircle'
                                            width={20}
                                            height={20}
                                            className='text-base-100'
                                        />
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
                    <div
                        className={classNames(
                            "flex items-center justify-between w-[375px] fixed z-50 top-3 py-3  px-4 bg-base-200 rounded-full transition-all duration-300",
                            {
                                "transform -translate-y-[130%]": !showNav,
                                "blur-0 rounded-none": dropdown
                            }
                        )}
                        style={{
                            backdropFilter: "blur(8px)"
                        }}
                    >
                        <Link href='/'>
                            <Icons icon='LogoChamjo' wrapperClassname='w-[66px] h-5' width={66} height={20} />
                        </Link>
                        <div className='flex flex-row items-center gap-3'>
                            <When condition={isLoggedIn}>
                                <div className='relative'>
                                    <div
                                        className={classNames(
                                            "w-[36px] h-[36px] flex flex-row items-center  bg-base-300 rounded-[48px] cursor-pointer",
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
                                                className='w-[343px] h-[207px] overflow-hidden rounded flex-col absolute justify-center right-[-48px] mt-1 top-full gap-[14px] bg-base-100'
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
                                                        <span className='text-[16px] font-medium text-base-900 leading-6 max-w-[307px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                                            {name}
                                                        </span>
                                                        <span className='text-sm font-normal text-base-800 !leading-[22px]  max-w-[307px] whitespace-nowrap overflow-hidden text-ellipsis'>
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
                                        <Icons icon='List' className='text-base-100' />
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
                                className='flex flex-col w- max-w-[375px] h-[100vh] z-40 pt-[72px] pb-4 fixed mx-auto left-0 right-0 bg-base-100 overflow-scroll'
                            >
                                <div className='w-full h-[1px] bg-base-300' />

                                {/* item navbar */}
                                <div className='flex flex-col gap-6 pt-6'>
                                    {itemNav.map((item, index) => (
                                        <p className='font-sans font-normal text-base-800 text-sm !leading-[24px] text-center'>
                                            {item.title}
                                        </p>
                                    ))}
                                </div>
                                {/* <CollapseMenu
                                    open={showCountry}
                                    onChange={setShowCountry}
                                    overlay={
                                        <div className='flex flex-col gap-4 py-6 px-5 '>
                                            <span className='text-center font-sans font-medium text-base-900 text-[16px] !leading-[24px]'>
                                                Select app country
                                            </span>
                                            <div className='grid grid-cols-5 gap-4'>
                                                {country?.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => {
                                                            router.replace(`?country=${item?.name}`, {
                                                                scroll: false})
                                                            setSelectedCountry(item?.name)
                                                            setShowCountry(false)
                                                        }}
                                                        className='flex flex-col items-center p-5 bg-base-200 rounded-xl cursor-pointer'
                                                    >
                                                        <p className='font-sans font-normal text-base-900 text-sm !leading-[24px]'>
                                                            {item?.name}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className='flex flex-row items-center justify-center pt-6 gap-2 text-base-800 hover:text-primary-500 cursor-pointer'>
                                        <span className='font-sans font-normal text-sm !leading-[22px]'>
                                            {selectedCountry}
                                        </span>
                                        <Icons
                                            icon='ChevronDown'
                                            width={16}
                                            height={16}
                                            className={classNames("transition-transform duration-300 rotate-0 ", {
                                                "!rotate-180": showCountry
                                            })}
                                        />
                                    </div>
                                </CollapseMenu> */}
                                <When condition={!isLoading}>
                                    <Button className='mt-6' onClick={signInWithGoogle}>
                                        <span className=' font-medium text-[14px] text-base-100 w-full'>Login</span>
                                        <Icons
                                            icon='ChevronLeft'
                                            width={20}
                                            height={20}
                                            className='text-base-100 rotate-180'
                                        />
                                    </Button>
                                </When>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <BottomSheet
                        open={bottomSheet}
                        onDismiss={() => setBottomSheet(false)}
                        contentClassName='max-h-[324px] !max-w-[375px]'
                        header={
                            <span className='font-medium text-3 leading-6 text-base-900 text-center'>
                                Login or Sign up
                            </span>
                        }
                    >
                        <div className='flex flex-col px-1.5 pt-1 gap-[18px]'>
                            <div className='flex flex-col gap-8 w-full'>
                                <div className='flex flex-col gap-4 items-center'>
                                    <Icons icon='IlusColor' width={134} height={67} />
                                    <span className='font-sans text-1 leading-[18px] text-base-700 text-center w-[288px]'>
                                        You can access and discover more app patterns by logging in or signing up
                                    </span>
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                    <Button
                                        className='!border-none !bg-base-400 !text-base-900 gap-2 text-2 justify-center font-sans !leading-[22px] hover:text-base-400'
                                        block
                                        onClick={signInWithGoogle}
                                    >
                                        <Icons icon='GoogleColor' />
                                        Continue with google
                                    </Button>
                                    <p className='text-base-700 text-1 font-sans text-center'>
                                        By continuing, you agree to our{" "}
                                        <span
                                            className='text-base-900 font-medium cursor-pointer'
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
                                            className='text-base-900 font-medium cursor-pointer'
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
