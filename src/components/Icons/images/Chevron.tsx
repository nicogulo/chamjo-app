/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Chevron: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M9.99984 18.3334C14.6022 18.3334 18.3332 14.6025 18.3332 10.0001C18.3332 5.39771 14.6022 1.66675 9.99984 1.66675C5.39746 1.66675 1.6665 5.39771 1.6665 10.0001C1.6665 14.6025 5.39746 18.3334 9.99984 18.3334Z'
                stroke='#FAFAFB'
                strokeWidth='1.25'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M7.05811 8.9502L9.99977 11.8835L12.9414 8.9502'
                stroke='#FAFAFB'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}
export default Chevron
