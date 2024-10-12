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
            className={classNames("flex flex-col  w-full bg-base-50 py-6 px-8 rounded-xl", {
                "gap-2": isExpanded
            })}
        >
            <div
                className='flex items-center justify-between w-full cursor-pointer '
                onClick={getToggleProps({ onClick: onToggle }).onClick}
            >
                <span className='xl:text-lg leading-[27px] text-base-900'>{title}</span>
                <Icons
                    icon='ChevronDown'
                    width={20}
                    height={20}
                    className='transform transition-transform duration-300'
                    style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </div>
            <div {...getCollapseProps()} className='text-3 leading-4 text-base-800'>
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

    // faqs chamjo.design
    const faqs = [
        {
            question: "What is Chamjo?",
            answer: "Chamjo is a design system that helps you to build a website faster and easier."
        },
        {
            question: "How to use Chamjo?",
            answer: "You can use Chamjo by installing the package from npm."
        },
        {
            question: "Is Chamjo free?",
            answer: "Yes, Chamjo is free and open-source."
        },
        {
            question: "Can I contribute to Chamjo?",
            answer: "Yes, you can contribute to Chamjo on GitHub."
        },
        {
            question: "How to report a bug?",
            answer: "You can report a bug on GitHub."
        }
    ]

    return (
        <section className='xl:pb-[120px] pb-20'>
            <Container className='flex flex-col xl:gap-[60px] gap-12'>
                <div className='flex flex-col items-center gap-3'>
                    <div className='rounded-full bg-base-300 py-2.5 px-5 w-fit'>
                        <span className='uppercase text-primary-500 xl:text-sm text-xs xl:leading-[22px] leading-[19px] font-semibold'>
                            Frequently asked questions
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <span className='text-base-900 xl:text-19 text-11 xl:leading-[55px] leading-[36px] font-semibold xl:max-w-[636px] text-center'>
                            Questions and curiosities
                        </span>
                        <span className='text-base-800 xl:text-lg text-3 leading-4 xl:max-w-[416px] text-center font-normal'>
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
                            {faq.answer}
                        </Collapse>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Faq
