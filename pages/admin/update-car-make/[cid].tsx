import React from 'react'
import DashboardLayout from '../../../layouts/Dashboard'
import UpdateCarMake from '../../../components/UpdateCarMake'
import { useRouter } from 'next/router'

const CreateCars = () => {

    const router = useRouter()
    const { cid } = router.query
    return (
        <DashboardLayout title='iTaxi - Update Car Make' description='itaxi'>
            <div className="page-header"></div>
            <UpdateCarMake id={cid} />
        </DashboardLayout>
    )
}

export default CreateCars