/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M5.94043 13.2807L10.2871 8.93404C10.8004 8.4207 10.8004 7.5807 10.2871 7.06737L5.94043 2.7207'
                stroke='#C3C7CE'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ArrowRight
