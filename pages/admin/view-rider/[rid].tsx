import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/Dashboard'
import UpdateCars from '../../../components/UpdateCars'
import { useRouter } from 'next/router'
import AppContext from '../../../context/AppContext'
import Axios from '../../../context/Axios'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../../hooks/reducerHooks'
import { createRider, createRidersList } from '../../../store/userSlice'
import Ratings from '../../../components/Ratings'

const ViewRider = () => {

    const router = useRouter()
    const token = useAppSelector(state => state.admin.token)
    const data = useAppSelector(state => state.user.rider)
    // const {  data, setData } = useContext(AppContext)
    const AuthUser = "Bearer " + token;
    const { rid } = router.query
    const ViewRiderAPI = `/v1/admin/users/view/${rid}`
    const dispatch = useAppDispatch()

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
            dispatch(createRider(response.data.data))
            console.log(response.data.data)

            // setData(response.data.data);



        });
    }, [])

    console.log("derivedRider", data)
    return (
        <>
            <DashboardLayout title={"iTaxi - Rider"} description={"car for hire"}>
                <div className="page-header">
                    <Link href="/list-riders">
                        <a className='text-black' style={{ fontSize: "17px" }}> <i className="mdi mdi-arrow-left"></i> Back</a>
                    </Link>
                </div>
                <div>
                    <div className="col">
                        <div className="card ">
                            <div className="card-header ">
                                <h3 className="card-title "><Ratings value={data?.star} /> </h3>
                                <div className="card-options">
                                    <div><span className={`${data?.is_active === 0 ? "text-danger" : "text-success"} h4`}>{data?.is_active === null ? "Offline" : "Online"}</span></div>
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="h4 mb-0 mt-3">{data?.firstname} {data?.lastname}</h4>
                                <h4 className="h6 mb-0 mt-3">{data?.email}</h4>
                                <h4 className="h6 mb-0 mt-3">{data?.phone}</h4>
                            </div>
                            <div className="card-footer text-center">
                                <p className=''>Joined:  <span className="h6">{data?.joined_date}</span></p>
                                <p className='mt-3'>Home Address:  <span className="h6">{data?.rider?.home_address}</span></p>
                                <p className=''>Work Address: <span className="h6"> {data?.rider?.work_address} </span></p>
                                <p className=''>Id: <span className={`h6 ${!data?.rider?.user_id && "text-danger"}`}> {!data?.rider?.user_id ? "Not provided" : data?.rider?.user_id} </span></p>

                            </div>
                        </div>
                    </div>
                </div>

            </DashboardLayout>
        </>
    )

}

export default ViewRider