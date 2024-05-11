interface StringifyArgs {
    [key: string]: string
}

interface QueryString {
    stringify: (args: StringifyArgs) => string
}

const querystring: QueryString = {
    stringify: (args) => {
        const url = new URLSearchParams()

        Object.keys(args).forEach((key) => {
            url.append(key, args[key] ?? "")
        })

        return url.toString()
    }
}

export default querystring
