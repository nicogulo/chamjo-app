"use client"
import { Else, If, Then } from "@components/If"
import fetchAPI, { supabaseAuth, supabaseClient } from "@config/auth"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import Category from "./Category"
import classNames from "classnames"
import { Database } from "@utils/supabase"
import toast from "@utils/toast"

export interface CategoryModel {
    id: number | null
    appCategoryName: string | null
    imageInactive: string | null
    imageActive: string | null
    isNew: boolean
    status: string | null
}

interface Props {
    categoryParams?: string
    categoryidParams?: string
    search?: string
}
type CategoryType = Database["public"]["Tables"]["CategoriesOnApps"]["Row"]
type Categoriestype = Database["public"]["Tables"]["AppCategory"]["Row"]
type DataAppType = Database["public"]["Tables"]["Application"]["Row"] & {
    category: CategoryType[]
}

const SkeletonItem = () => (
    <div className='w-[195px] h-12 bg-base-2 rounded-sm flex items-center outline-none my-1 mr-0 ml-[19px]'>
        <Skeleton circle width={24} height={24} className='mx-3' />
        <Skeleton width={96} height={16} />
    </div>
)

const SkeletonComp = () => [...Array(8)].map((_, index) => <SkeletonItem key={index} />)

const Sidebar = ({ categoryParams, categoryidParams, search }: Props) => {
    const [isLoadingCategory, setLoadingCategory] = useState(true)
    const [isLoadingData, setLoadingData] = useState(true)
    const [category, setCategory] = useState<CategoryModel[]>([])
    const [dataApp, setDataApp] = useState<DataAppType[]>([])
    const [totalData, setTotalData] = useState<number>(0)
    const [selectedTittle, setSelectedTittle] = useState("All")
    const [pagination, setPagination] = useState({
        page: 0,
        limit: 17
    })

    if (categoryidParams === undefined) {
        categoryidParams = "26"
    }

    const getCategory = async () => {
        try {
            setLoadingCategory(true)

            const response = await fetchAPI({
                url: "/rest/v1/AppCategory",
                method: "GET",
                params: {
                    select: "*",
                    order: "app_category_name.asc"
                }
            })
            if (!response.data) {
                throw response
            }

            const data = response?.data.map((item: any) => ({
                id: item.id,
                appCategoryName: item.app_category_name,
                imageInactive: item.image_inactive,
                imageActive: item.image_active,
                isNew: item.isNew,
                status: item.status
            }))

            if (data) {
                setCategory(data)
            }
            setLoadingCategory(false)
        } catch (error: any) {
            console.log(error)
            toast.error("Failed to get category")
        }
    }

    const getAppData = async (pagination: any) => {
        try {
            setLoadingData(true)

            const response = await fetchAPI({
                url: "/rest/v1/Application",
                method: "GET",
                params: {
                    select: "*,CategoriesOnApps!inner(*)",
                    order: "id.desc",
                    limit: pagination.limit,
                    offset: pagination.page,
                    "CategoriesOnApps.category_id": `eq.${categoryidParams}`
                }
            })
            const data: DataAppType[] = response.data
            const countData = response?.count

            if (!data) {
                throw response
            }

            setTotalData(countData)
            setDataApp(data as unknown as DataAppType[])

            setLoadingData(false)
        } catch (error: any) {
            console.log(error)
            toast.error("Failed to get data")
        }
    }

    const checkLength = (text: string) => {
        if (text.length < 10) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        getAppData(pagination)
    }, [pagination.page, categoryidParams])

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <>
            <div className='pb-9 pt-10 w-[256px] bg-base-1 xl:block hidden'>
                {/* Sidebar */}
                <If condition={isLoadingCategory}>
                    <Then>
                        <SkeletonComp />
                    </Then>
                    <Else>
                        <Category
                            category={category}
                            categoryParams={categoryParams}
                            onChange={(value) => {
                                setSelectedTittle(value)
                            }}
                            loadingData={isLoadingData}
                            total={totalData}
                        />
                    </Else>
                </If>

                {/* End Sidebar */}
            </div>
            <div className='max-[1066px]:max-w-[375px] max-[1066px]:mx-auto '>
                <div className='pb-5 pt-10 max-[1066px]:pt-4 max-[1066px]:pb-3'>
                    <span className='text-[24px] font-medium flex flex-row items-center gap-1  leading-8 text-base-8 max-[1066px]:text-[20px] max-[1066px]:leading-5'>
                        Browse <span className='text-base-5'>in </span>{" "}
                        <span
                            className={classNames("text-base-8 ", {
                                "max-[1066]:whitespace-nowrap max-[1066]:w-[100px] max-[1066]:overflow-hidden max-[1066]:text-ellipsis":
                                    checkLength(selectedTittle)
                            })}
                            id='title'
                        >
                            {selectedTittle}
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Sidebar
