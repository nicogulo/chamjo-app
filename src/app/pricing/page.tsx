import React from "react"
import Pricing from "./Pricing"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Chamjo - Pricing | Discover Asia-based App Patterns",
    description:
        "Bored of using Airbnb, Doordash, and Yadayadayada for inspiration? Say no more! Here you can be inspired by the Asian-based App Patterns that could be your next favorite app."
}
const page = () => {
    return <Pricing />
}

export default page
