/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ArrorCircleRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M18.3332 9.99998C18.3332 5.39761 14.6022 1.66665 9.99984 1.66665C5.39746 1.66665 1.6665 5.39761 1.6665 9.99998C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 9.99998Z'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8.9502 12.9417L11.8835 10L8.9502 7.05838'
                stroke='currentColor'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}

export default ArrorCircleRight
