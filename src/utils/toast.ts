import cogoToast, { CTOptions } from "cogo-toast"

const defaultOptions: CTOptions = { position: "top-right" }

const toast = {
    success: (message: string, options?: CTOptions) => cogoToast.success(message, { ...defaultOptions, ...options }),
    info: (message: string, options?: CTOptions) => cogoToast.info(message, { ...defaultOptions, ...options }),
    loading: (message: string, options?: CTOptions) => cogoToast.loading(message, { ...defaultOptions, ...options }),
    warn: (message: string, options?: CTOptions) => cogoToast.warn(message, { ...defaultOptions, ...options }),
    error: (message: string, options?: CTOptions) => cogoToast.error(message, { ...defaultOptions, ...options })
}

export default toast
