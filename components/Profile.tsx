import Link from 'next/link'
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { user } from "../data/mockdata"
import ReactTimeAgo from 'react-time-ago'

const Profile = () => {

    const { profileToggle, setProfileToggle, admin } = useContext(AppContext)
    const date = new Date(admin.created_at).getFullYear()

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
                        <div className="dropdown-item text-center font-weight-semibold user h3 mb-0 p-0 mt-3">{admin.lastname} {admin.firstname}</div>
                        <small className='block'>{admin.email}</small>
                        <small className='block'>{admin.phone}</small>
                        <small className='block'>{admin.account_type}</small>
                    </div>
                    <a className="dropdown-item  border-top" href="#">
                        <i className="dropdown-icon mdi mdi-account-outline "></i>
                        {date}
                    </a>
                    <a className="dropdown-item  border-top" href="#">
                        <i className="dropdown-icon mdi mdi-account-outline "></i>
                    </a>
                    <div className="card-body border-top">
                        <div className="row">
                            <div className="col-4 text-center">
                                <Link href={""}>
                                    <a className=""><i className="dropdown-icon mdi  mdi-message-outline fs-30 m-0 leading-tight"></i><div>Inbox</div></a>
                                </Link>
                            </div>
                            <div className="col-4 text-center">
                                <Link href="/edit-profile">
                                    <a className=""><i className="dropdown-icon mdi mdi-tune fs-30 m-0 leading-tight"></i>
                                        <div>Settings</div>
                                    </a>

                                </Link>

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