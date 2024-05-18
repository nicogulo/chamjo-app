/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Close: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M1 11L11 1' stroke='#FAFAFB' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M11 11L1 1' stroke='#FAFAFB' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}
export default Close
