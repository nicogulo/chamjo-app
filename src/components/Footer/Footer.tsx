import Container from "@components/Container"
import Icons from "@components/Icons"
import Link from "next/link"
import React from "react"

const Footer = () => {
    return (
        <footer className='max-xl:max-w-[375px] max-xl:mx-auto'>
            <Container>
                <div className='flex xl:flex-row flex-col xl:gap-[246px] gap-9 xl:pt-12 pt-[34px] xl:pb-16'>
                    <div className='flex flex-col xl:items-start items-center gap-6 xl:w-[414px]'>
                        <div className='flex flex-col xl:items-start items-center gap-4'>
                            <Link href='/' className=''>
                                <Icons icon='LogoChamjo' width={79} height={24} className='cursor-pointer' />
                            </Link>
                            <span className='xl:text-body-lg text-body-md text-base-800 xl:text-left text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.
                            </span>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Link href='https://x.com/chamjodesign' target='_blank'>
                                <Icons icon='Twitters' width={24} height={24} className='cursor-pointer' />
                            </Link>
                            <Link href='https://linkedin.com/company/chamjodesign/' target='_blank'>
                                <Icons icon='Linkedins' width={24} height={24} className='cursor-pointer' />
                            </Link>
                            <Link href='https://instagram.com/chamjodesign' target='_blank'>
                                <Icons icon='Instagrams' width={24} height={24} className='cursor-pointer' />
                            </Link>
                        </div>
                    </div>
                    <div className='flex xl:flex-row flex-col xl:items-start items-center xl:gap-[120px] gap-4'>
                        <div className='flex xl:flex-col flex-row xl:gap-3 gap-6'>
                            <Link
                                href='https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197'
                                target='_blank'
                            >
                                <span className='text-body-md text-base-800'>Contact Us</span>
                            </Link>
                            <Link
                                href='https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197'
                                target='_blank'
                            >
                                <span className='text-body-md text-base-800'>App Request</span>
                            </Link>
                            <Link
                                href='https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197'
                                target='_blank'
                            >
                                <span className='text-body-md text-base-800'>Region request</span>
                            </Link>
                        </div>
                        <div className='flex xl:flex-col flex-row gap-3'>
                            <Link
                                href='https://tulip-heaven-489.notion.site/Chamjo-Terms-and-Conditions-3fd51a28fa4144ed939b6eaa72aeb197'
                                target='_blank'
                            >
                                <span className='text-body-md text-base-800'>Terms & conditions</span>
                            </Link>
                            <Link
                                href='https://tulip-heaven-489.notion.site/Chamjo-Privacy-Policies-a019198a19d441fe9cc069dc223c9dc9'
                                target='_blank'
                            >
                                <span className='text-body-md text-base-800'>Privacy Policy</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
