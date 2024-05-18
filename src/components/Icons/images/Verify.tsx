/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const Verify: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M14.3586 4.01026C15.2761 3.22575 16.7786 3.22575 17.7094 4.01026L19.8103 5.81864C20.2092 6.16436 20.9538 6.44359 21.4857 6.44359H23.7462C25.1556 6.44359 26.3125 7.60042 26.3125 9.00989V11.2704C26.3125 11.7889 26.5917 12.5469 26.9374 12.9458L28.7458 15.0467C29.5303 15.9642 29.5303 17.4667 28.7458 18.3975L26.9374 20.4984C26.5917 20.8973 26.3125 21.6419 26.3125 22.1738V24.4343C26.3125 25.8437 25.1556 27.0006 23.7462 27.0006H21.4857C20.9671 27.0006 20.2092 27.2798 19.8103 27.6255L17.7094 29.4339C16.7919 30.2184 15.2894 30.2184 14.3586 29.4339L12.2577 27.6255C11.8588 27.2798 11.1141 27.0006 10.5823 27.0006H8.28191C6.87245 27.0006 5.71562 25.8437 5.71562 24.4343V22.1605C5.71562 21.6419 5.43638 20.8973 5.10396 20.4984L3.30888 18.3842C2.53766 17.4667 2.53766 15.9774 3.30888 15.06L5.10396 12.9458C5.43638 12.5469 5.71562 11.8022 5.71562 11.2837V8.99659C5.71562 7.58712 6.87245 6.43029 8.28191 6.43029H10.5823C11.1009 6.43029 11.8588 6.15106 12.2577 5.80534L14.3586 4.01026Z'
                fill='#4394DF'
            />
            <path
                d='M14.411 20.9239C14.1451 20.9239 13.8924 20.8175 13.7063 20.6313L10.4884 17.4135C10.1028 17.0279 10.1028 16.3896 10.4884 16.004C10.874 15.6184 11.5123 15.6184 11.8979 16.004L14.411 18.5171L20.1287 12.7995C20.5143 12.4139 21.1525 12.4139 21.5381 12.7995C21.9237 13.1851 21.9237 13.8233 21.5381 14.2089L15.1157 20.6313C14.9296 20.8175 14.6769 20.9239 14.411 20.9239Z'
                fill='#F5F6F7'
            />
        </svg>
    )
}
export default Verify