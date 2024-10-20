"use client"

import Button from "@components/Button"
import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import useAuth, { useProfile } from "@hooks/useAuth"
import { login } from "app/action"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from "react-responsive"

import "./module.css"

import CollapseMenu from "./components/CollapseMenu"
import ModalLogin from "./components/ModalLogin"
import Profile from "./components/Profile"

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)

    const [isOpenProfile, setOpenProfile] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [bottomSheet, setBottomSheet] = useState(false)
    const [scrollPos, setScrollPos] = useState(0)
    const [showNav, setShowNav] = useState(true)

    const { profile, loading } = useProfile()
    const { isLoggedIn } = useAuth()
    const isMobile = useMediaQuery({ maxWidth: "1066px" })

    const name = profile?.user_metadata.name
    const email = profile?.user_metadata.email
    const avatar = profile?.user_metadata.avatar_url

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const itemNav = [
        {
            title: "Benefit",
            link: "#benefit"
        },
        {
            title: "Library",
            link: "#library"
        },
        {
            title: "FAQ",
            link: "#faq"
        }
    ]

    const handleClickNav = (e: React.MouseEvent<HTMLSpanElement>, link: string) => {
        if (link.startsWith("#")) {
            e.preventDefault()
            const targetId = link.substring(1)
            const targetElement = document.getElementById(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" })
            }
        }
    }

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
                                    <Link href={item.link}>
                                        <span
                                            className='font-normal text-body-md text-base-800 hover:text-primary-500 cursor-pointer'
                                            onClick={(e) => handleClickNav(e, item.link)}
                                        >
                                            {item.title}
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className='xl:flex hidden flex-row items-center gap-8'>
                            <If condition={isLoggedIn}>
                                <Then>
                                    <CollapseMenu
                                        open={isOpenProfile}
                                        onChange={setOpenProfile}
                                        overlayClassName='!w-fit right-0 !left-[initial]'
                                        overlay={
                                            <div id='profile' className='flex justify-end w-full'>
                                                <Profile
                                                    avatar={avatar}
                                                    email={email}
                                                    name={name}
                                                    isLoading={loading}
                                                    handleProfile={handleProfile}
                                                />
                                            </div>
                                        }
                                    >
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
                                                                alt={name as string}
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
                                        </div>
                                    </CollapseMenu>
                                </Then>
                                <Else>
                                    <Button
                                        className=' flex flex-row items-center gap-1 py-3 !px-4'
                                        onClick={handleOpenModal}
                                    >
                                        <span className='text-base-100 text-body-md'>Login</span>
                                        <Icons icon='ChevronRight' width={16} height={16} className='text-base-100' />
                                    </Button>
                                </Else>
                            </If>
                        </div>
                    </div>

                    <When condition={openModal}>
                        <Then>
                            <ModalLogin
                                // signInWithGoogle={signInWithGoogle}
                                signInWithGoogle={login}
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
                                " rounded-none !bg-base-100": dropdown
                            }
                        )}
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
                                    <Profile
                                        avatar={avatar}
                                        email={email}
                                        name={name}
                                        isLoading={loading}
                                        handleProfile={handleProfile}
                                    />
                                </div>
                            </When>

                            <If condition={dropdown}>
                                <Then>
                                    <Button
                                        className='gap-2.5 rounded-[10px] w-9 h-9 !p-1 !border-none bg-base-800'
                                        width={36}
                                        height={36}
                                        style={{
                                            boxShadow: "0px 6px 12px -5px rgba(3, 21, 49, 0.25)",
                                            transition: "all 0.5s ease-out"
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
                                className='flex flex-col  max-w-[375px] h-[100vh] z-40 pt-[72px] pb-4 fixed mx-auto left-0 right-0 bg-base-100 overflow-scroll'
                            >
                                <div className='w-full h-[1px] bg-base-300' />

                                {/* item navbar */}

                                <div className='flex flex-col items-center gap-6 pt-6'>
                                    {itemNav.map((item, index) => (
                                        <Link href={item.link} key={index}>
                                            <span
                                                className='font-normal text-body-md text-base-800 hover:text-primary-500 text-center cursor-pointer'
                                                onClick={(e) => {
                                                    handleClickNav(e, item.link)
                                                    setDropdown(false)
                                                }}
                                            >
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>

                                <When condition={!isLoggedIn}>
                                    <Button
                                        className='mt-6'
                                        onClick={() => {
                                            setDropdown(false)
                                            setBottomSheet(true)
                                        }}
                                    >
                                        <span className=' font-medium text-[14px] text-base-100 w-full'>Login</span>
                                        <Icons icon='ChevronRight' width={16} height={16} className='text-base-100' />
                                    </Button>
                                </When>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <ModalLogin
                        // signInWithGoogle={signInWithGoogle}
                        signInWithGoogle={login}
                        openModal={bottomSheet}
                        setOpenModal={setBottomSheet}
                    />
                </Else>
            </If>
        </header>
    )
}

export default Navbar
