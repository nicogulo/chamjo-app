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
                    1: "#FAFAFB",
                    2: "#F5F6F7",
                    3: "#EBECEF",
                    4: "#C3C7CE",
                    5: "#9AA1AD",
                    6: "#727C8C",
                    7: "#4A576B",
                    8: "#21314A",
                    9: "#031531"
                },
                primary: {
                    1: "#FDEBD9",
                    2: "#FBD3B5",
                    3: "#F5B28E",
                    4: "#EC9270",
                    5: "#E06343",
                    6: "#C04330",
                    7: "#A12821",
                    8: "#811517",
                    9: "#6B0C15"
                }
            },
            borderRadius: {
                none: "0",
                sm: "6px",
                DEFAULT: "12px",
                md: "16px"
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
            }
        }
    },
    plugins: []
}
export default config
