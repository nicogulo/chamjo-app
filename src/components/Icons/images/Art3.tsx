/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Art3: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='34' height='39' viewBox='0 0 34 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M18.5458 38.6802L0.00143051 24.272L33.165 38.6802H18.5458Z'
                fill='url(#paint0_linear_4192_107185)'
            />
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M33.1641 38.6802L23.6635 0.113281L18.5448 38.4076L33.1641 38.6802Z'
                fill='#ECA998'
            />
            <defs>
                <linearGradient
                    id='paint0_linear_4192_107185'
                    x1='18.9584'
                    y1='34.332'
                    x2='6.9507'
                    y2='23.5759'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stop-color='#ECAB9A' />
                    <stop offset='1' stop-color='#ECAB9A' stop-opacity='0' />
                </linearGradient>
            </defs>
        </svg>
    )
}
export default Art3
