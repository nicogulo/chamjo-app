import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import classNames from "@utils/classnames"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from "react-responsive"

interface Props {
    name?: string
    email?: string
    avatar?: string
    isOpen?: boolean
    isLoading?: boolean
    logout?: () => void
    handleProfile?: () => void
}

const Profile: React.FC<Props> = ({ name, email, avatar, isOpen, isLoading, logout, handleProfile }) => {
    const isMobile = useMediaQuery({ maxWidth: 1066 })
    return (
        <When condition={isOpen}>
            <AnimatePresence>
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    id='profile'
                    className='xl:w-[223px] xl:h-[207px] w-[343px] h-[207px] overflow-hidden rounded flex-col absolute justify-center xl:right-1.5 right-[-48px] mt-1 top-full gap-[14px] bg-base-100 shadow-[0px_8px_44px_rgba(3,21,49,0.06)]'
                >
                    <div className='w-full relative bg-[#FABBAA] rounded-t py-3 px-[18px]'>
                        <If condition={isLoading}>
                            <Then>
                                <Skeleton circle width={isMobile ? 24 : 40} height={isMobile ? 24 : 40} />
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
                                        alt={name as string}
                                        width={isMobile ? 24 : 40}
                                        height={isMobile ? 24 : 40}
                                        className='rounded-full'
                                    />
                                </div>
                            </Else>
                        </If>
                        <Icons icon='Art1' width={33} height={38} wrapperClassname='absolute top-[22px] left-[78px]' />
                        <Icons icon='Art2' width={33} height={38} wrapperClassname='absolute top-[0px] left-[147px]' />
                        <Icons icon='Art3' width={33} height={38} wrapperClassname='absolute top-[38px] right-[14px]' />
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
                            <Icons icon='Logout' width={20} height={20} /> <p>{isLoading ? "loading..." : "Logout"}</p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </When>
    )
}

export default Profile
