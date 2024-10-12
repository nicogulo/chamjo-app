import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@components/Navbar"
import BackToTop from "@components/BackToTop"

export const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
    title: "Chamjo | Discover Asia-based App Patterns",
    description:
        "Bored of using Airbnb, Doordash, and Yadayadayada for inspiration? Say no more! Here you can be inspired by the Asian-based App Patterns that could be your next favorite app."
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-base-100 relative`}>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://api.chamjo.design/storage/v1/object/public/icon/favicon.ico'
                />
                <Navbar />
                {children}
                <BackToTop />
            </body>
        </html>
    )
}
