/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Art2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='34' height='27' viewBox='0 0 34 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.5448 26.5669L0.000453967 12.1587L33.1641 26.5669H18.5448Z'
                fill='url(#paint0_linear_4192_107186)'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M33.1641 26.5669L23.6635 -12L18.5448 26.2943L33.1641 26.5669Z'
                fill='#ECA998'
            />
            <defs>
                <linearGradient
                    id='paint0_linear_4192_107186'
                    x1='18.9574'
                    y1='22.2187'
                    x2='6.94973'
                    y2='11.4626'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#ECAB9A' />
                    <stop offset='1' stopColor='#ECAB9A' stop-opacity='0' />
                </linearGradient>
            </defs>
        </svg>
    )
}
export default Art2
