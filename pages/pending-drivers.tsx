import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../layouts/Dashboard'
import { useRouter } from 'next/router'
import AppContext from '../context/AppContext'
import Axios from '../context/Axios'
import Link from 'next/link'

const ViewDriver = () => {

    const router = useRouter()
    const { token, data, setData, setPendingDrivers, pendingDrivers } = useContext(AppContext)
    const AuthUser = "Bearer " + token;
    const { did } = router.query
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }
    const pendingDriversAPI = "/v1/admin/users/drivers/pending"

    // Fetching UnapprovedDrivers
    useEffect(() => {
        Axios.get(pendingDriversAPI, config).then((response) => {
            console.log("pending", response.data.data)
            setPendingDrivers(response.data.data.data);
        });
    }, [])


    return (
        <>
            <DashboardLayout title={"iTaxi - Pending Drivers"} description={"car for hire"}>
                <div className="page-header">
                </div>
                <div>
                    {pendingDrivers.map((driver, index) => (
                        <div className="col-md-12 col-xl-4">
                            <div className="card ">
                                <div className="card-header ">
                                    <h3 className="card-title ">Unapproved Driver</h3>
                                    <div className="card-options">

                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="h4 mb-0 mt-3">{driver.user.firstname} {" "} {driver.user.lastname} </h4>
                                    <h4 className="h6 mb-0 mt-3">{driver.user.phone} </h4>
                                    <h4 className="h6 mb-0 mt-3">{driver.user.email} </h4>

                                </div>
                                <div className="card-footer text-left">
                                    <div className="row user-social-detail">
                                        <div className="col-12">
                                            Licence:
                                            {/* ${driver.driver_license.file} */}
                                            <Link href={`http://itaxi.dap.ng/v1/storage/`} >
                                                <a className='btn btn-primary button-icon ml-3 mt-1 mb-1'>View </a>
                                            </Link>

                                        </div>
                                        <div className="col-12">
                                            Insurance:
                                            {/* ${driver.insurance.file} */}
                                            <Link href={`http://itaxi.dap.ng/v1/storage/`} >
                                                <a className='btn btn-primary button-icon ml-3 mt-1 mb-1'>View </a>
                                            </Link>

                                        </div>
                                        <div className="col-12">
                                            Permit:
                                            {/* ${driver.permit.file} */}
                                            <Link href={`http://itaxi.dap.ng/v1/storage/`} >
                                                <a className='btn btn-primary button-icon ml-3 mt-1 mb-1'>View </a>
                                            </Link>

                                        </div>
                                        <div className="col-12">
                                            Vehicle Registration:
                                            {/* ${driver.vehicle_registration.file} */}
                                            <Link href={`http://itaxi.dap.ng/v1/storage/`} >
                                                <a className='btn btn-primary button-icon ml-3 mt-1 mb-1'>View </a>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </DashboardLayout>
        </>
    )

}

export default ViewDriver