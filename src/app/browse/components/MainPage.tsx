"use client"

import React, { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { useMediaQuery } from "react-responsive"
import classNames from "classnames"

import "./module.css"

import { Database } from "@utils/supabase"
import toast from "@utils/toast"

import { Else, If, Then, When } from "@components/If"
import { supabaseSsrClient } from "@config/auth"
import Loader from "@components/Loader"

import Category from "./Category"
import Filter from "./Filter"
import SearchBar from "./SearchBar"

export interface CategoryModel {
    id: number | null
    appCategoryName: string | null
    icons: string | null
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
    const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
    const isMobile = useMediaQuery({ maxWidth: "1066px" })
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()
    if (categoryidParams === undefined) {
        categoryidParams = "26"
    }

    const getCategory = async () => {
        try {
            setLoadingCategory(true)
            const { count, data } = await supabaseSsrClient
                .from("category")
                .select("*", { count: "exact" })
                .order("app_category_name", {
                    ascending: true
                })

            let response: CategoryModel[] = data
                ? data.map((item: any) => ({
                      id: item.id,
                      appCategoryName: item.app_category_name,
                      icons: item.icon,
                      isNew: item.isNew,
                      status: item.status
                  }))
                : []

            const supperAppIndex = response.findIndex((item) => item.appCategoryName === "Super App")
            if (supperAppIndex !== -1) {
                const [supperApp] = response.splice(supperAppIndex, 1)
                response.splice(1, 0, supperApp)
            }

            if (data) {
                setCategory(response)
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

            let query = supabaseSsrClient
                .from("Application")
                .select("*, CategoriesOnApps!inner(*)", { count: "exact" })
                .order("id", { ascending: false })
                .eq("CategoriesOnApps.category_id", categoryidParams)
                .range(pagination.page * pagination.limit, (pagination.page + 1) * pagination.limit - 1)
                .limit(pagination.limit)

            if (search) {
                query = query.ilike("app_name", `%${search}%`)
            }

            const { data, count } = await query

            const response: DataAppType[] = data ?? []
            const countData = count

            if (!data) {
                throw response
            }

            const dataFilter = data.filter((item) => {
                if (!item) return false
                const searchValue = search?.toLowerCase()
                const name = item.app_name.toLowerCase()

                !searchValue || name.includes(searchValue)
            })

            setTotalData(countData as number)
            setDataApp(dataFilter as unknown as DataAppType[])

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

    const handleSearch = useDebouncedCallback((value) => {
        const params = new URLSearchParams(searchParams.toString())
        if (value) {
            params.set("search", value)
        } else {
            params.delete("search")
        }

        router.replace(`${pathName}?${params.toString()}`, { scroll: false })
    }, 1000)

    useEffect(() => {
        getAppData(pagination)
    }, [pagination.page, categoryidParams, search])

    useEffect(() => {
        getCategory()
    }, [])

    useEffect(() => {
        setSearchValue(searchParams.get("search") || "")
    }, [])

    return (
        <div className='flex'>
            <div
                className='max-w-[280px] w-full p-4 bg-base-100 xl:block hidden overflow-scroll h-[calc(100vh-72px)] border-r border-r-base-400'
                style={{
                    scrollbarWidth: "none"
                }}
            >
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
                            searchParams={search}
                        />
                    </Else>
                </If>

                {/* End Sidebar */}
            </div>
            <div className='wrapper-card xl:px-6'>
                <div className='wrapper-title'>
                    <span className='title text-base-900' id='title'>
                        Browse <span className='text-base-600'>in </span>{" "}
                        <span
                            className={classNames({
                                "truncate w-[100px]": !checkLength(selectedTittle) && isMobile
                            })}
                        >
                            {selectedTittle}
                        </span>
                        <If condition={isLoadingData}>
                            <Then>
                                <div className='pl-2 xl:hidden block'>
                                    <Loader type='ThreeDots' height={10} width={20} />
                                </div>
                            </Then>
                            <Else>
                                <When condition={totalData}>
                                    <span className='total-data bg-primary-500 text-base-1'>{totalData}</span>
                                </When>
                            </Else>
                        </If>
                    </span>
                    <Filter
                        itemFilter={category}
                        total={totalData}
                        loading={isLoadingCategory}
                        categoryParams={categoryParams}
                        searchParams={search}
                        onChange={(value) => {
                            setSelectedTittle(value)
                            setPagination({ page: page, limit: limit })
                        }}
                    />
                </div>
                <SearchBar
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        handleSearch(e.target.value)
                    }}
                    value={searchValue}
                />
            </div>
        </div>
    )
}

export default MainPage
