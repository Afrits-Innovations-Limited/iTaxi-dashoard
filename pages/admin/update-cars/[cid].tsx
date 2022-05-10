import React from 'react'
import DashboardLayout from '../../../layouts/Dashboard'
import UpdateCars from '../../../components/UpdateCars'
import { useRouter } from 'next/router'

const CreateCars = () => {

    const router = useRouter()
    const { cid } = router.query
    return (
        <>
            <UpdateCars id={cid} />
        </>
    )
}

export default CreateCars