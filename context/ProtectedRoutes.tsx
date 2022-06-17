import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { useAppSelector } from '../hooks/reducerHooks'



const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const auth = useAppSelector(state => state.admin.auth)

    useEffect(() => {
        if (!auth) {
            router.push("/login")
        }
    }, [router, auth])
    return (
        <>{auth ? children : null} </>
    )
}

export default ProtectedRoutes