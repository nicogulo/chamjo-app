/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const CloseSquare: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path d='M5 15L15 5' stroke='#C3C7CE' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M15 15L5 5' stroke='#C3C7CE' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    )
}
export default CloseSquare
