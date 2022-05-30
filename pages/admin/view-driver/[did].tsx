import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/Dashboard'
import { useRouter } from 'next/router'
import Axios from '../../../context/Axios'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../../hooks/reducerHooks'
import { createDriver } from '../../../store/userSlice'
import Ratings from '../../../components/Ratings'

const ViewDriver = () => {

    const router = useRouter()
    const token = useAppSelector(state => state.admin.token)
    const AuthUser = "Bearer " + token;
    const { did } = router.query
    const viewDriverAPI = `/v1/admin/users/view/${did}`
    const dispatch = useAppDispatch()
    const driver = useAppSelector(state => state.user.driver)

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }

    useEffect(() => {
        Axios.get(viewDriverAPI, config).then((response) => {
            dispatch(createDriver(response.data.data))
            console.log("driverfromapi", response.data)
        });
    }, [])

    console.log("driverredux", driver)
    return (
        <>
            <DashboardLayout title={"iTaxi - Driver"} description={"car for hire"}>
                <div className="page-header">
                    <Link href="/list-drivers">
                        <a className='text-black' style={{ fontSize: "17px" }}> <i className="mdi mdi-arrow-left"></i> Back</a>
                    </Link>
                </div>
                <div>
                    <div className="col">
                        <div className="card ">
                            <div className="card-header ">
                                <h3 className="card-title "><Ratings value={driver.star} /> </h3>
                                <div className="card-options">
                                    <div><span className={`${driver.driver.is_online === 0 ? "text-danger" : "text-success"} h4`}>{driver.driver.approved_at === null ? "Offline" : "Online"}</span></div>
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="h4 mb-0 mt-3">{driver.firstname} {driver.lastname}</h4>
                                <h4 className="h6 mb-0 mt-3">{driver.email}</h4>
                                <h4 className="h6 mb-0 mt-3">{driver.phone}</h4>
                            </div>
                            <div className="card-footer text-center">
                                <p className=''>Joined:  <span className="h6">{driver?.joined_date}</span></p>
                                <p className='mt-3'>Car:  <span className="h6">{driver.driver.car?.brand ? driver.driver.car.brand : " "} {driver.driver.car?.model}</span></p>
                                <p className=''>Plate Number: <span className="h6"> {driver.driver.car?.plate_number} </span></p>
                                <p className=''>Insurance Issued Date: <span className={`h6 ${!driver.driver.insurance_id && "text-danger"}`}> {!driver.driver.insurance_id ? "Not provided" : driver.driver.insurance.issued_on} </span></p>
                                <p className=''>Licence: <span className={`h6 ${!driver.driver.driver_license_id && "text-danger"}`}> {!driver.driver.driver_license_id ? "Not provided" : driver.driver.driver_license_id} </span></p>
                                <p className=''>Permit: <span className={`h6 ${!driver.driver.permit_id && "text-danger"}`}> {!driver.driver.permit_id ? "Not provided" : driver.driver.permit_id} </span></p>
                                <p className=''>Vehicle Registration: <span className={`h6 ${!driver.driver.vehicle_registration_id && "text-danger"}`}> {!driver.driver.vehicle_registration_id ? "Not provided" : driver.driver.vehicle_registration_id} </span></p>
                                <div>Status: <span className={` h6 ${driver.driver.approved_at === null ? "text-danger" : "text-success"}`}>{driver.driver.approved_at === null ? "Not Approved" : "Approved"}</span></div>
                            </div>

                        </div>
                    </div>
                </div>

            </DashboardLayout>
        </>
    )

}

export default ViewDriver