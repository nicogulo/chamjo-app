"use client"

import React, { memo, useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import OutsideClickHandler from "react-outside-click-handler"
import { Transition } from "react-transition-group"

interface CollapseMenuProps extends React.PropsWithChildren {
    open?: boolean
    onChange?: (open: boolean) => void
    overlay: React.ReactNode
    dataTestId?: string
}

const CollapseMenu: React.FC<CollapseMenuProps> = ({
    open: openProp = false,
    onChange,
    children,
    overlay,
    dataTestId = "chamjo-collapse-menu"
}) => {
    const pathname = usePathname()
    const [open, setOpen] = useState(openProp)
    const [height, setHeight] = useState<number | undefined>(open ? undefined : 0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setOpen(openProp)
    }, [openProp])

    const handleClose = () => {
        setOpen(false)
        onChange?.(false)
    }

    const handleToggle = () => {
        setOpen(!open)
        onChange?.(!open)
    }

    useEffect(() => {
        handleClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    useEffect(() => {
        if (!height || !open || !ref.current) return undefined

        const resizeObserver = new ResizeObserver((entries) => {
            if (entries && entries[0] && entries[0].contentRect) {
                setHeight(entries[0].contentRect.height)
            }
        })
        resizeObserver.observe(ref.current)
        return () => {
            resizeObserver.disconnect()
        }
    }, [height, open])

    useEffect(() => {
        if (open) {
            setHeight(ref.current?.getBoundingClientRect().height)
        } else {
            setHeight(0)
        }
    }, [open])

    return (
        <OutsideClickHandler onOutsideClick={() => handleClose()}>
            <div className='relative' onClick={handleToggle} role='button' data-testid={dataTestId}>
                {children}
            </div>

            <div
                className={`w-full absolute left-0 top-0  mt-[80px] transition-[height] duration-300 overflow-hidden z-[30] bg-base-100 rounded-xl`}
                style={{
                    boxShadow: "0px 8px 44px 0px rgba(3, 21, 49, 0.06)",
                    height
                }}
            >
                <div ref={ref}>
                    <Transition in={open} timeout={200} unmountOnExit>
                        {overlay}
                    </Transition>
                </div>
            </div>
        </OutsideClickHandler>
    )
}

export default memo(CollapseMenu)
