import { PUBLIC_SITE, PUBLIC_VERCEL_URL } from "config/config"

export const getURL = () => {
    let url = PUBLIC_SITE ?? PUBLIC_VERCEL_URL ?? "http://localhost:3000/auth/callback"
    url = url.startsWith("http") ? url : `https://${url}`
    url = url.endsWith("/") ? url : `${url}/`
    return url
}
