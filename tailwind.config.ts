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
                "body-xs": [
                    "10px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "0"
                    }
                ],
                "body-sm": [
                    "12px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "0"
                    }
                ],
                "body-md": [
                    "14px",
                    {
                        lineHeight: "20px",
                        letterSpacing: "0"
                    }
                ],
                "body-lg": [
                    "16px",
                    {
                        lineHeight: "24px",
                        letterSpacing: "0"
                    }
                ],
                "body-xl": [
                    "18px",
                    {
                        lineHeight: "24px",
                        letterSpacing: "0"
                    }
                ],
                "body-2xl": [
                    "20px",
                    {
                        lineHeight: "24px",
                        letterSpacing: "0"
                    }
                ],
                "heading-xs": [
                    "24px",
                    {
                        lineHeight: "32px",
                        letterSpacing: "-0.02em"
                    }
                ],
                "heading-sm": [
                    "32px",
                    {
                        lineHeight: "40px",
                        letterSpacing: "-0.02em"
                    }
                ],
                "heading-md": [
                    "36px",
                    {
                        lineHeight: "48px",
                        letterSpacing: "-0.02em"
                    }
                ],
                "heading-lg": [
                    "48px",
                    {
                        lineHeight: "64px",
                        letterSpacing: "-0.02em"
                    }
                ],
                "heading-xl": [
                    "56px",
                    {
                        lineHeight: "72px",
                        letterSpacing: "-0.02em"
                    }
                ]
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
