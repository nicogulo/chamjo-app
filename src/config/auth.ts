/* eslint-disable import/no-cycle */
/* eslint-disable simple-import-sort/imports */

import { API_URL, PUBLIC_SUPABASE_KEY, PUBLIC_SUPABASE_URL } from "./config"
import axios, { AxiosAdapter, AxiosRequestConfig, AxiosRequestHeaders } from "axios"
import { throttleAdapterEnhancer } from "axios-extensions"

import { createBrowserClient } from "@supabase/ssr"
import querystring from "@utils/querystring"

const supabasePublicKey = PUBLIC_SUPABASE_KEY ?? ""
const publicURL = API_URL

const defaultContentType = "application/x-www-form-urlencoded"

export const supabaseSsrClient = createBrowserClient(publicURL!, supabasePublicKey)

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
            apikey: supabasePublicKey,
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
