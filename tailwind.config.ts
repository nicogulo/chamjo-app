import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                base: {
                    50: "#FFFFFF",
                    100: "#FAFAFB",
                    200: "#F5F6F8",
                    300: "#F1F2F4",
                    400: "#ECECEC",
                    500: "#C3C7CE",
                    600: "#9AA1AD",
                    700: "#727C8C",
                    800: "#5E636F",
                    900: "#222222"
                },
                primary: {
                    50: "#FCF2ED",
                    100: "#F7D8C9",
                    200: "#F2BEA6",
                    300: "#EDA482",
                    400: "#E88A5E",
                    500: "#E1662F",
                    600: "#D6591F",
                    700: "#B34A19",
                    800: "#8F3B14",
                    900: "#6B2C0F"
                },
                secondary: {
                    50: "#F2EEFC",
                    100: "#E9D9FD",
                    200: "#D2B5FB",
                    300: "#B68EF5",
                    400: "#9B70EB",
                    500: "#7543DF",
                    600: "#5A30BF",
                    700: "#4221A0",
                    800: "#2D1581",
                    900: "#1E0C6B"
                },
                transparant: {
                    primary: "#E1662F14",
                    secondary: "#7543DF14"
                },
                brand: {
                    1: "#E06343",
                    2: "#562A2C"
                }
            },
            fontSize: {
                1: "12px",
                2: "14px",
                3: "16px",
                4: "18px",
                5: "20px",
                6: "22px",
                7: "24px",
                8: "26px",
                9: "28px",
                10: "30px",
                11: "32px",
                12: "34px",
                13: "36px",
                14: "38px",
                15: "40px",
                16: "42px",
                17: "44px",
                18: "46px",
                19: "48px"
            },
            fontFamily: {
                generalSans: "'Inter',' sans-serif'"
            },

            backgroundOpacity: {
                16: "0.16"
            },
            screens: {
                xl: "1067px"
            }
        }
    },
    plugins: []
}
export default config
