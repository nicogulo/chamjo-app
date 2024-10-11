import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import Navbar from "@components/Navbar"

const outfit = Outfit({ subsets: ["latin"] })
export const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${outfit.className} bg-base-1 relative`}>
                <link
                    rel='icon'
                    type='image/png'
                    href='https://api.chamjo.design/storage/v1/object/public/icon/favicon.ico'
                />
                <Navbar />
                <div className='mt-[72px]'>{children}</div>
            </body>
        </html>
    )
}
