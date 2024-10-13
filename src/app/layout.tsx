import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@components/Navbar"
import BackToTop from "@components/BackToTop"
import Footer from "@components/Footer"

export const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
    title: "Chamjo | The ultimate UX inspiration hub for local apps and competitors",
    description: "Ultimate UX inspiration hub for local apps and competitors"
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
                    href='https://ndbqcbbgigoygotysyae.supabase.co/storage/v1/object/public/icon/favicon.ico'
                />

                {children}
            </body>
        </html>
    )
}
