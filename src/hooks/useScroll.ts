import { useCallback, useEffect, useState } from "react"

const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [bodyOffset, setBodyOffset] = useState({
        top: 0,
        left: 0
    })

    const [scrollVertical, setScrollVertical] = useState<number>(0)
    const [scrollHorizontal, setScrollHorizontal] = useState<number>(0)
    const [verticalDirection, setVerticalDirection] = useState<string>("down")

    const handleScroll = useCallback(() => {
        setBodyOffset(document.body.getBoundingClientRect())
        setScrollVertical(-bodyOffset.top)
        setScrollHorizontal(bodyOffset.left)
        setVerticalDirection(scrollPosition > -bodyOffset.top ? "down" : "up")
        setScrollPosition(-bodyOffset.top)
    }, [bodyOffset.left, bodyOffset.top, scrollPosition])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return {
        scrollVertical,
        scrollHorizontal,
        verticalDirection
    }
}

export default useScroll
