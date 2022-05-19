import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/Dashboard'
import UpdateCars from '../../../components/UpdateCars'
import { useRouter } from 'next/router'
import AppContext from '../../../context/AppContext'
import Axios from '../../../context/Axios'

const ViewRider = () => {

    const router = useRouter()
    const { token, data, setData } = useContext(AppContext)
    const AuthUser = "Bearer " + token;
    const { rid } = router.query
    const ViewRiderAPI = `/v1/admin/users/view/${rid}`


    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }

    useEffect(() => {
        Axios.get(ViewRiderAPI, config).then((response) => {

            console.log(response.data)
            setData(response.data.data);



        });
    }, [])
    return (
        <>
            <DashboardLayout title={"iTaxi - Update A Car"} description={"car for hire"}>
                <div className="page-header">
                </div>
                <div>
                    <div className="col">
                        <div className="card ">
                            <div className="card-header ">
                                <h3 className="card-title ">Rider </h3>
                                <div className="card-options">
                                    <div><span className={`${data.driver.is_online === 0 ? "text-danger" : "text-success"} h4`}>{data.driver.approved_at === null ? "Offline" : "Online"}</span></div>
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="h4 mb-0 mt-3">{data.firstname} {data.lastname}</h4>
                                <h4 className="h6 mb-0 mt-3">{data.email}</h4>
                                <h4 className="h6 mb-0 mt-3">{data.phone}</h4>
                            </div>
                            <div className="card-footer text-center">
                                <p className=''>Joined:  <span className="h6">{data.joined_date}</span></p>
                                <p className='mt-3'>Car:  <span className="h6">{data.driver.car.brand} {data.driver.car.model}</span></p>
                                <p className=''>Plate Number: <span className="h6"> {data.driver.car.plate_number} </span></p>
                                <p className=''>Insurance: <span className={`h6 ${!data.driver.insurance_id && "text-danger"}`}> {!data.driver.insurance_id ? "Not provided" : data.driver.insurance_id} </span></p>
                                <p className=''>Licence: <span className={`h6 ${!data.driver.driver_licence_id && "text-danger"}`}> {!data.driver.driver_license_id ? "Not provided" : data.driver.driver_license_id} </span></p>
                                <p className=''>Permit: <span className={`h6 ${!data.driver.permit_id && "text-danger"}`}> {!data.driver.permit_id ? "Not provided" : data.driver.permit_id} </span></p>
                                <p className=''>Vehicle Registration: <span className={`h6 ${!data.driver.vehicle_registration_id && "text-danger"}`}> {!data.driver.vehicle_registration_id ? "Not provided" : data.driver.vehicle_registration_id} </span></p>
                                <div>Status: <span className={` h6 ${data.driver.approved_at === null ? "text-danger" : "text-success"}`}>{data.driver.approved_at === null ? "Not Approved" : "Approved"}</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayout>
        </>
    )

}

export default ViewRider