import * as React from "react"

interface OvalProps {
    /**
     * Width of the oval
     */
    width: number
    /**
     * Height of the oval
     */
    height: number
    /**
     * Color of the oval
     */
    color: string
    /**
     * Aria label
     */
    label: string
    /**
     * Radius of the oval
     */
    radius?: number
}

const Oval = ({ width, height, color, label, radius }: OvalProps) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 38 38'
        xmlns='http://www.w3.org/2000/svg'
        stroke={color}
        aria-label={label}
    >
        <g fill='none' fillRule='evenodd'>
            <g transform='translate(1 1)' strokeWidth='2'>
                <circle strokeOpacity='.5' cx='18' cy='18' r={radius} />
                <path d='M36 18c0-9.94-8.06-18-18-18'>
                    <animateTransform
                        attributeName='transform'
                        type='rotate'
                        from='0 18 18'
                        to='360 18 18'
                        dur='1s'
                        repeatCount='indefinite'
                    />
                </path>
            </g>
        </g>
    </svg>
)

Oval.defaultProps = {
    radius: 18
}

export default Oval
