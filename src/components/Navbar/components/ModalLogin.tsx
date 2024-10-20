"use client"
import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "react-responsive"

import toast from "@utils/toast"

import { If, Then, Else } from "components/If/index"
import Icons from "components/Icons"
import Button from "@components/Button"
import BottomSheet from "@components/BottomSheet"

interface ModalLoginProps {
    signInWithGoogle: () => void
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalLogin = ({ signInWithGoogle, openModal, setOpenModal }: ModalLoginProps) => {
    const [loading, setLoading] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: "1066px" })

    const handleLogin = async () => {
        try {
            setLoading(true)
            toast.loading("Please wait...")
            await signInWithGoogle()
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error("Failed to login")
        }
    }

    return (
        <If condition={isMobile}>
            <Then>
                <BottomSheet
                    open={openModal}
                    onDismiss={() => setOpenModal(false)}
                    header={
                        <>
                            <span className='font-medium text-body-lg leading-6 text-base-900 text-center'>
                                Login or Sign up
                            </span>
                            <Icons
                                icon='X'
                                width={24}
                                height={24}
                                wrapperClassname='cursor-pointer absolute right-[18px] text-base-600'
                                onClick={() => setOpenModal(false)}
                            />
                        </>
                    }
                >
                    <div className='flex flex-col px-1.5 pt-1 gap-[18px]'>
                        <div className='flex flex-col gap-8 w-full'>
                            <div className='flex flex-col gap-4 items-center'>
                                <Icons icon='IlusColor' width={72} height={72} />
                                <span className='text-body-sm text-base-700 text-center w-[288px]'>
                                    You can access and discover more app patterns by logging in or signing up
                                </span>
                            </div>
                            <div className='flex flex-col w-full items-center gap-4'>
                                <div className=' flex flex-row gap-3 items-center rounded-[4px] bg-base-300 border border-base-400 p-4'>
                                    <Icons icon='Shield' width={24} height={24} />
                                    <span className='text-body-sm text-base-700 font-normal'>
                                        Chamjo uses{" "}
                                        <span>
                                            <Link
                                                href='https://supabase.com/'
                                                target='_blank'
                                                className='!text-[#22925F] !font-semibold w-fit'
                                            >
                                                Supabase{" "}
                                            </Link>
                                        </span>
                                        to ensure security when continuing with Google
                                    </span>
                                </div>
                                <Button
                                    className='!border-none  text-base-100 gap-2 xl:text-body-md text-body-sm justify-center hover:text-base-3'
                                    block
                                    onClick={handleLogin}
                                    height={46}
                                    variant='primary'
                                    loading={loading}
                                    disabled={loading}
                                >
                                    <Icons icon='GoogleIcon' />
                                    Continue with Google
                                </Button>
                                <p className='text-base-700 text-body-sm text-center'>
                                    By continuing, you agree to our{" "}
                                    <Link className='text-base-900 font-medium cursor-pointer' href='/privacy-policy'>
                                        Privacy Policy
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href='/terms-and-conditions'
                                        className='text-base-900 font-medium cursor-pointer'
                                    >
                                        T&Cs
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </BottomSheet>
            </Then>
            <Else>
                <AnimatePresence>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div
                            className=' fixed opacity-80 inset-0 z-0'
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.5)"
                            }}
                            onClick={() => setOpenModal(false)}
                        ></div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='relative w-auto my-6 mx-auto'
                        >
                            <If condition={openModal}>
                                <Then>
                                    <div className='border-0 w-[438px] p-8  shadow-lg relative flex flex-col items-center justify-center gap-6  bg-base-100 outline-none focus:outline-none rounded-lg'>
                                        <div className='w-full flex flex-col gap-2'>
                                            <Icons
                                                icon='X'
                                                width={24}
                                                height={24}
                                                wrapperClassname='!w-full !justify-end cursor-pointer text-base-600'
                                                onClick={() => setOpenModal(false)}
                                            />
                                            <Icons
                                                icon='IlusColor'
                                                width={72}
                                                height={72}
                                                wrapperClassname='!w-full justify-center'
                                            />
                                        </div>
                                        <div className='flex flex-col gap-8 w-full'>
                                            <div className=' flex flex-col items-center gap-2'>
                                                <span className='xl:text-body-2xl text-body-lg text-base-900 text-center'>
                                                    Login or Sign up
                                                </span>
                                                <span className='xl:text-body-sm text-body-xs text-base-700 font-sans text-center w-[288px]'>
                                                    You can access and discover more app patterns by logging in or
                                                    signing up
                                                </span>
                                            </div>
                                            <div className=' flex flex-col w-full gap-4'>
                                                <div className=' flex flex-row gap-3 items-center rounded-[4px] bg-base-300 border border-base-400 p-4'>
                                                    <Icons icon='Shield' width={24} height={24} />
                                                    <span className='xl:text-body-sm text-body-xs text-base-700 font-sans font-normal'>
                                                        Chamjo uses{" "}
                                                        <span>
                                                            <Link
                                                                href='https://supabase.com/'
                                                                target='_blank'
                                                                className='!text-[#22925F] !font-semibold font-sans w-fit'
                                                            >
                                                                Supabase{" "}
                                                            </Link>
                                                        </span>
                                                        to ensure security when continuing with Google
                                                    </span>
                                                </div>
                                                <Button
                                                    className='!border-none text-base-100 gap-2 xl:text-body-md text-body-sm justify-center hover:text-base-3'
                                                    block
                                                    onClick={handleLogin}
                                                    height={46}
                                                    variant='primary'
                                                    loading={loading}
                                                    disabled={loading}
                                                >
                                                    <Icons icon='GoogleIcon' />
                                                    Continue with Google
                                                </Button>
                                                <p className='text-base-700 text-body-sm  font-sans font-normal text-center'>
                                                    By continuing, you agree to our{" "}
                                                    <span
                                                        className='text-base-900 font-medium cursor-pointer '
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
                                                        className='text-base-900 font-sans font-medium cursor-pointer'
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
                                </Then>
                            </If>
                        </motion.div>
                    </div>
                </AnimatePresence>
            </Else>
        </If>
    )
}

export default ModalLogin
