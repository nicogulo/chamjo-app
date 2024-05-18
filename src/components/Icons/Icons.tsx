/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import IconComponents from "./images"
import classNames from "classnames"

export type IconType = keyof typeof IconComponents

export interface IconsProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Icon name
     */
    icon: IconType
    /**
     * Data test id
     */
    dataTestId?: string

    wrapperClassname?: string
}

const Icons: React.FC<IconsProps> = ({
    icon,
    width = 16,
    height = 16,
    dataTestId = "chamjo-icon",
    wrapperClassname,
    ...props
}: IconsProps) => {
    const Component = IconComponents[icon] as React.FC<React.SVGProps<SVGSVGElement>>

    return (
        <div
            data-testid={dataTestId || "chamjo-icon"}
            data-name={`icon-${icon}`}
            className={classNames("w-fit h-fit inline-flex items-center justify-center", wrapperClassname)}
        >
            <Component width={width} height={height} {...props} />
        </div>
    )
}

export default Icons
