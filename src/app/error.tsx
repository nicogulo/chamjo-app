"use client"

import React from "react"
import Providers from "./providers"
import Container from "@components/Container"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <Providers>
            <Container>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <h1 className='text-4xl font-bold text-center'>An error occurred</h1>
                    <p className='text-lg text-center'>
                        {error.message}
                        {error.digest && (
                            <button
                                onClick={reset}
                                className='text-sm text-blue-500 hover:underline focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                            >
                                Reset
                            </button>
                        )}
                    </p>
                </div>
            </Container>
        </Providers>
    )
}
