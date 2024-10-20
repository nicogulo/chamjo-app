/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6 12L10 8L6 4'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ChevronRight
