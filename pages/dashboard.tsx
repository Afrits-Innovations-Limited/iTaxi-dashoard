import { NextPage } from "next";
import DashboardLayout from "../layouts/Dashboard";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";
import Axios from "../context/Axios";

const Dashboard: NextPage = () => {

    const { token, admin, revenue, setRevenue, usersReport, setUsersReport, pendingDrivers, setPendingDrivers, pendingAdmins, setPendingAdmins } = useContext(AppContext)
    const AuthUser = "Bearer " + token;
    const [timeFrame, setTimeFrame] = useState("today")
    const [revenueReportAPI, setAPIEndpoint] = useState("")
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }

    const userReportAPI = "/v1/admin/users/count"



    const pendingDriversAPI = "/v1/admin/users/drivers/pending"
    const pendingAdminsAPI = "/v1/admin/users/admins/pending"

    // Fetching UnapprovedDrivers
    useEffect(() => {
        Axios.get(pendingDriversAPI, config).then((response) => {

            console.log(response.data.data)
            setPendingDrivers(response.data.data.data);
        });
    }, [])

    // Fetching UnapprovedAdmin
    useEffect(() => {
        Axios.get(pendingAdminsAPI, config).then((response) => {

            console.log(response.data.data)
            setPendingAdmins(response.data.data.data);
        });
    }, [])

    // Fetching UsersReport
    useEffect(() => {
        Axios.get(userReportAPI, config).then((response) => {

            console.log(response.data.data)
            setUsersReport(response.data.data);
        });
    }, [])

    // Fetching Revenue Report
    useEffect(() => {
        if (timeFrame === "today") {
            setAPIEndpoint("/v1/admin/earning/today")
        }
        else if (timeFrame === "lastWeek") {
            setAPIEndpoint("/v1/admin/earning/last-week")
        }
        else if (timeFrame === "allWeek") {
            setAPIEndpoint("/v1/admin/earning/this-week")
        } else if (timeFrame === "bydate") {
            setAPIEndpoint(`/v1/admin/earning/bydate?from=${dateFrom}&to=${dateTo}`)
        } else {
            setAPIEndpoint("/v1/admin/earning/today")
        }
        Axios.get(revenueReportAPI, config).then((response) => {
            console.log(response.data.data)
            setRevenue(response.data.data);
            console.log(timeFrame);
            console.log("revenue", revenue.summary)

        });
    }, [timeFrame])

    const derivedRevenue = revenue.amount - revenue.driver_amount

    return (
        <DashboardLayout title={"iTaxi"} description={"Home page"}>
            <div className="page-header">
            </div>

            <div className="">
                <div className="banner banner-color mt-0 row">
                    <div className="page-content col-xl-7 col-lg-6 col-md-12">
                        <h3 className="mb-1">Welcome back! <span className="font-weight-bold text-primary">{admin.lastname} {admin.firstname} </span></h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Drivers</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-car-taxi icon-size float-left text-success text-success-shadow"></i><span>{usersReport.drivers}</span></h2>
                                <p className="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card ">
                        <div className="card-body">
                            <div className="card-widget">
                                <h6 className="mb-2">Riders</h6>
                                <h2 className="text-right"><i className="zmdi zmdi-pin icon-size float-left text-warning text-warning-shadow"></i><span>{usersReport.riders}</span></h2>
                                <p className="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widget">
                                <span className="h6 mb-2">Total Revenue</span>
                                <span className="ml-5">
                                    <select name="time-frame" id="" onChange={(e: any) => setTimeFrame(e.target.value)}>
                                        <option value="today">Today</option>
                                        <option value="lastWeek">Last Week</option>
                                        <option value="allWeek">This week</option>
                                        <option value="byDate">By Date</option>
                                    </select>
                                </span>
                                <h2 className="text-right mt-3"><i className="icon-size zmdi zmdi-money-box  float-left text-info text-info-shadow"></i><span>N{" "} {revenue.summary === null || revenue.amount === 0 ? "0.00" : revenue.amount - revenue.driver_amount}</span></h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Unapproved Drivers</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-car-taxi icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{pendingDrivers.length === 0 ? '0' : pendingDrivers.length}</span></h2>
                                <p className="mb-0">
                                    <span className="float-right"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Unapproved Admins</h6>
                                <h2 className="text-right "><i className="mdi mdi-account icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{pendingAdmins.length === 0 ? '0' : pendingAdmins.length}</span></h2>
                                <p className="mb-0">
                                    <span className="float-right"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>


    )
}

export default Dashboard