import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Navbar from "@components/Navbar"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Chamjo | Discover Asia-based App Patterns",
    description:
        "Bored of using Airbnb, Doordash, and Yadayadayada for inspiration? Say no more! Here you can be inspired by the Asian-based App Patterns that could be your next favorite app.",
    icons: [
        {
            url: "https://ndbqcbbgigoygotysyae.supabase.co/storage/v1/object/public/icon/favicon.ico",
            rel: "icon",
            type: "image/png"
        }
    ]
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={outfit.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
