import Navbar from "./components/Navbar"

export default function Browse({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-dvh bg-base-100'>
            <Navbar />

            {children}
        </div>
    )
}
