import React, { useState } from "react"
import { If, Then } from "components/If/index"

import Icons from "components/Icons"
import { motion, AnimatePresence } from "framer-motion"
import { Inter } from "next/font/google"
import Button from "@components/Button"

const inter = Inter({ subsets: ["latin"] })

interface ModalLoginProps {
    signInWithGoogle: () => void
    openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalLogin = ({ signInWithGoogle, openModal, setOpenModal }: ModalLoginProps) => {
    return (
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
                            <div className='border-0 w-[438px] p-8  shadow-lg relative flex flex-col items-center justify-center gap-6  bg-base-1 outline-none focus:outline-none rounded-[8px]'>
                                <div className='w-full flex flex-col gap-2'>
                                    <Icons
                                        icon='X'
                                        wrapperClassname='!w-full !justify-end cursor-pointer '
                                        onClick={() => setOpenModal(false)}
                                    />
                                    <Icons
                                        icon='IlusColor'
                                        width={134}
                                        height={67}
                                        wrapperClassname='!w-full justify-center'
                                    />
                                </div>
                                <div className='flex flex-col gap-8 w-full'>
                                    <div className=' flex flex-col items-center gap-2'>
                                        <span className='font-medium text-5 leading-7 text-base-9 text-center'>
                                            Login or Sign up
                                        </span>
                                        <span
                                            className={`text-1 leading-[18px] text-base-6 ${inter.className} font-sans text-center w-[288px]`}
                                        >
                                            You can access and discover more app patterns by logging in or signing up
                                        </span>
                                    </div>
                                    <div className=' flex flex-col w-full gap-4'>
                                        <div className=' flex flex-row gap-3 items-center rounded-[4px] bg-base-2 border border-base-3 p-4'>
                                            <Icons icon='Shield' width={24} height={24} />
                                            <span
                                                className={`text-1 text-base-6 ${inter.className} font-sans font-normal`}
                                            >
                                                Chamjo uses{" "}
                                                <a
                                                    href='https://supabase.com/'
                                                    target='_blank'
                                                    className={`!text-[#22925F] !font-semibold ${inter.className} font-sans font-normal`}
                                                >
                                                    Supabase{" "}
                                                </a>
                                                to ensure security when continuing with Google
                                            </span>
                                        </div>
                                        <Button
                                            className={`!border-none !rounded  text-base-1 gap-2 text-2 justify-center ${inter.className} font-sans font-normal leading-[22px] hover:text-base-3`}
                                            block
                                            onClick={signInWithGoogle}
                                            height={46}
                                            variant='primary'
                                        >
                                            <Icons icon='GoogleIcon' />
                                            Continue with Google
                                        </Button>
                                        <p
                                            className={`text-base-6 text-1 ${inter.className} font-sans font-normal text-center`}
                                        >
                                            By continuing, you agree to our{" "}
                                            <span
                                                className={`text-base-9 font-medium cursor-pointer ${inter.className} font-sans font-normal`}
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
                                                className={`text-base-9 ${inter.className} font-sans font-medium cursor-pointer`}
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
    )
}

export default ModalLogin
