import { lazy } from "react"

const GeneralStateIllustration = {
    Empty: lazy(() => import("./Empty")),
    Success: lazy(() => import("./Success"))
}

export default GeneralStateIllustration
