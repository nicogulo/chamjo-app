/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ArrowTop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12.0466 6.37992L7.99998 2.33325L3.95331 6.37992'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8 13.6668V2.44678'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ArrowTop
