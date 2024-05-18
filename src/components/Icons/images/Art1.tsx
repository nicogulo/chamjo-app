/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Art1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='34' height='39' viewBox='0 0 34 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M18.5448 38.5669L0.000453949 24.1587L33.1641 38.5669H18.5448Z'
                fill='url(#paint0_linear_4192_107204)'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M33.1641 38.5669L23.6635 0L18.5448 38.2943L33.1641 38.5669Z'
                fill='#ECA998'
            />
            <defs>
                <linearGradient
                    id='paint0_linear_4192_107204'
                    x1='18.9574'
                    y1='34.2187'
                    x2='6.94973'
                    y2='23.4626'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stop-color='#ECAB9A' />
                    <stop offset='1' stop-color='#ECAB9A' stop-opacity='0' />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default Art1
