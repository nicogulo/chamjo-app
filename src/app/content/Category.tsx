"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Inter } from "next/font/google"

import { CategoryModel } from "./MainPage"
import classNames from "classnames"
import { Else, If, Then, When } from "@components/If"
import { useRouter } from "next/navigation"
import Loader from "@components/Loader"

const inter = Inter({ subsets: ["latin"] })

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
    }, [category, setClickedId])

    return (
        <>
            {category?.map((item, index) => {
                const imageActive = item.imageActive || ""
                const imageInactive = item.imageInactive || ""
                return (
                    <div>
                        <button
                            className={classNames(
                                " text-sm font-normal !leading-6 cursor-pointer w-[203px] h-12 px-4 focus:outline-none flex items-center justify-between outline-none my-1 active:focus:outline-none hover:bg-[#EBECF0] bg-opacity-70 hover:outline-none hover:rounded-lg",
                                {
                                    "category-active": index === clickedId
                                }
                            )}
                            type='button'
                            onClick={(event) => {
                                handleClick(event, index)
                                onChange?.(item.appCategoryName ?? "")
                                router.push(
                                    `/?category=${item.appCategoryName}&id=${item.id}${searchParams ? `&search=${searchParams}` : ""}`,
                                    { scroll: false }
                                )
                            }}
                        >
                            <div className='flex flex-row gap-[10px]'>
                                <Image
                                    src={index === clickedId ? imageActive : imageInactive}
                                    alt=''
                                    width={24}
                                    height={24}
                                />
                                <span
                                    className={classNames(
                                        "text-base-7 text-[14px] text-left whitespace-nowrap w-[100px] overflow-hidden text-ellipsis",
                                        {
                                            "text-primary-5": index === clickedId
                                        }
                                    )}
                                >
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
                                                <span
                                                    className={classNames(
                                                        "h-[22px] w-[27px] text-[10px] rounded-[6px] ml-1 uppercase text-[#9AA1AD] bg-[#9AA1AD] bg-opacity-80",
                                                        {
                                                            "bg-[#E06343] bg-opacity-100 !text-[#FAFAFB]":
                                                                index === clickedId
                                                        }
                                                    )}
                                                    style={{
                                                        boxShadow: "0px 6px 12px -5px rgba(224, 99, 67, 0.25);"
                                                    }}
                                                >
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
