/* eslint-disable react/jsx-props-no-spreading */
import React from "react"

import { SVGWithTheme } from "../illustration"

const Light: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='230' height='213' viewBox='0 0 230 213' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M0 27.1605C0 12.1602 12.1602 0 27.1605 0H192.84C207.84 0 220 12.1602 220 27.1605V196H0V27.1605Z'
            fill='#F5F6F8'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M16 36.4444C16 25.1533 25.1533 16 36.4444 16H56.5275C57.9388 16 59.0639 17.1507 59.2623 18.5481C60.4997 27.2662 67.9937 33.9706 77.0536 33.9706H142.946C152.006 33.9706 159.5 27.2662 160.737 18.5481C160.935 17.1507 162.061 16 163.472 16H183.556C194.847 16 204 25.1533 204 36.4444V196H16V36.4444Z'
            fill='#ECECEC'
        />
        <path
            opacity='0.2'
            d='M210 168C210 172.945 208.534 177.778 205.787 181.889C203.04 186 199.135 189.205 194.567 191.097C189.999 192.989 184.972 193.484 180.123 192.52C175.273 191.555 170.819 189.174 167.322 185.678C163.826 182.181 161.445 177.727 160.48 172.877C159.516 168.028 160.011 163.001 161.903 158.433C163.795 153.865 167 149.96 171.111 147.213C175.222 144.466 180.055 143 185 143C188.283 143 191.534 143.647 194.567 144.903C197.6 146.159 200.356 148.001 202.678 150.322C204.999 152.644 206.841 155.4 208.097 158.433C209.353 161.466 210 164.717 210 168Z'
            fill='#9AA1AD'
        />
        <path
            d='M221.769 201.231L206.125 185.588C210.668 180.139 212.936 173.149 212.456 166.071C211.976 158.993 208.786 152.372 203.549 147.586C198.312 142.801 191.432 140.218 184.34 140.376C177.247 140.534 170.489 143.42 165.47 148.434C160.452 153.448 157.559 160.204 157.395 167.297C157.231 174.389 159.807 181.272 164.588 186.513C169.37 191.754 175.987 194.95 183.065 195.436C190.142 195.922 197.135 193.66 202.587 189.122L218.231 204.769C218.464 205.001 218.739 205.185 219.043 205.311C219.346 205.437 219.672 205.502 220 205.502C220.328 205.502 220.654 205.437 220.957 205.311C221.261 205.185 221.536 205.001 221.769 204.769C222.001 204.537 222.185 204.261 222.311 203.957C222.437 203.654 222.501 203.329 222.501 203C222.501 202.672 222.437 202.346 222.311 202.043C222.185 201.739 222.001 201.464 221.769 201.231ZM162.5 168C162.5 163.55 163.82 159.2 166.292 155.5C168.764 151.8 172.278 148.916 176.39 147.213C180.501 145.51 185.025 145.064 189.39 145.932C193.754 146.801 197.763 148.944 200.91 152.09C204.057 155.237 206.199 159.246 207.068 163.611C207.936 167.975 207.49 172.499 205.787 176.611C204.084 180.722 201.2 184.236 197.5 186.708C193.8 189.181 189.45 190.5 185 190.5C179.035 190.494 173.316 188.121 169.097 183.903C164.879 179.685 162.507 173.965 162.5 168Z'
            fill='#9AA1AD'
        />
    </svg>
)

const Empty: React.FC<SVGWithTheme> = ({ theme, ...props }) => {
    return <Light {...props} />
}

export default Empty
