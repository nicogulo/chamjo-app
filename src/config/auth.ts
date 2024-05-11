
/* eslint-disable import/no-cycle */
/* eslint-disable simple-import-sort/imports */

import { API_URL, SUPABASE_PUBLIC_KEY, SUPABASE_URL } from "./config"
import axios, { AxiosAdapter, AxiosRequestConfig, AxiosRequestHeaders } from "axios"
import { throttleAdapterEnhancer } from "axios-extensions"

import { createClient } from "@supabase/supabase-js"
import querystring from "@utils/querystring"

const supabaseUrl = SUPABASE_URL ?? "https://ndbqcbbgigoygotysyae.supabase.co"
const supabasePublicKey = SUPABASE_PUBLIC_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kYnFjYmJnaWdveWdvdHlzeWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyNzA5NjgsImV4cCI6MTk3NDg0Njk2OH0.IFVJqHSc87brYUz34R5eKriAQen0nzVkOqt9BDlw7Vw"

const defaultContentType = "application/x-www-form-urlencoded"


export const supabase = createClient(supabaseUrl, supabasePublicKey)

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Cache-Control": "no-cache"
    },
    adapter: throttleAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)
})

const fetchAPi = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
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

export default fetchAPi
