import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import Axios from '../../context/Axios'
import DashboardLayout from '../../layouts/Dashboard'

const ApproveAdmin = () => {

    const router = useRouter()
    const { pid } = router.query
    const approveAdmin = `/v1/admin/users/admin/approve/${pid}`
    const { token } = useContext(AppContext)
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const AuthUser = "Bearer " + token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }
    useEffect(() => {
        Axios.get(approveAdmin, config).then((response) => {
            console.log("pending", response.data)
            if (response.data.status) {
                setAlert(true)
                setAlertMessage(response.data.message)
            }
            else {
                setError(true)
                setAlertMessage(response.data.message)
            }


        });
    })

    return (
        <DashboardLayout title={"iTaxi - Pending Admins"} description={"car for hire"}>
            <div className="page-header">

            </div>
            <div>
                <div className="">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Admin</h5>
                                <button type="button" className="close" onClick={() =>
                                    router.push("/pending-admins")
                                } aria-label="Close">
                                    <span >×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className={`text-lg ${error && "text-danger"} ${alert && "text-black"}`}>{alertMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className={`btn ${error ? "btn-danger" : "btn-secondary"}`} onClick={() =>
                                    router.push("/pending-admins")
                                }>Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default ApproveAdmin