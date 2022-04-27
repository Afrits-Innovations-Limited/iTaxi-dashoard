import { NextPage } from "next";
import DashboardLayout from "../layouts/Dashboard";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";

const Dashboard: NextPage = () => {

    const { toggle, admin } = useContext(AppContext)

    return (
        <div className={`app sidebar-mini Left-menu-Default  Sidemenu-left-icons ${toggle && "sidenav-toggled "}`} >
            <DashboardLayout title={"iTaxi"} description={"Home page"}>
                <div className="app-content">
                    <div className="side-app">
                        <div className="page-header">
                            {/* <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><h3 className="mb-0 breadcrump-tittle">Welcome {user.name}!</h3></a></li>
                        </ol> */}
                        </div>

                        <div className="">
                            <div className="banner banner-color mt-0 row">
                                <div className="col-xl-1 col-lg-2 col-md-12 p-0">
                                    <img src="https://www.spruko.com/demo/flaira/Flaira/assets/images/svgs/email.svg" alt="image" className="image" />
                                </div>
                                <div className="page-content col-xl-7 col-lg-6 col-md-12">
                                    <h3 className="mb-1">Welcome back! <span className="font-weight-bold text-primary">{admin.lastname} {admin.firstname} </span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-xl-4 col-lg-6">
                                <div className="card overflow-hidden">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="d-flex">
                                                    <div className="order-icon mb-0 border-primary">
                                                        <i className="fa fa-database text-primary"></i>
                                                    </div>
                                                    <div className="ml-3 mt-1">
                                                        <h5 className="mb-1 widget-tittle">Rides</h5>
                                                        <span className=""><i className="fa fa-caret-up mr-1"></i><span>+5%</span></span>
                                                        <span className="text-muted ml-0">Hourly</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h2 className="mt-2 number-font mb-0 float-md-right">{"30"}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flot-chart-absolute h-99 chart-dropshadow-primary" id="flotChart2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xl-4 col-lg-6">
                                <div className="card overflow-hidden">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="d-flex">
                                                    <div className="order-icon mb-0 border-success">
                                                        <i className="fa fa-line-chart text-success"></i>
                                                    </div>
                                                    <div className="ml-3 mt-1">
                                                        <h5 className="mb-1 widget-tittle">Rating</h5>
                                                        <span className=""><i className="fa fa-caret-down mr-1"></i><span>+7%</span></span>
                                                        <span className="text-muted ml-0">Hourly</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h2 className="mt-2 number-font mb-0 float-md-right">{"70 stars"}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flot-chart-absolute h-99 chart-dropshadow-success" id="flotChart3"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xl-4 col-lg-12">
                                <div className="card overflow-hidden">
                                    <div className="card-body pb-0">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="d-flex">
                                                    <div className="order-icon mb-0 border-danger">
                                                        <i className="fa fa-dollar text-danger"></i>
                                                    </div>
                                                    <div className="ml-3 mt-1">
                                                        <h5 className="mb-1 widget-tittle">Reports/Complaints</h5>
                                                        <span className=""><i className="fa fa-caret-up mr-1"></i><span>+0%</span></span>
                                                        <span className="text-muted ml-0">Hourly</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h2 className="mt-2 number-font mb-0 float-md-right">{"0"} </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flot-chart-absolute h-99 chart-dropshadow-danger" id="flotChart4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </DashboardLayout>
        </div>

    )
}

export default Dashboard