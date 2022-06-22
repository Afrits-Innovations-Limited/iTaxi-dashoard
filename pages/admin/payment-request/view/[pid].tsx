import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Axios from '../../../../context/Axios'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reducerHooks'
import DashboardLayout from '../../../../layouts/Dashboard'

const ViewPaymentRequest = () => {
    const router = useRouter()
    const pendingRequests = useAppSelector(state => state.card.paymentRequests.pending_requests)
    const { pid } = router.query
    const token = useAppSelector(state => state.admin.token)
    const AuthUser = "Bearer " + token;
    const approvePayment = `/v1/admin/payment-request/approve/${pid}`
    const unApprovePayment = `/v1/admin/payment-request/unapprove/${pid}`
    const dispatch = useAppDispatch()
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }

    const id = Number(pid)

    const requestInfo = pendingRequests.find(requestId => requestId.id == id)

    const handleApprove = async () => {
        console.log("token", token)
        try {
            const res = await Axios.post(approvePayment, config)
            const data = res.data
            console.log(data)

        } catch (error) {
            alert(error.message)
            console.log(error)
        }
    }

    const handleUnapprove = async () => {
        try {
            const res = await Axios.post(unApprovePayment, config)
            const data = res.data
            console.log(data)
        } catch (error) {
            alert(error.message)

        }

    }

    return (
        <>
            <DashboardLayout title={"iTaxi - Driver"} description={"itaxi"}>
                <div className="page-header">
                </div>
                <Link href="/admin/payment-request">
                    <a className='text-black' style={{ fontSize: "17px" }}> <i className="mdi mdi-arrow-left"></i> Back</a>
                </Link>
                <div className='row'>
                    <div className="col">
                        <div className="card ">
                            <div className="card-header ">
                                <h3 className="card-title ">Request No: {pid}</h3>
                                <div className="card-options">
                                    <button className='btn btn-success mr-20' onClick={handleApprove} >Approve</button>
                                    <button className='btn btn-danger' onClick={handleUnapprove}>Unapprove</button>
                                </div>
                            </div>
                            <div className="card-body text-center">
                                <p><span className='h5'>Date:</span>  {requestInfo?.created_at.slice(0, 10)}</p>
                                <p><span className='h5'>Amount:</span>  {requestInfo?.amount}</p>
                                <p><span className='h5'>Reason:</span> {requestInfo?.driver_reason} </p>

                            </div>
                            <div className="card-footer text-center">
                                Driver ID: {requestInfo?.driver_id}
                            </div>

                        </div>
                    </div>
                </div>

            </DashboardLayout>
        </>
    )
}

export default ViewPaymentRequest