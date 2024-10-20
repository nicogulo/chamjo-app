"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import classNames from "classnames"

import Icons from "@components/Icons"
import { Else, If, Then, When } from "@components/If"
import Loader from "@components/Loader"

import { CategoryModel } from "./MainPage"

interface Props {
    itemFilter: CategoryModel[]
    total: number
    loading: boolean
    onChange: (item: string) => void
    categoryParams?: string
    searchParams?: string
}

const Filter = ({ itemFilter, loading, onChange, total, categoryParams, searchParams }: Props) => {
    const [isFilter, setIsFilter] = useState(false)
    const [clickedId, setClickedId] = useState(0)
    const [bodyOverflow, setBodyOverflow] = useState("")
    const [elModalRoot, setElModalRoot] = useState<HTMLElement | null>(null)
    const router = useRouter()

    const handleClick = (_: any, i: number) => {
        setClickedId(i)
        setIsFilter(false)
    }

    const escFunction = useCallback(
        (event: { key: string }) => {
            if (event.key === "Escape") {
                setIsFilter(false)
            }
        },
        [setIsFilter]
    )

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false)
        return () => document.removeEventListener("keydown", escFunction, false)
    }, [escFunction])

    useEffect(() => {
        if (isFilter) {
            setBodyOverflow(document.body.style.overflow)
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.body.style.overflow = bodyOverflow
        }
    }, [isFilter])

    useEffect(() => {
        if (typeof document !== "undefined") {
            const modalRoot = document.createElement("div")
            modalRoot.id = "modal-root"
            document.body.appendChild(modalRoot)
            setElModalRoot(modalRoot)

            return () => {
                document.body.removeChild(modalRoot)
            }
        }
    }, [])

    useEffect(() => {
        const index = itemFilter?.findIndex((cat) => cat.appCategoryName?.includes(categoryParams ?? ""))
        if (index !== -1 && index !== undefined) {
            setClickedId(index)
            onChange?.(itemFilter?.[index].appCategoryName ?? "")
        }
    }, [itemFilter, setClickedId])

    if (!elModalRoot) {
        return null
    }

    return (
        <>
            <span
                className='xl:hidden flex items-center justify-center gap-2.5 bg-base-50 p-2 rounded-[10px]'
                onClick={() => setIsFilter(!isFilter)}
            >
                <Icons icon='Filter' width={20} height={20} />
                <span className='text-base-800 text-body-md'>Filter</span>
            </span>
            <div
                className={classNames("modal-dialog", {
                    "!flex": isFilter
                })}
            >
                <div className='w-full'>
                    <div className='w-full py-3.5 px-5 flex items-center border-b border-b-base-100 '>
                        <span className='w-full  font-medium text-body-lg text-base-900 text-center'>Filter</span>
                        <Icons
                            icon='X'
                            width={24}
                            height={24}
                            className='text-base-600'
                            onClick={() => setIsFilter(!isFilter)}
                        />
                    </div>
                </div>
                <div className='w-full pt-6 pb-8 px-[20px] overflow-scroll'>
                    <span className='text-body-md text-base-800'>Categories</span>
                    {itemFilter.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='flex justify-between py-4 border-b border-b-base-400 last:border-b-0'
                                onClick={(_) => {
                                    handleClick(_, index)
                                    onChange(item?.appCategoryName || "")
                                    router.replace(
                                        `/browse?category=${item.appCategoryName}&id=${item.id}${searchParams ? `&search=${searchParams}` : ""}`,
                                        { scroll: false }
                                    )
                                }}
                            >
                                <div className='flex items-center gap-2.5'>
                                    <Image src={item.icons as string} alt='' width={24} height={24} />

                                    <span className='text-body-md text-base-800'>{item.appCategoryName}</span>
                                    <When condition={index === clickedId}>
                                        <If condition={loading}>
                                            <Then>
                                                <Loader type='ThreeDots' height={10} width={20} />
                                            </Then>
                                            <Else>
                                                <span className='flex items-center justify-center py-1 px-2 text-body-xs rounded-md uppercase bg-base-800 text-base-100'>
                                                    {total}
                                                </span>
                                            </Else>
                                        </If>
                                    </When>
                                </div>
                                <When condition={index === clickedId}>
                                    <Icons icon='CheckList' width={24} height={24} className='text-base-900' />
                                </When>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Filter
