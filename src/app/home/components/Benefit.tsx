import React from "react"

import Container from "@components/Container"
import BenefitImage1 from "../images/benefit-1.webp"
import BenefitImage2 from "../images/benefit-2.webp"
import BenefitImage3 from "../images/benefit-3.webp"
import Image from "next/image"

const Benefit = () => {
    return (
        <section className='bg-base-50 xl:py-[120px] py-8' id='benefit'>
            <Container className='flex flex-col !items-center !justify-center xl:gap-[120px] gap-8'>
                <div className='flex xl:flex-row flex-col-reverse xl:items-center xl:justify-center xl:gap-6 gap-4'>
                    <div className='flex flex-col xl:gap-4 gap-2 xl:max-w-[417px] xl:max-h-[408px]'>
                        <span className='xl:text-heading-md text-body-2xl  font-semibold text-base-900'>
                            Benchmark your local app
                        </span>
                        <span className='xl:text-body-lg text-body-md text-base-800'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.
                        </span>
                    </div>
                    <div className=' flex justify-center items-center bg-base-200  xl:w-[417px] w-[343px] xl:h-[408px] h-[343px]  rounded-xl'>
                        <Image
                            src={BenefitImage1}
                            alt=''
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ height: "auto", width: "100%" }}
                        />
                    </div>
                </div>
                <div className='flex xl:flex-row-reverse flex-col-reverse xl:items-center xl:justify-center xl:gap-6 gap-8'>
                    <div className='flex flex-col xl:gap-4 gap-2 xl:max-w-[417px] xl:max-h-[408px]'>
                        <span className='xl:text-heading-md text-body-2xl  font-semibold text-base-900'>
                            Save time on benchmarking
                        </span>
                        <span className='xl:text-body-lg text-body-md text-base-800'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.
                        </span>
                    </div>
                    <div className=' flex justify-center items-center bg-base-200  xl:w-[415px] min-w-[343px] xl:h-[408px] h-[343px]  rounded-xl'>
                        <Image
                            src={BenefitImage2}
                            alt=''
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ height: "auto", width: "100%" }}
                        />
                    </div>
                </div>
                <div className='flex xl:flex-row flex-col-reverse xl:items-center xl:justify-center xl:gap-6 gap-8'>
                    <div className='flex flex-col xl:gap-4 gap-2 xl:max-w-[417px] xl:max-h-[408px]'>
                        <span className='xl:text-heading-md text-body-2xl  font-semibold text-base-900'>
                            Benchmark hard-to-discover flow
                        </span>
                        <span className='xl:text-body-lg text-body-md text-base-800'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.
                        </span>
                    </div>
                    <div className='relative flex justify-center items-center bg-base-200  xl:w-[416px] w-[343px] xl:h-[408px] h-[343px]  rounded-xl'>
                        <Image
                            src={BenefitImage3}
                            alt=''
                            unoptimized
                            width={0}
                            height={0}
                            className='absolute right-0 bottom-0 w-[95%] h-auto'
                            // style={{ height: "auto", width: "100%" }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Benefit
