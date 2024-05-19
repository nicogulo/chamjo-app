import React from "react"
import classNames from "classnames"
import Loader from "components/Loader"

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Button content
     */
    children: React.ReactNode
    /**
     * Button variant
     */
    variant?: "primary"
    /**
     * Button outline
     */
    outline?: boolean
    /**
     * Button block
     */
    block?: boolean
    /**
     * Button disabled
     */
    disabled?: boolean
    /**
     * Button loading
     */
    loading?: boolean
    /**
     * Button height
     */
    height?: number
    /**
     * Button border radius
     */
    borderRadius?: number
    /**
     * Button width
     */
    width?: number
    /**
     * className
     */
    className?: string
}

const Button = ({
    children,
    variant = "primary",
    outline = false,
    disabled = false,
    block = false,
    loading = false,
    height = 39,
    borderRadius = 8,
    width = undefined,
    className,
    ...props
}: ButtonProps) => {
    const buttonClass = classNames(
        "inline-flex justify-center items-center text-base-1 border outline-none border-solid py-3 px-9 cursor-pointer transition-all duration-300 ease-in disabled:bg-base-2 disabled:border-base-2 disabled:text-base-4 disabled:cursor-not-allowed disabled:hover:bg-base-2 disabled:active:bg-base-2 disabled:hover:border-base-2 disabled:active:border-base-2",
        className,
        {
            "flex w-full": block,
            "disabled:text-base-4 disabled:bg-transparent": outline,
            "bg-primary-5 hover:bg-primary-6 active:bg-primary-5 border-primary-5 hover:border-primary-4 active:border-primary-5":
                variant === "primary" && !outline,
            "bg-transparent text-primary-1 border-primary-5 hover:bg-primary-5 hover:text-base-1 active:bg-primary-5":
                variant === "primary" && outline
        }
    )

    return (
        <button
            className={buttonClass}
            style={{
                borderRadius: borderRadius,
                height: height,
                width: width,
                boxShadow: "0px 6px 24px rgba(224, 99, 67, 0.25)"
            }}
            disabled={disabled}
            {...props}
        >
            {!loading ? (
                children
            ) : (
                <Loader type='ThreeDots' height={15} width={40} color={outline ? "#E06343" : "#ffffff"} />
            )}
        </button>
    )
}

export default Button
