/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react"

const LogoChamjo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width='79' height='25' viewBox='0 0 79 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
            <path
                d='M6.768 19.24C5.632 19.24 4.6 18.976 3.672 18.448C2.76 17.92 2.04 17.2 1.512 16.288C0.984 15.376 0.72 14.36 0.72 13.24C0.72 12.104 0.984 11.088 1.512 10.192C2.04 9.28 2.76 8.56 3.672 8.032C4.6 7.504 5.632 7.24 6.768 7.24C7.664 7.24 8.496 7.416 9.264 7.768C10.048 8.104 10.712 8.592 11.256 9.232L9.528 10.984C9.192 10.584 8.784 10.288 8.304 10.096C7.84 9.888 7.328 9.784 6.768 9.784C6.112 9.784 5.528 9.936 5.016 10.24C4.52 10.528 4.128 10.928 3.84 11.44C3.568 11.952 3.432 12.552 3.432 13.24C3.432 13.912 3.568 14.512 3.84 15.04C4.128 15.552 4.52 15.96 5.016 16.264C5.528 16.552 6.112 16.696 6.768 16.696C7.328 16.696 7.84 16.6 8.304 16.408C8.784 16.2 9.192 15.896 9.528 15.496L11.256 17.248C10.712 17.888 10.048 18.384 9.264 18.736C8.496 19.072 7.664 19.24 6.768 19.24ZM21.0553 19V12.352C21.0553 11.584 20.8073 10.952 20.3113 10.456C19.8313 9.96 19.2073 9.712 18.4393 9.712C17.9273 9.712 17.4713 9.824 17.0713 10.048C16.6713 10.272 16.3593 10.584 16.1353 10.984C15.9113 11.384 15.7993 11.84 15.7993 12.352L14.7673 11.776C14.7673 10.896 14.9593 10.12 15.3433 9.448C15.7273 8.76 16.2553 8.224 16.9273 7.84C17.6153 7.44 18.3833 7.24 19.2313 7.24C20.0953 7.24 20.8633 7.432 21.5353 7.816C22.2073 8.2 22.7353 8.736 23.1193 9.424C23.5033 10.096 23.6953 10.88 23.6953 11.776V19H21.0553ZM13.1593 19V1.72H15.7993V19H13.1593ZM31.2021 19.24C30.1621 19.24 29.2181 18.976 28.3701 18.448C27.5381 17.92 26.8741 17.208 26.3781 16.312C25.8981 15.4 25.6581 14.384 25.6581 13.264C25.6581 12.128 25.8981 11.112 26.3781 10.216C26.8741 9.304 27.5381 8.584 28.3701 8.056C29.2181 7.512 30.1621 7.24 31.2021 7.24C32.0821 7.24 32.8581 7.432 33.5301 7.816C34.2181 8.184 34.7621 8.696 35.1621 9.352C35.5621 10.008 35.7621 10.752 35.7621 11.584V14.896C35.7621 15.728 35.5621 16.472 35.1621 17.128C34.7781 17.784 34.2421 18.304 33.5541 18.688C32.8661 19.056 32.0821 19.24 31.2021 19.24ZM31.6341 16.744C32.6101 16.744 33.3941 16.416 33.9861 15.76C34.5941 15.104 34.8981 14.264 34.8981 13.24C34.8981 12.552 34.7621 11.944 34.4901 11.416C34.2181 10.888 33.8341 10.48 33.3381 10.192C32.8581 9.888 32.2901 9.736 31.6341 9.736C30.9941 9.736 30.4261 9.888 29.9301 10.192C29.4501 10.48 29.0661 10.888 28.7781 11.416C28.5061 11.944 28.3701 12.552 28.3701 13.24C28.3701 13.928 28.5061 14.536 28.7781 15.064C29.0661 15.592 29.4501 16.008 29.9301 16.312C30.4261 16.6 30.9941 16.744 31.6341 16.744ZM34.7301 19V15.904L35.1861 13.096L34.7301 10.312V7.48H37.3701V19H34.7301ZM40.2999 19V7.48H42.9399V19H40.2999ZM47.9559 19V12.136C47.9559 11.368 47.7159 10.776 47.2359 10.36C46.7559 9.928 46.1639 9.712 45.4599 9.712C44.9799 9.712 44.5479 9.808 44.1639 10C43.7959 10.192 43.4999 10.472 43.2759 10.84C43.0519 11.192 42.9399 11.624 42.9399 12.136L41.9079 11.56C41.9079 10.68 42.0999 9.92 42.4839 9.28C42.8679 8.64 43.3879 8.144 44.0439 7.792C44.6999 7.424 45.4359 7.24 46.2519 7.24C47.0679 7.24 47.8039 7.416 48.4599 7.768C49.1159 8.12 49.6359 8.616 50.0199 9.256C50.4039 9.896 50.5959 10.664 50.5959 11.56V19H47.9559ZM55.6119 19V12.136C55.6119 11.368 55.3719 10.776 54.8919 10.36C54.4119 9.928 53.8199 9.712 53.1159 9.712C52.6519 9.712 52.2279 9.808 51.8439 10C51.4599 10.192 51.1559 10.472 50.9319 10.84C50.7079 11.192 50.5959 11.624 50.5959 12.136L49.1079 11.56C49.1879 10.68 49.4439 9.92 49.8759 9.28C50.3079 8.64 50.8599 8.144 51.5319 7.792C52.2199 7.424 52.9719 7.24 53.7879 7.24C54.6199 7.24 55.3719 7.416 56.0439 7.768C56.7159 8.12 57.2519 8.616 57.6519 9.256C58.0519 9.896 58.2519 10.664 58.2519 11.56V19H55.6119ZM59.8198 24.04C59.0038 24.04 58.3398 23.912 57.8278 23.656C57.2998 23.4 56.8198 23.024 56.3878 22.528L58.0918 20.824C58.2838 21.08 58.4998 21.264 58.7398 21.376C58.9798 21.504 59.2758 21.568 59.6278 21.568C60.0598 21.568 60.4278 21.432 60.7318 21.16C61.0518 20.904 61.2118 20.52 61.2118 20.008V7.48H63.8518V19.984C63.8518 20.864 63.6598 21.6 63.2758 22.192C62.9078 22.8 62.4198 23.256 61.8118 23.56C61.2038 23.88 60.5398 24.04 59.8198 24.04ZM62.5798 5.368C62.1318 5.368 61.7558 5.216 61.4518 4.912C61.1638 4.608 61.0198 4.232 61.0198 3.784C61.0198 3.336 61.1638 2.96 61.4518 2.656C61.7558 2.352 62.1318 2.2 62.5798 2.2C63.0438 2.2 63.4198 2.352 63.7078 2.656C63.9958 2.96 64.1398 3.336 64.1398 3.784C64.1398 4.232 63.9958 4.608 63.7078 4.912C63.4198 5.216 63.0438 5.368 62.5798 5.368ZM72.0643 19.24C70.9443 19.24 69.9283 18.976 69.0163 18.448C68.1043 17.904 67.3763 17.176 66.8323 16.264C66.3043 15.352 66.0403 14.336 66.0403 13.216C66.0403 12.096 66.3043 11.088 66.8323 10.192C67.3763 9.296 68.1043 8.584 69.0163 8.056C69.9283 7.512 70.9443 7.24 72.0643 7.24C73.2003 7.24 74.2243 7.504 75.1363 8.032C76.0483 8.56 76.7683 9.28 77.2963 10.192C77.8403 11.088 78.1123 12.096 78.1123 13.216C78.1123 14.336 77.8403 15.352 77.2963 16.264C76.7683 17.176 76.0483 17.904 75.1363 18.448C74.2243 18.976 73.2003 19.24 72.0643 19.24ZM72.0643 16.696C72.7203 16.696 73.2963 16.552 73.7923 16.264C74.3043 15.96 74.6963 15.544 74.9683 15.016C75.2563 14.488 75.4003 13.888 75.4003 13.216C75.4003 12.544 75.2563 11.952 74.9683 11.44C74.6803 10.928 74.2883 10.528 73.7923 10.24C73.2963 9.936 72.7203 9.784 72.0643 9.784C71.4243 9.784 70.8483 9.936 70.3363 10.24C69.8403 10.528 69.4483 10.928 69.1603 11.44C68.8883 11.952 68.7523 12.544 68.7523 13.216C68.7523 13.888 68.8883 14.488 69.1603 15.016C69.4483 15.544 69.8403 15.96 70.3363 16.264C70.8483 16.552 71.4243 16.696 72.0643 16.696Z'
                fill='#E06343'
            />
        </svg>
    )
}

export default LogoChamjo
