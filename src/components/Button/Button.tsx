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
        "inline-flex justify-center items-center text-base-100 border outline-none border-solid py-3.5 px-6 cursor-pointer transition-all duration-300 ease-in disabled:bg-base-200 disabled:border-base-2 disabled:text-base-400 disabled:cursor-not-allowed disabled:hover:bg-base-300 disabled:active:bg-base-300 disabled:hover:border-base-2 disabled:active:border-base-2",
        className,
        {
            "flex w-full": block,
            "disabled:text-base-400 disabled:bg-transparent": outline,
            "bg-brand-1 hover:bg-primary-700 active:bg-brand-1 active:border-4 active:border-primary-200 border-brand-1 hover:border-primary-4 active:border-brand-1":
                variant === "primary" && !outline,
            "bg-transparent text-primary-50 border-brand-1 hover:bg-brand-1 hover:text-base-100 active:bg-brand-1":
                variant === "primary" && outline
        }
    )

    return (
        <button
            className={buttonClass}
            style={{
                borderRadius: borderRadius,
                height: height,
                width: width
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
