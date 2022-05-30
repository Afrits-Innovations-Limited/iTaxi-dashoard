import { NextPage } from "next";
import DashboardLayout from "../layouts/Dashboard";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { parseCookies } from "../helpers/"
import Link from "next/link";
import Axios from "../context/Axios";
import { useAppDispatch, useAppSelector } from "../hooks/reducerHooks";
import { useRouter } from "next/router";
import { createDriver, createPendingAdmins, createPendingDrivers, createRider, getPendingAdmins, getPendingDrivers, readCount } from "../store/userSlice";
import { createRevenue, driverCancelledTrips, getCancelledRequests, getCancelledTrips, getCommision, getFleets, getRevenueLastWeek, getRevenueThisWeek, setServiceType, } from "../store/cardSlice";

const Dashboard: NextPage = () => {
    const router = useRouter()
    const token = useAppSelector(state => state.admin.token)
    const admin = useAppSelector(state => state.admin.user)
    const canceledTrip = useAppSelector(state => state.card.cancelledTrips)
    const user = useAppSelector(state => state.user.count)
    const revenue = useAppSelector(state => state.card.revenue)
    const service = useAppSelector(state => state.card.serviceType)
    const cancelledRequests = useAppSelector(state => state.card.cancelledRequests)
    const pendingDriver = useAppSelector(state => state.user.pendingDrivers)
    const pendingAdmins = useAppSelector(state => state.user.pendingAdmins)
    const noOfPendingDrivers = useAppSelector(state => state.user.pendingDriversCount)
    const noOfPendingAdmins = useAppSelector(state => state.user.pendingAdminCount)
    const fleets = useAppSelector(state => state.card.fleets)
    const driverCancelled = useAppSelector(state => state.card.driverCancelled)
    const lastWeek = useAppSelector(state => state.card.lastWeekRevenue)
    const thisWeek = useAppSelector(state => state.card.thisWeekRevenue)
    const commission = useAppSelector(state => state.card.commission)

    // const date = new Date().getUTCDate()
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
    const todaysDate = `${year}-${month}-${date}`
    const startDate = admin.joined_date
    const dispatch = useAppDispatch()
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
        Axios.get("/v1/admin/users/count", config).then((res) => {
            const {
                drivers,
                riders
            } = res.data.data

            dispatch(readCount({
                driverCount: drivers,
                riderCount: riders
            }))
        });
    }, [])

    useEffect(() => {
        Axios.get("/v1/admin/users/admins/pending", config).then((res) => {
            const data = res.data.data.data
            dispatch(getPendingAdmins(data))
            dispatch(createPendingAdmins(data))

        });
        Axios.get("/v1/admin/dashboard/service-types", config).then((res) => {
            dispatch(setServiceType(res.data.data.total))
        });
        Axios.get("/v1/admin/users/drivers/pending", config).then((res) => {
            const data = res.data.data.data
            dispatch(getPendingDrivers(data))
            dispatch(createPendingDrivers(data))

        });
        Axios.get("/v1/admin/dashboard/canceled-requests", config).then((res) => {
            dispatch(getCancelledRequests(res.data.data.total))
        });
        Axios.get("/v1/admin/dashboard/fleets", config).then((res) => {
            dispatch(getFleets(res.data.data.total))
        });
        Axios.get("/v1/admin/dashboard/all-canceled-trip", config).then((res) => {
            dispatch(getCancelledTrips(res.data.data.total))

        });
        Axios.get("/v1/admin/dashboard/driver-canceled-trip", config).then((res) => {
            dispatch(driverCancelledTrips(res.data.data.total))

        });
    }, [admin])


    useEffect(() => {
        Axios.get("/v1/admin/earning/today", config).then((response) => {
            if (response.data.data.summary !== null) {
                const {
                    total,
                    amount,
                    driver_amount,
                    duration
                } = response.data.data.summary
                dispatch(createRevenue({
                    total,
                    amount,
                    driver_amount,
                    duration
                }))
            } else {
                dispatch(createRevenue({
                    total: 0,
                    amount: 0,
                    driver_amount: 0,
                    duration: 0
                }))
            }
        });
        Axios.get("/v1/admin/earning/this-week", config).then((res) => {
            if (res.data.data.summary !== null) {
                const {
                    total,
                    amount,
                    driver_amount,
                    duration
                } = res.data.data.summary
                dispatch(getRevenueThisWeek({
                    total,
                    amount,
                    driver_amount,
                    duration
                }))
            } else {
                dispatch(getRevenueThisWeek({
                    total: 0,
                    amount: 0,
                    driver_amount: 0,
                    duration: 0,
                }))
            }

        })
        Axios.get("/v1/admin/earning/last-week", config).then((res) => {
            dispatch(getRevenueLastWeek(res.data.data.summary))
        })
        // Axios.get(`/v1/admin/earning/bydate?from=${startDate}&to=${todaysDate}`, config).then((res) => {
        //     // console.log("by date", res.data.data)
        //     // dispatch(getRevenueLastWeek(res.data.data.summary))
        // })
        Axios.get(`/v1/admin/earning/overall`, config).then((res) => {

            dispatch(getCommision(res.data.data.summary))
        })
    }, [])


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
                                <h6 className="mb-2">Total No. of Rides</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-car-taxi icon-size float-left text-success text-success-shadow"></i><span>{commission.total}</span></h2>
                                <p className="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Commission</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-money icon-size float-left text-success text-success-shadow"></i><span><del>N</del>{" "}{commission.commission}</span></h2>
                                <p className="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Drivers</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-car-taxi icon-size float-left text-success text-success-shadow"></i><span>{user.driverCount}</span></h2>
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
                                <h2 className="text-right"><i className="zmdi zmdi-pin icon-size float-left text-warning text-warning-shadow"></i><span>{user.riderCount}</span></h2>
                                <p className="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-order">
                                <h6 className="mb-2">Unapproved Drivers</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-car-taxi icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{noOfPendingDrivers}</span></h2>
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
                                <h2 className="text-right "><i className="zmdi zmdi-account-circle icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{noOfPendingAdmins}</span></h2>
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
                                <h6 className="mb-2">Service Types</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-remote-control icon-size float-left text-success text-success-shadow strikethrough"></i><span>{service}</span></h2>
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
                                <h6 className="mb-2">Cancelled Requests</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-pin-off icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{cancelledRequests}</span></h2>
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
                                <h6 className="mb-2">Fleets</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-traffic icon-size float-left text-secondary text-secondary-shadow strikethrough"></i><span>{fleets}</span></h2>
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
                                <h6 className="mb-2">Rider Cancelled Trips</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-gps-off icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{canceledTrip}</span></h2>
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
                                <h6 className="mb-2">Driver Cancelled Trips</h6>
                                <h2 className="text-right "><i className="zmdi zmdi-local-taxi icon-size float-left text-danger text-danger-shadow strikethrough"></i><span>{driverCancelled}</span></h2>
                                <p className="mb-0">
                                    <span className="float-right"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Revenue */}
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widget">
                                <span className="text-left font-weight-bold mb-2">Total Revenue</span>
                                <span className="float-right font-weight-bold mb-2">Today</span>
                                <h2 className="text-right mt-3"><i className="icon-size zmdi zmdi-money-box  float-left text-info text-info-shadow"></i><span><del>N</del>{" "} {revenue.revenue}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widget">
                                <span className="text-left font-weight-bold mb-2">Total Revenue</span>
                                <span className="float-right font-weight-bold mb-2">This Week</span>
                                <h2 className="text-right mt-3"><i className="icon-size zmdi zmdi-money-box  float-left text-success text-success-shadow"></i><span><del>N</del>{" "} {thisWeek.revenue}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-widget">
                                <span className="text-left font-weight-bold mb-2">Total Revenue</span>
                                <span className="float-right font-weight-bold mb-2">Last Week</span>
                                <h2 className="text-right mt-3"><i className="icon-size zmdi zmdi-money-box  float-left text-secondary text-secondary-shadow"></i><span><del>N</del>{" "} {lastWeek.revenue}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>


    )
}


export default Dashboard



