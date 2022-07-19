import React from 'react'
import { useAppSelector } from '../../../hooks/reducerHooks';
import DashboardLayout from '../../../layouts/Dashboard';

const PaymentRequest = () => {

    const token = useAppSelector(state => state.admin.token)
    const AuthUser = "Bearer " + token;

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }


    const approvedRequest = useAppSelector(state => state.card.paymentRequests.approved_requests)
    const cancelledRequests = useAppSelector(state => state.card.paymentRequests.canceled_requests)
    const pendingRequests = useAppSelector(state => state.card.paymentRequests.pending_requests)
    const unapprovedRequest = useAppSelector(state => state.card.paymentRequests.unapproved_requests)



    return (
        <DashboardLayout title='iTaxi - Payment Request' description='payment requests'>
            <div className="page-header">
            </div>
            <div className="">
                <div className="banner banner-color mt-0 row">
                    <div className="page-content col-xl-7 col-lg-6 col-md-12">
                        <h3 className="mb-1">Payment Requests<span className="font-weight-bold text-primary"></span></h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Pending Requests</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Date</th>
                                            <th className="wd-15p">Driver ID</th>
                                            <th className="wd-15p">Amount</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pendingRequests.map((request, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{(request.created_at).slice(0, 10)}</td>
                                                <td>{request.driver_id}</td>
                                                <td>{request.amount}</td>
                                                <td><a href={`/admin/payment-request/view/${request.id}`} className='btn btn-primary'>View</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Unapproved Requests</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Driver ID</th>
                                            <th className="wd-15p">Amount</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {unapprovedRequest.map((request, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{request.driver_id}</td>
                                                <td>{request.amount}</td>
                                                <td><a href={`/admin/payment-request/view/${request.driver_id}`} className='btn btn-primary'>View</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Approved Requests</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Driver ID</th>
                                            <th className="wd-15p">Amount</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {approvedRequest.map((request, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{request.driver_id}</td>
                                                <td>{request.amount} </td>
                                                <td><a href={`/admin/payment-request/view/${request.driver_id}`} className='btn btn-primary'>View</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Canceled Requests</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Driver ID</th>
                                            <th className="wd-15p">Amount</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cancelledRequests.map((request, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{request.driver_id}</td>
                                                <td>{request.amount}</td>
                                                <td><a href={`/admin/payment-request/view/${request.driver_id}`} className='btn btn-primary'>View</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default PaymentRequest