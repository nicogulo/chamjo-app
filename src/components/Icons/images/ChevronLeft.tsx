/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const ChevronLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <g clip-path='url(#clip0_3025_27191)'>
                <path
                    d='M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4166C11.4074 14.7416 11.9324 14.7416 12.2574 14.4166C12.5824 14.0916 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z'
                    fill='currentColor'
                />
            </g>
            <defs>
                <clipPath id='clip0_3025_27191'>
                    <rect width='20' height='20' fill='white' />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ChevronLeft
