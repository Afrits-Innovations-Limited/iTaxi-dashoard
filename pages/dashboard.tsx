import { NextPage } from "next";
import DashboardLayout from "../layouts/Dashboard";
import { user } from "../data/mockdata"
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
                                    <h3 className="mb-1">Welcome back! <span className="font-weight-bold text-primary">{admin.lastname}</span></h3>
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
                                                        <h5 className="mb-1 widget-tittle">Total Quantity</h5>
                                                        <span className=""><i className="fa fa-caret-up mr-1"></i><span>+5%</span></span>
                                                        <span className="text-muted ml-0">Last Month</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h2 className="mt-2 number-font mb-0 float-md-right">{user.revenue}</h2>
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
                                                        <h5 className="mb-1 widget-tittle">Total Cost</h5>
                                                        <span className=""><i className="fa fa-caret-down mr-1"></i><span>-7%</span></span>
                                                        <span className="text-muted ml-0">Last Month</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h2 className="mt-2 number-font mb-0 float-md-right">{user.cost}</h2>
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
                                                        <h5 className="mb-1 widget-tittle">Total Revenue</h5>
                                                        <span className=""><i className="fa fa-caret-up mr-1"></i><span>+3%</span></span>
                                                        <span className="text-muted ml-0">Last Month</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h2 className="mt-2 number-font mb-0 float-md-right">{user.revenue} </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flot-chart-absolute h-99 chart-dropshadow-danger" id="flotChart4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-header custom-header">
                                        <div>
                                            <h3 className="card-title">New Tasks</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="latest-timeline">
                                            <h5>2019</h5>
                                            <ul className="timeline mb-0">
                                                {user.task.map((project) => (
                                                    <li className="mt-0">
                                                        <a href="#" className="font-weight-semibold text-dark fs-16" target="_blank" rel="noopener noreferrer" >
                                                            {project.title}
                                                        </a>
                                                        <div><small className="fs-13 text-muted">{project.time} </small></div>
                                                        <p className="text-muted mt-2">{project.desc} </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Completed Tasks</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-wrapper">
                                            <canvas id="revenue"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-9">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Revenue</h4>
                                        <div className="card-options">
                                            <div className="btn-group">
                                                <button className="btn btn-outline-primary">Today</button>
                                                <button className="btn btn-outline-primary">Week</button>
                                                <button className="btn btn-primary">Month</button>
                                                <button className="btn btn-outline-primary">Year</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <div className="flot-chart h-300" id="flotChart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h5 className="card-title">Sales Growth</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="mx-auto chart-circle chart-circle-lg mt-3 mb-4 text-center" data-value="0.80" data-thickness="8" data-color="#a855f7"><div className="chart-circle-value text-primary ml-3">80%</div></div>
                                        <div className="text-center mt-3">
                                            <h3>Average Sales</h3>
                                            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam velit quisquam veniam excepturi.</p>
                                            <div className="col p-1 mt-2">
                                                <div className="float-left text-left">
                                                    <h3 className="ml-0 mb-2"><i className="fa fa-caret-down fa-1x text-danger mr-1"></i>$2.4</h3>
                                                    <h6 className="pb-0 mb-0">last month</h6>
                                                </div>
                                                <div className="float-right text-right">
                                                    <h3 className="mr-0 mb-2"><i className="fa fa-caret-up fa-1x text-green mr-1"></i>$3.6</h3>
                                                    <h6 className="mt-0 mb-0">Current Month</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row-deck">
                            <div className="col-lg-9 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Projects Status</h5>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Project Name</th>
                                                    <th>Team Lead</th>
                                                    <th>Date</th>
                                                    <th>Due Date</th>
                                                    <th>Feedback</th>
                                                    <th>Status</th>
                                                    <th>Preview</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.projectStatus.map((project) => (
                                                    <tr>
                                                        <td>{project.id} </td>
                                                        <td className="text-sm font-weight-600">{project.projectName}</td>
                                                        <td>{project.teamLead}</td>
                                                        <td className="text-nowrap">{project.date}</td>
                                                        <td className="text-nowrap">{project.date}</td>
                                                        <td>{project.feedback}</td>
                                                        <td className={` ${project.status === "Completed" ? "text-success" : ""}  ${project.status === 'Pending' ? "text-orange" : "text-yellow"}`}>{project.status}</td>
                                                        <td className="text-nowrap">
                                                            <Link href={project.previewLink}>
                                                                <a className="btn btn-outline-primary">View Project</a>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-3">
                                <div className="card overflow-hidden">
                                    <div className="card-header">
                                        <h5 className="card-title">New Customers</h5>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="list-group list-group-flush ">
                                            {user.customers.map((customer) => (
                                                <div className="list-group-item d-flex  align-items-center">
                                                    <div className="mr-2">
                                                        <img className="mr-3 rounded-circle" width="40" src={customer.image} alt="avatar" />
                                                    </div>
                                                    <div className="">
                                                        <div className=" h6 mb-0 text-dark">{customer.name}</div>
                                                        <small className="text-muted">{customer.designation}
                                                        </small>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <a href="#" className="btn btn-sm btn-primary">Follow</a>
                                                    </div>
                                                </div>
                                            ))}





                                        </div>
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