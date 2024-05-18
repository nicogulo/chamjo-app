import React from "react"
import dynamic from "next/dynamic"

const lazy = (fn: () => Promise<{ default: React.FC<React.SVGProps<SVGSVGElement>> }>) => {
    if (typeof window === "undefined") {
        return React.lazy(fn)
    }

    return dynamic(() => fn().then((module) => ({ default: module.default })), {
        ssr: false
    })
}

const IconComponents = {
    ArrowLeft: lazy(() => import("./ArrowLeft")),
    ArrowLink: lazy(() => import("./ArrowLink")),
    ArrowNavbar: lazy(() => import("./ArrowNavbar")),
    ArrowRight: lazy(() => import("./ArrowRight")),
    ArrowRightCircle: lazy(() => import("./ArrowCircleRight")),
    Art1: lazy(() => import("./Art1")),
    Art2: lazy(() => import("./Art2")),
    Art3: lazy(() => import("./Art3")),
    Barcode: lazy(() => import("./Barcode")),
    CheckList: lazy(() => import("./Checklist")),
    Chevron: lazy(() => import("./Chevron")),
    ChevronLeft: lazy(() => import("./ChevronLeft")),
    Close: lazy(() => import("./Close")),
    CloseCircle: lazy(() => import("./CloseCircle")),
    CloseAquare: lazy(() => import("./CloseSquare")),
    Cross: lazy(() => import("./Cross")),
    Filter: lazy(() => import("./Filter")),
    GoogleColor: lazy(() => import("./GoogleColor")),
    GoogleIcon: lazy(() => import("./GoogleIcon")),
    IlusColor: lazy(() => import("./IlusColor")),
    Instagrams: lazy(() => import("./Instagrams")),
    Linkedins: lazy(() => import("./Linkedins")),
    ListIconBenefit: lazy(() => import("./List")),
    Logo: lazy(() => import("./Logo")),
    LogoChamjo: lazy(() => import("./LogoPrimary")),
    LogoChamjoSencodary: lazy(() => import("./LogoSecondary")),
    Logout: lazy(() => import("./Logout")),
    More: lazy(() => import("./More")),
    Notfound: lazy(() => import("./NotFound")),
    Send: lazy(() => import("./Send")),
    Shield: lazy(() => import("./Shield")),
    Star: lazy(() => import("./Star")),
    Telegrams: lazy(() => import("./Telegrams")),
    Twitters: lazy(() => import("./Twitters")),
    Verify: lazy(() => import("./Verify")),
    X: lazy(() => import("./X"))
}

export default IconComponents
