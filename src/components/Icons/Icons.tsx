/* eslint-disable react/jsx-props-no-spreading */

import * as IconsComponents from "./images"

export interface IconsProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Icon name
     */
    icon: keyof typeof IconsComponents
}

const Icons: React.FC<IconsProps> = ({ icon, ...props }: IconsProps) => {
    const Component = IconsComponents[icon]
    return (
        <div className='inline-flex items-center justify-center'>
            <Component {...props} />
        </div>
    )
}

export default Icons
