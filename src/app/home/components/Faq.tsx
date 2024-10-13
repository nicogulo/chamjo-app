"use client"

import React, { useState } from "react"

import Container from "@components/Container"
import classNames from "@utils/classnames"
import { useCollapse } from "react-collapsed"
import Icons from "@components/Icons"

interface CollapseProps {
    title: string
    isExpanded: boolean
    onToggle: () => void
    children: React.ReactNode
}

const Collapse = ({ title, isExpanded, onToggle, children }: CollapseProps) => {
    const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded })

    return (
        <div
            className={classNames("flex flex-col w-full bg-base-50 py-6 px-8 rounded-xl", {
                "gap-2": isExpanded
            })}
        >
            <div
                className='flex items-center justify-between w-full cursor-pointer '
                onClick={getToggleProps({ onClick: onToggle }).onClick}
            >
                <span className='text-body-xl font-semibold text-base-900'>{title}</span>
                <Icons
                    icon='ChevronDown'
                    width={20}
                    height={20}
                    className='transform transition-transform duration-300'
                    style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </div>
            <div {...getCollapseProps()} className='text-body-lg text-base-800'>
                {children}
            </div>
        </div>
    )
}

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    const faqs = [
        {
            question: "What is Chamjo?",
            answer: "Chamjo is a screenshot and pattern library for local apps. Providing valuable resources for designers, developers, and businesses to understand current trends and strategies."
        },
        {
            question: "Is Chamjo owns the copyright?",
            answer: "Chamjo does not own the copyright to any of the screenshots. All screenshots are copyrighted by their respective owners."
        },
        {
            question: "How to contact Chamjo support?",
            answer: `<span>Need help? Don't hesitate to contact our support team at <a href="mailto:support@chamjo.design" class='underline'>support@chamjo.design.</a> We're here to solve your problems!</span>`
        },
        {
            question: "How to change the region?",
            answer: "To change your region, please use the dropdown menu in our navigation bar."
        },
        {
            question: "Is the subscription refundable?",
            answer: `You can request a refund by explaining what you were hoping for. Our support team is here to assist you in finding a solution or processing your refund. Just send an email to <a href="mailto:support@chamjo.design" class='underline'>support@chamjo.design.</a>`
        }
    ]

    return (
        <section className='xl:pb-[120px] pb-20' id='faq'>
            <Container className='flex flex-col xl:gap-[60px] gap-12'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='rounded-full bg-base-300 py-2.5 px-5 w-fit'>
                        <span className='uppercase text-primary-500 xl:text-body-md text-body-xs font-semibold'>
                            Frequently asked questions
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <span className='text-base-900 xl:text-heading-lg text-heading-sm font-semibold xl:max-w-[636px] text-center'>
                            Questions and curiosities
                        </span>
                        <span className='text-base-800 xl:text-body-xl text-body-lg xl:max-w-[416px] text-center font-normal'>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam.
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    {faqs.map((faq, index) => (
                        <Collapse
                            key={index}
                            title={faq.question}
                            isExpanded={expandedIndex === index}
                            onToggle={() => handleToggle(index)}
                        >
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                        </Collapse>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Faq
