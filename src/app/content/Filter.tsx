import React, { useCallback, useEffect, useState } from "react"
import { Inter } from "next/font/google"
import Icons from "@components/Icons"

import { CategoryModel } from "./MainPage"
import classNames from "classnames"
import Image from "next/image"
import { Else, If, Then, When } from "@components/If"
import Loader from "@components/Loader"
import { useRouter } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

interface Props {
    itemFilter: CategoryModel[]
    total: number
    loading: boolean
    onChange: (item: string) => void
    categoryParams?: string
}
const elModalRoot = document.createElement("div")

if (elModalRoot) {
    elModalRoot.id = "modal-root"
    document.body.appendChild(elModalRoot)
}

const Filter = ({ itemFilter, loading, onChange, total, categoryParams }: Props) => {
    const [isFilter, setIsFilter] = useState(false)
    const [clickedId, setClickedId] = useState(0)
    const [bodyOverflow, setBodyOverflow] = useState("")
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

    if (!elModalRoot) {
        return null
    }

    useEffect(() => {
        const index = itemFilter?.findIndex((cat) => cat.appCategoryName?.includes(categoryParams ?? ""))
        if (index !== -1 && index !== undefined) {
            setClickedId(index)
            onChange?.(itemFilter?.[index].appCategoryName ?? "")
        }
    }, [itemFilter, setClickedId])
    return (
        <>
            <span className='filter' onClick={() => setIsFilter(!isFilter)}>
                <span className='text-base-7 text-2 !leading-[22px]'>Category</span>
                <Icons icon='Filter' />
            </span>
            <div
                className={classNames("modal-dialog", {
                    "!flex": isFilter
                })}
            >
                <div className='w-full'>
                    <div className='w-full py-3.5 px-5 flex items-center border-b border-b-base-3 '>
                        <span className='w-full  font-medium text-3 leading-6 text-base-9 text-center'>Filter</span>
                        <Icons icon='X' width={10} height={10} onClick={() => setIsFilter(!isFilter)} />
                    </div>
                </div>
                <div className='w-full pt-6 pb-8 px-[20px] overflow-scroll'>
                    <span className='text-2 leading-6 text-base-5'>Categories</span>
                    {itemFilter.map((item, index) => {
                        const imageActive = item.imageActive || ""
                        const imageInactive = item.imageInactive || ""
                        return (
                            <div
                                className='flex justify-between py-4 border-b border-b-base-3 last:border-b-0'
                                onClick={(_) => {
                                    handleClick(_, index)
                                    onChange(item?.appCategoryName || "")
                                    router.push(`/?category=${item.appCategoryName}&id=${item.id}`, { scroll: false })
                                }}
                            >
                                <div className='flex items-center gap-2.5'>
                                    <Image
                                        src={index === clickedId ? imageActive : imageInactive}
                                        alt=''
                                        width={24}
                                        height={24}
                                    />

                                    <span
                                        className={classNames("text-2 leading-[22px] text-base-7", {
                                            "text-primary-5": index === clickedId
                                        })}
                                    >
                                        {item.appCategoryName}
                                    </span>
                                    <When condition={index === clickedId}>
                                        <If condition={loading}>
                                            <Then>
                                                <Loader type='ThreeDots' height={10} width={20} />
                                            </Then>
                                            <Else>
                                                <span
                                                    className={classNames(
                                                        "flex items-center justify-center h-[22px] w-[27px] text-[10px] rounded-sm uppercase bg-[#9aa1ad14] text-base-5",
                                                        {
                                                            "!bg-primary-5 !text-base-1": index === clickedId
                                                        }
                                                    )}
                                                    style={{
                                                        boxShadow: "0px 6px 12px -5px rgba(224, 99, 67, 0.25)"
                                                    }}
                                                >
                                                    {total}
                                                </span>
                                            </Else>
                                        </If>
                                    </When>
                                </div>
                                <When condition={index === clickedId}>
                                    <Icons icon='CheckList' width={24} height={24} />
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
