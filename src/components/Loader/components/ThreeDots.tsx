import * as React from "react"

const defaultRadius = 9

interface ThreeDotsProps {
    /**
     * Width of the three dots
     */
    width: number
    /**
     * Height of the three dots
     */
    height: number
    /**
     * Color of the three dots
     */
    color: string
    /**
     * Aria label
     */
    label: string
    /**
     * Radius of the three dots
     */
    radius?: number
}

const ThreeDots = ({ width, height, color, label, radius = defaultRadius }: ThreeDotsProps) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 120 30'
        xmlns='http://www.w3.org/2000/svg'
        fill={color}
        aria-label={label}
    >
        <circle cx='15' cy='15' r={radius + 6}>
            <animate
                attributeName='r'
                from='15'
                to='15'
                begin='0s'
                dur='0.8s'
                values='15;9;15'
                calcMode='linear'
                repeatCount='indefinite'
            />
            <animate
                attributeName='fillOpacity'
                from='1'
                to='1'
                begin='0s'
                dur='0.8s'
                values='1;.5;1'
                calcMode='linear'
                repeatCount='indefinite'
            />
        </circle>
        <circle cx='60' cy='15' r={radius} attributeName='fillOpacity' from='1' to='0.3'>
            <animate
                attributeName='r'
                from='9'
                to='9'
                begin='0s'
                dur='0.8s'
                values='9;15;9'
                calcMode='linear'
                repeatCount='indefinite'
            />
            <animate
                attributeName='fillOpacity'
                from='0.5'
                to='0.5'
                begin='0s'
                dur='0.8s'
                values='.5;1;.5'
                calcMode='linear'
                repeatCount='indefinite'
            />
        </circle>
        <circle cx='105' cy='15' r={radius + 6}>
            <animate
                attributeName='r'
                from='15'
                to='15'
                begin='0s'
                dur='0.8s'
                values='15;9;15'
                calcMode='linear'
                repeatCount='indefinite'
            />
            <animate
                attributeName='fillOpacity'
                from='1'
                to='1'
                begin='0s'
                dur='0.8s'
                values='1;.5;1'
                calcMode='linear'
                repeatCount='indefinite'
            />
        </circle>
    </svg>
)

ThreeDots.defaultProps = {
    radius: defaultRadius
}

export default ThreeDots
