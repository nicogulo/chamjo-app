import { getCookie, removeCookie, setCookie } from "helpers/cookies"

const cookieKey = "clicked_card"
const defaultValue = 0

export const getClickedCard = (): { status: string | number } => {
    const clickedCard = getCookie(cookieKey)

    return {
        status: clickedCard || defaultValue
    }
}

export const setClickedCard = (value: string | number): void => {
    setCookie(cookieKey, value)
}

export const removeClickedCard = (): void => {
    removeCookie(cookieKey)
}
