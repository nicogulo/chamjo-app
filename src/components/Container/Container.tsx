import classNames from "@utils/classnames"
import React from "react"

export interface ContainerProps extends React.PropsWithChildren {
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={classNames(
                "w-[90%] min-w-full xl:min-w-[1210px] max-w-[1400px] box-border my-0 mx-auto py-0 px-3",
                className
            )}
        >
            {children}
        </div>
    )
}

export default Container
