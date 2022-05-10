import React from 'react'
import DashboardLayout from '../../layouts/Dashboard'
import CreateCarMake from '../../components/CreateCarMake'

const CreateCars = () => {
    return (
        <DashboardLayout title='iTaxi - Add Car' description='itaxi'>
            <div className="page-header"></div>
            <CreateCarMake />
        </DashboardLayout>
    )
}

export default CreateCars