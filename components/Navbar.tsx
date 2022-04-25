import React, { useState, useContext } from 'react'
import Image from 'next/image'
import AppContext from '../context/AppContext'
import Link from 'next/link'

const Navbar = () => {

    const { toggle, setToggle, setProfileToggle } = useContext(AppContext)
    const [profiledpd, setProfileDPD] = useState(false)
    const [inboxdpd, setInboxDPD] = useState(false)
    const [notificationdpd, setNotificationDPD] = useState(false)

    return (
        <>
            <div className="app-header header-search-icon">
                <div className="header-style1">

                    <Link href="/">
                        <a className="header-brand">
                            <img src="/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                            <img src="/images/brand/logo.png" className="header-brand-img mobile-logo" alt="logo" />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="header-brand header-brand1" >
                            <img src="/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                            <img src="/images/brand/logo.png" className="header-brand-img mobile-logo" alt="logo" />
                        </a>
                    </Link>
                </div>
                <div className={`app-sidebar__toggle ${toggle && 'sidenav-toggled'}`} onClick={() => setToggle(!toggle)}>
                    {!toggle ? (<span className="open-toggle"><i className="fe fe-align-left"></i></span>) : (<span className="close-toggle"><i className="fe fe-x"></i></span>)}
                </div>
                <div className="d-flex  ml-auto header-right-icons">
                    {/* Notification */}
                    <div className="dropdown d-md-flex notifications">
                        <a className="nav-link icon" data-toggle="dropdown" onClick={() => {
                            setNotificationDPD(!notificationdpd);
                            profiledpd && setProfileDPD(false);
                            inboxdpd && setInboxDPD(false)
                        }}>
                            <i className="fe fe-bell"></i>
                            <span className="nav-unread badge badge-success badge-pill">2</span>
                        </a>
                        {/* Notification Dropdown*/}
                        <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${notificationdpd && 'show'}`}>
                            <a href="#" className="dropdown-item text-center">Notifications</a>
                            <div className="dropdown-divider"></div>
                            <div className="notifications-menu">
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <div className="fs-16 text-primary mr-3">
                                        <i className="fa fa-thumbs-o-up"></i>
                                    </div>
                                    <div className="">
                                        <strong>Event today</strong>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <div className="fs-16 text-primary mr-3">
                                        <i className="fa fa-commenting-o"></i>
                                    </div>
                                    <div className="">
                                        <strong>Settings</strong>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <div className="fs-16 text-danger mr-3">
                                        <i className="fa fa-cogs"></i>
                                    </div>
                                    <div className="">
                                        <strong>Your Admin Launch</strong>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item text-center">View all Notification</a>
                        </div>
                    </div>
                    {/* Inbox */}
                    <div className="dropdown d-md-flex message">
                        <a className="nav-link icon text-center" data-toggle="dropdown" onClick={() => { setInboxDPD(!inboxdpd); profiledpd && setProfileDPD(false); notificationdpd && setNotificationDPD(false) }}>
                            <i className="fe fe-mail"></i>
                            <span className="nav-unread badge badge-danger badge-pill">3</span>
                        </a>
                        {/* Inbox Dropdown */}
                        <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${inboxdpd && 'show'}`}>
                            <div className="message-menu">
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/1.jpg"></span>
                                    <div>
                                        <strong>Madeleine</strong> Hey! there I' am available....
                                        <div className="small text-muted">
                                            3 hours ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/12.jpg"></span>
                                    <div>
                                        <strong>Anthony</strong> New product Launching...
                                        <div className="small text-muted">
                                            5 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/4.jpg"></span>
                                    <div>
                                        <strong>Olivia</strong> New Schedule Realease......
                                        <div className="small text-muted">
                                            45 mintues ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex pb-3" href="#">
                                    <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/15.jpg"></span>
                                    <div>
                                        <strong>Sanderson</strong> New Schedule Realease......
                                        <div className="small text-muted">
                                            2 days ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item text-center">See all Messages</a>
                        </div>
                    </div>
                    {/* Profile */}
                    <div className="dropdown profile-1">
                        <a href="#" data-toggle="dropdown" className="nav-link pr-2 leading-none d-flex" onClick={() => { setProfileDPD(!profiledpd); inboxdpd && setInboxDPD(false); notificationdpd && setNotificationDPD(false) }}>
                            <span>
                                <img src="/images/users/15.jpg" alt="profile-user" className="avatar  profile-user brround cover-image" />
                            </span>
                        </a>
                        {/* Profile Dropdown */}
                        <div className={`dropdown-menu dropdown-menu-right dropdown-menu-arrow ${profiledpd && 'show'}`} >
                            <div className="drop-heading">
                                <div className="text-center">
                                    <h5 className="text-dark mb-0">Devid Antoni</h5>
                                    <small className="text-muted">Administrator</small>
                                </div>
                            </div>
                            <div className="dropdown-divider m-0"></div>
                            <a className="dropdown-item" href="#">
                                <i className="dropdown-icon mdi mdi-account-outline"></i> Profile
                            </a>
                            <a className="dropdown-item" href="#" onClick={() => setProfileToggle(true)}>
                                <i className="dropdown-icon  mdi mdi-settings"></i> Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                <span className="float-right"></span>
                                <i className="dropdown-icon mdi  mdi-message-outline"></i> Inbox
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="dropdown-icon mdi mdi-comment-check-outline"></i> Message
                            </a>
                            <div className="dropdown-divider mt-0"></div>
                            <a className="dropdown-item" href="#">
                                <i className="dropdown-icon mdi mdi-compass-outline"></i> Need help?
                            </a>
                            <a className="dropdown-item" href="login.html">
                                <i className="dropdown-icon mdi  mdi-logout-variant"></i> Sign out
                            </a>
                        </div>
                    </div>
                    {/* Profile Setting */}
                    <div className="dropdown d-md-flex header-settings" onClick={() => {
                        setProfileToggle(true);
                        setNotificationDPD(false); setInboxDPD(false); setProfileDPD(false)
                    }}>
                        <span className="nav-link icon">
                            <i className="fe fe-align-right"></i>
                        </span>
                    </div>
                </div>
            </div>


            {/* On Mpbile toggle */}
            <div className="mobile-header">
                <div className="container-fluid">
                    <div className="d-flex">
                        <div className={`app-sidebar__toggle ${toggle && 'sidenav-toggled'}`}>
                            <a className="open-toggle" href="#"><i className="fe fe-align-left"></i></a>
                            <a className="close-toggle" href="#"><i className="fe fe-x"></i></a>
                        </div>
                        <a className="header-brand" href="index.html">
                            <img src="/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                        </a>
                        <a className="header-brand header-brand1" href="index.html">
                            <img src="/images/brand/logo-white.png" className="header-brand-img desktop-logo" alt="logo" />
                        </a>
                        <div className="d-flex order-lg-2 ml-auto header-right-icons">
                            <button className="navbar-toggler navresponsive-toggler d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                                aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon fe fe-more-vertical text-white"></span>
                            </button>
                            <div className="dropdown profile-1">
                                <a href="#" data-toggle="dropdown" className="nav-link pr-2 leading-none d-flex">
                                    <span>
                                        <img src="../../assets/images/users/15.jpg" alt="profile-user" className="avatar  profile-user brround cover-image" />
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <div className="drop-heading">
                                        <div className="text-center">
                                            <h5 className="text-dark mb-0">Devid Antoni</h5>
                                            <small className="text-muted">Administrator</small>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider m-0"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="dropdown-icon mdi mdi-account-outline"></i> Profile
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="dropdown-icon  mdi mdi-settings"></i> Settings
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <span className="float-right"></span>
                                        <i className="dropdown-icon mdi  mdi-message-outline"></i> Inbox
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <i className="dropdown-icon mdi mdi-comment-check-outline"></i> Message
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        <i className="dropdown-icon mdi mdi-compass-outline"></i> Need help?
                                    </a>
                                    <a className="dropdown-item" href="login.html">
                                        <i className="dropdown-icon mdi  mdi-logout-variant"></i> Sign out
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown d-md-flex header-settings">
                                <a href="#" className="nav-link icon " data-toggle="sidebar-right" data-target=".sidebar-right">
                                    <i className="fe fe-align-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-1 navbar navbar-expand-lg  responsive-navbar navbar-dark d-md-none bg-white">
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div className="d-flex order-lg-2 ml-auto">
                        <div className="d-sm-flex">
                            <a href="#" className="nav-link icon search-btn">
                                <i className="fe fe-search"></i>
                            </a>
                            <div className="search-area">
                                <div className="close-btn pull-right"><button className="btn"><i className="fe fe-x"></i></button></div>
                                <form>
                                    <div className="row">
                                        <div className="input-group form-btn">
                                            <div className="input-group-append">
                                                <button className="btn" type="button" id="button-addon3"><i className="fa fa-search"></i></button>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="dropdown d-md-flex">
                            <a className="nav-link icon full-screen-link nav-link-bg">
                                <i className="fe fe-maximize fullscreen-button"></i>
                            </a>
                        </div>
                        <div className="dropdown d-md-flex notifications">
                            <a className="nav-link icon" data-toggle="dropdown">
                                <i className="fe fe-bell"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <div className="notifications-menu">
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <div className="fs-16 text-success mr-3">
                                            <i className="fa fa-thumbs-o-up"></i>
                                        </div>
                                        <div className="">
                                            <strong>Someone likes our posts.</strong>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <div className="fs-16 text-primary mr-3">
                                            <i className="fa fa-commenting-o"></i>
                                        </div>
                                        <div className="">
                                            <strong>3 New Comments.</strong>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <div className="fs-16 text-danger mr-3">
                                            <i className="fa fa-cogs"></i>
                                        </div>
                                        <div className="">
                                            <strong>Server Rebooted</strong>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item text-center">View all Notification</a>
                            </div>
                        </div>
                        <div className="dropdown d-md-flex message">
                            <a className="nav-link icon text-center" data-toggle="dropdown">
                                <i className="fe fe-mail"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <div className="message-menu">
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/1.jpg"></span>
                                        <div>
                                            <strong>Madeleine</strong> Hey! there I' am available....
                                            <div className="small text-muted">
                                                3 hours ago
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/12.jpg"></span>
                                        <div>
                                            <strong>Anthony</strong> New product Launching...
                                            <div className="small text-muted">
                                                5 hour ago
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/4.jpg"></span>
                                        <div>
                                            <strong>Olivia</strong> New Schedule Realease......
                                            <div className="small text-muted">
                                                45 mintues ago
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex pb-3" href="#">
                                        <span className="avatar avatar-md brround mr-3 align-self-center cover-image" data-image-src="../../assets/images/users/15.jpg"></span>
                                        <div>
                                            <strong>Sanderson</strong> New Schedule Realease......
                                            <div className="small text-muted">
                                                2 days ago
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item text-center">See all Messages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar