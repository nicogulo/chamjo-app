import NextHead from "next/head"

interface HeadProps extends React.PropsWithChildren<{}> {
    title?: string
    titleSuffix?: string
    description?: string
}

const Head: React.FC = ({
    title = "Chamjo | Discover Asia-based App Patterns",
    titleSuffix,
    description = "Bored of using Airbnb, Doordash, and Yadayadayada for inspiration? Say no more! Here you can be inspired by the Asian-based App Patterns that could be your next favorite app.",
    children
}: HeadProps) => {
    let fullTitle = `${title} - Chamjo | Discover Asia-based App Patterns`

    if (titleSuffix) {
        fullTitle = `${fullTitle} - ${titleSuffix}`
    }

    const iconUrl = "https://api.chamjo.design/storage/v1/object/public/icon/logo.png"
    return (
        <NextHead>
            <meta
                name='viewport'
                property='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, minimum-scale=1, user-scalable=no'
            />
            <meta name='description' property='description' content={description} />
            <meta
                name='keywords'
                property='keywords'
                content='Bored of using Airbnb, Doordash, and Yadayadayada for inspiration? Say no more! Here you can be inspired by the Asian-based App Patterns that could be your next favorite app.'
            />

            <meta name='og:type' property='og:type' content='website' key='og:type' />
            <meta name='og:site_name' property='og:site_name' content='Chamjo Design' key='og:site_name' />
            <meta name='og:image' property='og:image' content={iconUrl} key='og:image' />
            <meta name='og:title' property='og:title' content={fullTitle} key='og:title' />
            <meta name='og:description' property='og:description' content={description} key='og:description' />

            <meta name='twitter:card' property='twitter:card' content='summary' key='twitter:card' />
            <meta name='twitter:site' property='twitter:site' content='Chamjo Design' key='twitter:site' />
            <meta name='twitter:image' property='twitter:image' content={iconUrl} key='twitter:image' />
            <meta name='twitter:image:src' property='twitter:image:src' content={iconUrl} key='twitter:image:src' />
            <meta name='twitter:title' property='twitter:title' content={fullTitle} key='twitter:title' />
            <meta
                name='twitter:description'
                property='twitter:description'
                content={description}
                key='twitter:description'
            />

            <link
                rel='icon'
                type='image/png'
                href='https://ndbqcbbgigoygotysyae.supabase.co/storage/v1/object/public/icon/favicon.ico'
            />
            {children}
            <title>{fullTitle}</title>
        </NextHead>
    )
}

export default Head
