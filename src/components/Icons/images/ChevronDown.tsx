/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M4 6L8 10L12 6'
                stroke='currentColor'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    )
}
export default ChevronDown
