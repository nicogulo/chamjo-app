/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Checklist: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M7 11.7456L10.7456 15.4912L18.25 8'
                stroke='#E06343'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default Checklist
