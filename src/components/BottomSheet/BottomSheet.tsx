import { Drawer } from "vaul"

import { When } from "@components/If"
import classNames from "classnames"

type DrawerRootProps = React.ComponentProps<typeof Drawer.Root>
interface BottomSheetProps {
    /**
     * Determines whether the bottom sheet is open or not
     */
    open: boolean
    /**
     * Function to be called when the bottom sheet is dismissed
     */
    onDismiss: () => void
    /**
     * Header content for the bottom sheet, can be a string or a React node
     */
    header?: string | React.ReactNode
    /** CSS class name for the header */
    headerClassName?: string
    /**
     * Children nodes to be rendered inside the bottom sheet
     */
    children: React.ReactNode
    /**
     * ClassName Wrapper children
     */
    wrapperClassName?: string
    /**
     * ClassName Content children
     */
    contentClassName?: string
}

const BottomSheet = ({
    open,
    onDismiss,
    header,
    headerClassName,
    children,
    wrapperClassName,
    contentClassName,
    ...props
}: BottomSheetProps & DrawerRootProps) => {
    return (
        <Drawer.Root open={open} onClose={onDismiss} {...props}>
            <Drawer.Portal>
                <Drawer.Overlay onClick={onDismiss} className={classNames("fixed inset-0 bg-black/40", `z-[99]`)} />
                <Drawer.Content
                    className={classNames(
                        " bg-base-100 flex flex-col rounded-t-md mt-24 fixed bottom-0 left-0 right-0 mx-auto h-full max-h-[96%]",
                        `z-[999]`,
                        contentClassName
                    )}
                >
                    <When condition={!!header}>
                        <div className={classNames("p-3 flex justify-center", headerClassName)}>{header}</div>
                    </When>
                    <div className={classNames("p-3", wrapperClassName)}>{children}</div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default BottomSheet
