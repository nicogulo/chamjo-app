"use client"

import { Else, If, Then, When } from "@components/If"
import Loader from "@components/Loader"
import classNames from "classnames"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

import { CategoryModel } from "./MainPage"

interface CategoryProps {
    category: CategoryModel[] | null
    categoryParams?: string
    searchParams?: string
    total?: number
    onChange?: (category: string) => void
    loadingData?: boolean
}

const Category = ({ category, categoryParams, searchParams, total, onChange, loadingData }: CategoryProps) => {
    const [clickedId, setClickedId] = useState<number | undefined>(0)
    const router = useRouter()

    const handleClick = (_: any, i: number) => {
        const title = document.getElementById("content")
        setClickedId(i)

        title?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    useEffect(() => {
        const index = category?.findIndex((cat) => cat.appCategoryName?.includes(categoryParams ?? ""))
        if (index !== -1 && index !== undefined) {
            setClickedId(index)
            onChange?.(category?.[index].appCategoryName ?? "")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, setClickedId])

    return (
        <>
            {category?.map((item, index) => {
                return (
                    <div key={index}>
                        <button
                            className={classNames(
                                " text-body-md text-base-800 cursor-pointer w-full h-12 px-4 rounded-lg focus:outline-none flex items-center justify-between outline-none my-1 active:focus:outline-none hover:bg-base-300 bg-opacity-70 hover:outline-none ",
                                {
                                    "category-active bg-base-300": index === clickedId
                                }
                            )}
                            type='button'
                            onClick={(event) => {
                                handleClick(event, index)
                                onChange?.(item.appCategoryName ?? "")
                                router.replace(
                                    `/browse?category=${item.appCategoryName}&id=${item.id}${searchParams ? `&search=${searchParams}` : ""}`,
                                    { scroll: false }
                                )
                            }}
                        >
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={item.icons as string} alt='' width={24} height={24} />
                                <span className='text-base-800 text-body-md text-left whitespace-nowrap w-[100px] overflow-hidden text-ellipsis'>
                                    {item.appCategoryName}
                                </span>
                            </div>
                            <div className='flex'>
                                <If condition={item?.status === "NEW"}>
                                    <Then>
                                        <When condition={index !== clickedId}>
                                            <span
                                                className={classNames(
                                                    "h-[22px] w-[39px] text-[10px] rounded-[6px] ml-1 uppercase bg-[#9AA1AD] bg-opacity-80",
                                                    {
                                                        "bg-[#9aa1ad14] bg-opacity-100 text-[#7543DF]":
                                                            item.status === "NEW"
                                                    }
                                                )}
                                            >
                                                {item.status}
                                            </span>
                                        </When>
                                    </Then>
                                    <Else>{null}</Else>
                                </If>
                                <When condition={index === clickedId}>
                                    <If condition={loadingData}>
                                        <Then>
                                            <Loader type='ThreeDots' height={10} width={20} />
                                        </Then>
                                        <Else>
                                            <When condition={total}>
                                                <span className='flex items-center justify-center py-1 px-2 text-body-xs rounded-md uppercase bg-base-800 text-base-100'>
                                                    {total}
                                                </span>
                                            </When>
                                        </Else>
                                    </If>
                                </When>
                            </div>
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default Category
