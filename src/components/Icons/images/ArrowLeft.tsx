/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M12.575 3.39997L7.14166 8.83331C6.5 9.47498 6.5 10.525 7.14166 11.1666L12.575 16.6'
                stroke='#C3C7CE'
                strokeWidth='1.75'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ArrowLeft
