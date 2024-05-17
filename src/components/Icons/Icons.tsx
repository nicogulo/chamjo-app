/* eslint-disable react/jsx-props-no-spreading */

import classNames from "classnames"
import * as IconsComponents from "./images"

export interface IconsProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Icon name
     */
    icon: keyof typeof IconsComponents
    /**
     * Wrapper classname
     */
    wrapperClassname?: string
}

const Icons: React.FC<IconsProps> = ({ icon, wrapperClassname, ...props }: IconsProps) => {
    const Component = IconsComponents[icon]
    return (
        <div className={classNames("inline-flex items-center justify-center", wrapperClassname)}>
            <Component {...props} />
        </div>
    )
}

export default Icons
