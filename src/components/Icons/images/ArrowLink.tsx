/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ArrowLink: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M9.75 8.24961L15.9 2.09961'
                stroke='#E06343'
                strokeWidth='1.125'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16.4984 5.1V1.5H12.8984'
                stroke='#E06343'
                strokeWidth='1.125'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75'
                stroke='#E06343'
                strokeWidth='1.125'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ArrowLink
