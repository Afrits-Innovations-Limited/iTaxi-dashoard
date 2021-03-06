import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../layouts/Dashboard'
import { useRouter } from 'next/router'
import AppContext from '../../context/AppContext'
import Axios from '../../context/Axios'
import Link from 'next/link'
import { useAppSelector } from '../../hooks/reducerHooks'

const ViewDriver = () => {

    const router = useRouter()
    const token = useAppSelector(state => state.admin.token)
    const pendingDriver = useAppSelector(state => state.user.pendingDrivers)
    const { setPendingDrivers, pendingDrivers } = useContext(AppContext)
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
    return (
        <>
            <DashboardLayout title={"iTaxi - Pending Drivers"} description={"car for hire"}>
                <div className="page-header">
                </div>
                <div>
                    {pendingDriver.map((driver, index) => (
                        <div className="col-md-12 col-xl-4" key={index}>
                            <div className="card ">
                                <div className="card-header ">
                                    <h3 className="card-title ">Unapproved Driver</h3>
                                    <div className="card-options">
                                        <button className='btn btn-success button-icon ml-3 mt-1 mb-1' onClick={() => {
                                            router.replace(`/pending-drivers/${driver.id}`)
                                        }}>
                                            Approve
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="h4 mb-0 mt-3">{driver.user.firstname} {" "} {driver.user.lastname} </h4>
                                    <h4 className="h6 mb-0 mt-3">{driver.user.phone} </h4>
                                    <h4 className="h6 mb-0 mt-3">{driver.user.email} </h4>

                                </div>
                                <div className="card-footer text-left">
                                    <div className="row">
                                        <div className="col-6 mb-6">
                                            Licence:
                                            {driver.driver_license.file ? <Link href={`http://itaxi.dap.ng/v1/storage/${driver.driver_license.file}`} >
                                                <a className='btn btn-primary float-right'>View </a>
                                            </Link> : " Not provided"}


                                        </div>
                                        <div className="col-6 mb-6">
                                            Insurance:
                                            {driver.insurance.file ? <Link href={`http://itaxi.dap.ng/v1/storage/{driver.insurance.file}`} >
                                                <a className='btn btn-primary float-right'>View </a>
                                            </Link> : "Not provided"}


                                        </div>
                                        <div className="col-6 mb-6">
                                            Permit:
                                            {driver.permit.file ? <Link href={`http://itaxi.dap.ng/v1/storage/${driver.permit.file}`} >
                                                <a className='btn btn-primary float-right'>View </a>
                                            </Link> : "Not Provided"}


                                        </div>
                                        <div className="col-6 mb-6">
                                            Vehicle Registration:
                                            {driver.vehicle_registration.file ? <Link href={`http://itaxi.dap.ng/v1/storage/${driver.vehicle_registration.file}`} >
                                                <a className='btn btn-primary float-right'>View </a>
                                            </Link> : "Not provided"}
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