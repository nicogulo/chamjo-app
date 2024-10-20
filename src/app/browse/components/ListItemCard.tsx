import Image from "next/image"
import React from "react"

interface Props {
    name: string | null
    category: string | null
    mockup: string | null
    logo: string | null
    status: boolean | null
}

const ListItemCard: React.FC<Props> = ({ name, category, mockup, logo, status }) => {
    const isNew = status && "New"
    return (
        <div className='relative flex flex-row gap-4 p-6 bg-base-200 rounded-2xl min-w-[344px] min-h-[168px]'>
            <div className='flex flex-col gap-2 relative'>
                {status && (
                    <div className='flex bg-secondary-500 border-2 border-secondary-100 rounded-md absolute right-[34px] -top-3.5'>
                        <span className='text-body-xs text-base-100 font-normal uppercase py-1 px-2'>{isNew}</span>
                    </div>
                )}
                <Image
                    src={logo as string}
                    alt={name as string}
                    width={64}
                    height={64}
                    className='rounded-2xl'
                    style={{
                        boxShadow: "0px 4px 8px 2px #0315310F"
                    }}
                />
                <div className='flex flex-col'>
                    <span className='xl:text-body-lg text-base-900 truncate w-[116px]'>{name}</span>
                    <span className='text-body-md text-base-800'>{category}</span>
                </div>
            </div>
            <Image
                src={mockup as string}
                alt={name as string}
                width={164}
                height={144}
                className='absolute bottom-0 right-6'
            />
        </div>
    )
}

export default ListItemCard
