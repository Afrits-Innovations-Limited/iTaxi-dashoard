import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import AppContext from './AppContext'


const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const { auth } = useContext(AppContext)

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