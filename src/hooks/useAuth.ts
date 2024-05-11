import { supabase } from "@config/auth"
import { User } from "@supabase/supabase-js"
import toast from "@utils/toast"

import { useEffect, useState } from "react"

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const auth = async () => {
        const { data, error } = await supabase.auth.getSession()

        const loggedIn = data.session && data.session.user
        if (loggedIn) {
            setIsLoggedIn(true)
        }

        if (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        auth()
    }, [])

    return { isLoggedIn }
}

export const useProfile = () => {
    const [profile, setProfile] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = async () => {
            const {
                data: { user }
            } = await supabase.auth.getUser()
            setProfile(user)
            setLoading(false)
        }
        fetchProfile()
    }, [])

    return { profile, loading }
}

export default useAuth
