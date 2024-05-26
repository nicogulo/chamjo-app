"use client"
import { Else, If, Then } from "@components/If"
import fetchAPI, { supabaseAuth, supabaseClient } from "@config/auth"
import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import Category from "./Category"
import classNames from "classnames"
import { Database } from "@utils/supabase"
import toast from "@utils/toast"
import Filter from "./Filter"
import "./module.css"
import Loader from "@components/Loader"

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

const MainPage = ({ categoryParams, categoryidParams, search }: Props) => {
    let page = 0
    let limit = 17

    const [isLoadingCategory, setLoadingCategory] = useState(true)
    const [isLoadingData, setLoadingData] = useState(true)
    const [category, setCategory] = useState<CategoryModel[]>([])
    const [dataApp, setDataApp] = useState<DataAppType[]>([])
    const [totalData, setTotalData] = useState<number>(0)
    const [selectedTittle, setSelectedTittle] = useState("All")
    const [pagination, setPagination] = useState({
        page: page,
        limit: limit
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
            <div className='wrapper-card'>
                <div className='wrapper-title'>
                    <span className='title' id='title'>
                        Browse <span className='text-base-5'>in </span>{" "}
                        <span
                            className={classNames("text-base-8", {
                                "category-name": !checkLength(selectedTittle)
                            })}
                        >
                            {selectedTittle}
                        </span>
                        <If condition={isLoadingData}>
                            <Then>
                                <div className='pl-2'>
                                    <Loader type='ThreeDots' height={10} width={20} />
                                </div>
                            </Then>
                            <Else>
                                <span className='total-data bg-primary-5 text-base-1'>{totalData}</span>
                            </Else>
                        </If>
                    </span>
                    <Filter
                        itemFilter={category}
                        total={totalData}
                        loading={isLoadingCategory}
                        categoryParams={categoryParams}
                        onChange={(value) => {
                            setSelectedTittle(value)
                            setPagination({ page: page, limit: limit })
                        }}
                    />
                </div>
                serac
            </div>
        </>
    )
}

export default MainPage
