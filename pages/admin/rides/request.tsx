import React from 'react'
import DashboardLayout from '../../../layouts/Dashboard'

const Requests = () => {
    return (
        <DashboardLayout title='iTaxi - Payment Request' description='payment requests'>
            <div className="page-header">
            </div>
            <div className="">
                <div className="banner banner-color mt-0 row">
                    <div className="page-content col-xl-7 col-lg-6 col-md-12">
                        <h3 className="mb-1">Ride Requests<span className="font-weight-bold text-primary"></span></h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Cancelled Requests</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Date</th>
                                            <th className="wd-15p">Ride ID</th>
                                            <th className="wd-15p">Duration</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Rider Cancelled Trips</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Date</th>
                                            <th className="wd-15p">Ride ID</th>
                                            <th className="wd-15p">Duration</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Driver Cancelled Trips</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Date</th>
                                            <th className="wd-15p">Ride ID</th>
                                            <th className="wd-15p">Duration</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>

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

export default Requests