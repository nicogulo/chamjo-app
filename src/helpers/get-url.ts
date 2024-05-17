import { PUBLIC_SITE, PUBLIC_VERCEL_URL } from "config/config"

export const getURL = () => {
    let url = PUBLIC_SITE ?? PUBLIC_VERCEL_URL ?? "http://localhost:3000/"
    url = url.includes("http") ? url : `https://${url}`
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`

    return url
}
