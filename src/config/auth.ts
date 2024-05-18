/* eslint-disable import/no-cycle */
/* eslint-disable simple-import-sort/imports */

import { API_URL, PUBLIC_SUPABASE_KEY, SUPABASE_URL, PUBLIC_SUPABASE_URL } from "./config"
import axios, { AxiosAdapter, AxiosRequestConfig, AxiosRequestHeaders } from "axios"
import { throttleAdapterEnhancer } from "axios-extensions"

import { createClient } from "@supabase/supabase-js"
import querystring from "@utils/querystring"

const publicSupabaseUrl = PUBLIC_SUPABASE_URL ?? ""
const supabasePublicKey = PUBLIC_SUPABASE_KEY ?? ""

const defaultContentType = "application/x-www-form-urlencoded"

export const supabaseAuth = createClient(publicSupabaseUrl, supabasePublicKey)

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Cache-Control": "no-cache"
    },
    adapter: throttleAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)
})

const fetchAPI = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
    try {
        const headers: AxiosRequestHeaders = {
            "Content-Type": defaultContentType,
            ...config?.headers
        }

        let data = config?.data || {}

        if (headers["Content-Type"] === defaultContentType) {
            data = querystring.stringify(data)
        }

        const request = await client({ ...config, data, headers })
        return request.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response?.data
        }
        throw error
    }
}

export default fetchAPI
