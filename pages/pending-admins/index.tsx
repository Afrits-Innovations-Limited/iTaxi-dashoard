import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../layouts/Dashboard'
import { useRouter } from 'next/router'
import AppContext from '../../context/AppContext'
import Axios from '../../context/Axios'
import { InfoAlert } from '../../components/Alert'
import { useAppSelector } from '../../hooks/reducerHooks'

const PendingAdmins = () => {

    const router = useRouter()
    // const { pendingAdmins } = useContext(AppContext)
    const pendingAdmins = useAppSelector(state => state.user.pendingAdmins)
    // const [alert, setAlert] = useState(false)
    // const [alertMessage, setAlertMessage] = useState("")



    return (
        <>
            <DashboardLayout title={"iTaxi - Pending Admins"} description={"car for hire"}>
                <div className="page-header">
                    {/* {alert && <InfoAlert alertText={alertMessage} />} */}
                </div>
                <div>
                    {pendingAdmins.map((admin, index) => (
                        <div className="col-md-12 col-xl-4" key={index}>
                            <div className="card ">
                                <div className="card-header ">
                                    <h3 className="card-title ">Unapproved Admins</h3>
                                    <div className="card-options">
                                        <button className='btn btn-success button-icon ml-3 mt-1 mb-1' onClick={() => {
                                            router.replace(`/pending-admins/${admin.id}`)
                                        }}>
                                            Approve
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h4 className="h4 mb-0 mt-3">{admin.user.firstname} {" "} {admin.user.lastname} </h4>
                                    <h4 className="h6 mb-0 mt-3">{admin.user.phone} </h4>
                                    <h4 className="h6 mb-0 mt-3">{admin.user.email} </h4>

                                </div>
                                <div className="card-footer text-left">
                                    <div className="row user-social-detail">


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

export default PendingAdmins