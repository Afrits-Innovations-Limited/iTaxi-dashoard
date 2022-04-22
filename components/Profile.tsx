import Link from 'next/link'
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Profile = () => {

    const { profileToggle, setProfileToggle } = useContext(AppContext)

    return (
        <div>
            <div className={`sidebar sidebar-right sidebar-animate ${profileToggle && 'sidebar-open'}`}>
                <div className="p-4 border-bottom">
                    <span className="fs-17">Profile Settings</span>
                    <span className="sidebar-icon text-right float-right" onClick={() => setProfileToggle(false)}><i className="fe fe-x"></i></span>
                </div>
                <div className="card-body p-0">
                    <div className="header-user text-center mt-4 pb-4">
                        <span className="avatar avatar-xxl brround">
                            <img src="/images/users/15.jpg" alt="Profile-img" className="avatar avatar-xxl brround" /></span>
                        <div className="dropdown-item text-center font-weight-semibold user h3 mb-0 p-0 mt-3">Devid Antoni</div>
                        <small>Administrator</small>
                        <div className="card-body">

                        </div>
                    </div>
                    <a className="dropdown-item  border-top" href="#">
                        <i className="dropdown-icon mdi mdi-account-outline "></i> Spruko technologies
                    </a>
                    <a className="dropdown-item border-top" href="#">
                        <i className="dropdown-icon  mdi mdi-account-plus"></i> Add another Account
                    </a>
                    <div className="card-body border-top">
                        <div className="row">
                            <div className="col-4 text-center">
                                <a className="" href="#"><i className="dropdown-icon mdi  mdi-message-outline fs-30 m-0 leading-tight"></i></a>
                                <div>Inbox</div>
                            </div>
                            <div className="col-4 text-center">
                                <a className="" href="#"><i className="dropdown-icon mdi mdi-tune fs-30 m-0 leading-tight"></i></a>
                                <div>Settings</div>
                            </div>
                            <div className="col-4 text-center">
                                <Link href="/login">
                                    <a className="" ><i className="dropdown-icon mdi mdi-logout-variant fs-30 m-0 leading-tight"></i>
                                        <div>Sign out</div>
                                    </a>

                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile