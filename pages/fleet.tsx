import React from 'react'
import DashboardLayout from '../layouts/Dashboard'

export default function Fleets() {
    return (
        <DashboardLayout title={"iTaxi - Fleets"} description={"Home page"}>
            <div className="page-header">
            </div>

            <div className="">
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Fleets</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">Driver ID</th>
                                            <th className="wd-15p">Description</th>
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
