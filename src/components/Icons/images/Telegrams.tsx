/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Telegrams: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 40 40'
            {...props}
        >
            <path fill='#fff' d='M0 0h40v40H0z' />
            <rect x='4' y='4' width='32' height='32' rx='8' fill='url(#0)' />
            <defs>
                <image
                    id='1'
                    width='512'
                    height='512'
                    xlinkHref='data:image/png;base64,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'
                />
                <pattern id='0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                    <use xlinkHref='#1' transform='scale(.00195)' />
                </pattern>
            </defs>
        </svg>
    )
}

export default Telegrams