import dayjs, { Dayjs } from "dayjs"
import localeData from "dayjs/plugin/localeData"
import "dayjs/locale/id"
export type LanguagesCode = "id" | "en"

export const formatDate = (
    date: number | Date | string | Dayjs | null,
    format: string,
    locale: LanguagesCode = "en"
): string => {
    dayjs.extend(localeData)

    if (typeof date === "number") {
        const { length } = date.toString()

        if (length === 10) {
            return dayjs.unix(date).format(format)
        }
    }

    return dayjs(date).locale(locale).format(format)
}
