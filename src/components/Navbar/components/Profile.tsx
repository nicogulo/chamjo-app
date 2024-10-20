import Icons from "@components/Icons"
import { Else, If, Then } from "@components/If"
import { supabaseSsrClient } from "@config/auth"
import toast from "@utils/toast"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Skeleton from "react-loading-skeleton"

interface Props {
    name?: string
    email?: string
    avatar?: string
    isLoading?: boolean
    handleProfile?: () => void
}

const Profile: React.FC<Props> = ({ name, email, avatar, isLoading, handleProfile }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const logout = async () => {
        try {
            setLoading(true)
            const { error } = await supabaseSsrClient.auth.signOut()
            if (error) {
                throw new Error(error.message)
            } else {
                toast.success("Logout success")
                router.push("/")

                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            }
            setLoading(false)
        } catch (err: any) {
            toast.error(err.message)
            setLoading(false)
        }
    }
    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className='flex flex-col gap-3 p-[18px]'>
                    <div className='relative flex flex-col items-center justify-center gap-2 border-b border-b-base-400 border-opacity-60 -mx-[18px] px-[18px]'>
                        <If condition={isLoading}>
                            <Then>
                                <Skeleton circle width={24} height={24} />
                            </Then>
                            <Else>
                                <div className='bg-base-400 rounded-full'>
                                    <Image
                                        src={avatar as string}
                                        alt={name as string}
                                        width={24}
                                        height={24}
                                        className='rounded-full m-1.5'
                                    />
                                </div>
                            </Else>
                        </If>
                        <Icons
                            icon='X'
                            width={24}
                            height={24}
                            wrapperClassname='cursor-pointer absolute top-0 right-[18px] text-base-600'
                            onClick={handleProfile}
                        />

                        <div className='flex flex-col gap-0.5 pb-5'>
                            <span className='text-body-lg font-medium text-base-900 text-center whitespace-nowrap overflow-hidden text-ellipsis'>
                                {name}
                            </span>
                            <span className='text-body-md font-normal text-base-700 text-center w-[187px] whitespace-nowrap overflow-hidden text-ellipsis'>
                                {email}
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col xl:items-start items-center border-b border-b-base-400 border-opacity-60 -mx-[18px] px-[18px] pb-2 xl:hidden'>
                        <Link href='https://forms.gle/3xG8ZkbApRvJjDoy6' target='_blank'>
                            <span className='text-body-md xl:text-base-900 text-base-800 hover:text-primary-500 py-3'>
                                App Request
                            </span>
                        </Link>
                        <Link href='/https://forms.gle/ny9eatUyZqXKejqn7' target='_blank'>
                            <span className='text-body-md xl:text-base-900 text-base-800 hover:text-primary-500 py-3'>
                                Region Request
                            </span>
                        </Link>
                    </div>
                    <div className='flex flex-col xl:items-start items-center border-b border-b-base-400 border-opacity-60 -mx-[18px] px-[18px] pb-2'>
                        <Link href='/terms-and-conditions' target='_blank'>
                            <span className='text-body-md xl:text-base-900 text-base-800 hover:text-primary-500 py-3'>
                                Terms & conditions
                            </span>
                        </Link>
                        <Link href='/privacy-policies' target='_blank'>
                            <span className='text-body-md xl:text-base-900 text-base-800 hover:text-primary-500 py-3'>
                                Privacy Policy
                            </span>
                        </Link>
                        <Link
                            href='https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197'
                            target='_blank'
                        >
                            <span className='text-body-md xl:text-base-900 text-base-800 hover:text-primary-500 py-3'>
                                Contact Us
                            </span>
                        </Link>
                    </div>
                    <div
                        className='flex flex-col xl:items-start items-center cursor-pointer xl:text-base-900 text-base-800 hover:text-primary-500 border-b border-b-base-400 border-opacity-60 -mx-[18px] px-[18px] pb-5'
                        onClick={logout}
                    >
                        <span className='text-body-md '>{loading ? "loading..." : "Logout"}</span>
                    </div>
                    <div className='flex flex-row gap-4 xl:justify-end justify-center'>
                        <Link href='https://x.com/chamjodesign' target='_blank'>
                            <Icons
                                icon='Twitters'
                                width={24}
                                height={24}
                                className='cursor-pointer text-base-600 hover:text-primary-400'
                            />
                        </Link>
                        <Link href='https://linkedin.com/company/chamjodesign/' target='_blank'>
                            <Icons
                                icon='Linkedins'
                                width={24}
                                height={24}
                                className='cursor-pointer text-base-600 hover:text-primary-400'
                            />
                        </Link>
                        <Link href='https://instagram.com/chamjodesign' target='_blank'>
                            <Icons
                                icon='Instagrams'
                                width={24}
                                height={24}
                                className='cursor-pointer text-base-600 hover:text-primary-400'
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Profile
