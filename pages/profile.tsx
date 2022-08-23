import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/reducerHooks'
import DashboardLayout from '../layouts/Dashboard'
import { BsStarFill } from 'react-icons/bs'
import { FaDribbble, FaFacebook, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Axios from '../context/Axios'
import { ErrorAlert, SuccessAlert } from '../components/Alert'

const Profile = () => {

    const router = useRouter()
    const token = useAppSelector(state => state?.admin.token)
    const user = useAppSelector(state => state?.admin?.user)
    const commission = useAppSelector(state => state.card.commission)
    const admin = useAppSelector(state => state?.admin.user)
    const driversList = useAppSelector(state => state.user.driversList)
    const ridersList = useAppSelector(state => state.user.ridersList)
    const pendingAdmins = useAppSelector(state => state.user.pendingAdmins)
    const [tabs, setTabs] = useState({
        drivers: true,
        riders: false,
        admins: false
    })
    const [editPassword, setEditPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
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
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            } else if (error) {
                setError(false)
            }
        }, 3000);
    }, [alert, error]);

    const handleEditProfile = async () => {
        const changePasswordAPI = '/v1/admin/me/change_password'
        const data = {
            oldPassword,
            password
        }
        try {
            const response = await Axios.post(changePasswordAPI, data, config);
            if (response.data.status === true) {
                setAlert(true)
                setAlertMessage(response.data.message)
                console.log(response.data)
            } else {
                console.log(response.data.message);
                setError(true)
                setAlertMessage(response.data.message)
            }
        } catch (err: any) {
            console.log(err)
            setError(true)
            setAlertMessage(err.message)
        }

    }

    return (
        <DashboardLayout title={"iTaxi - Profile"} description={"Home page"}>
            <div className="page-header">
                {alert && <SuccessAlert alertText={alertMessage} />}
                {error && <ErrorAlert alertText={alertMessage} />}
            </div>
            <div className="row" id="user-profile">
                <div className="col-xl-3 col-md-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="wideget-user text-center">
                                <div className="wideget-user-desc pt-5">
                                    <div className="wideget-user-img">
                                        <img className="" src="/images/users/uservatar.png" alt="img" />
                                    </div>
                                    <div className="user-wrap">
                                        <h3 className="pro-user-username text-dark">{user?.firstname} {user?.lastname}</h3>
                                        <h6 className="text-muted mb-2">Administrator</h6>
                                        <div className="wideget-user-rating">
                                            <BsStarFill style={{ color: '#FDCC0D' }} />
                                            <BsStarFill style={{ color: '#FDCC0D' }} />
                                            <BsStarFill style={{ color: '#FDCC0D' }} />
                                            <BsStarFill style={{ color: '#FDCC0D' }} />
                                            <BsStarFill style={{ color: '#FDCC0D' }} />

                                        </div>
                                    </div>
                                </div>
                                <div className="wideget-user-info">
                                    <div className="wideget-user-icons pb-5">
                                        <a href="#" className="bg-blue text-white"><FaFacebookF /> </a>
                                        <a href="#" className="bg-success text-white"><FaTwitter /></a>
                                        <a href="#" className="bg-info text-white"><FaGoogle /> </a>
                                        <a href="#" className="bg-yellow text-white"><FaDribbble /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer p-0">
                            <div className="row">
                                <div className="col-sm-6 border-right ">
                                    <div className="description-block">
                                        <h5 className="description-header">{commission.total}</h5>
                                        <span className="text-muted">Rides</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="description-block">
                                        <h5 className="description-header">{commission.amount}</h5>
                                        <span className="text-muted">Revenue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Personal Info</h3>
                        </div>
                        <div className="card-body">
                            <div className="media-list">
                                <div className="media mt-1 pb-2">
                                    <div className="mediaicon">
                                        <i className="fe fe-user" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body ml-5 mt-1">
                                        <h6 className="mediafont text-dark mb-1">Full Name</h6>
                                        <span className="d-block">{admin?.lastname} {admin?.firstname}</span>
                                    </div>
                                </div>
                                <div className="media mt-1 pb-2">
                                    <div className="mediaicon">
                                        <i className="fe fe-mail" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body ml-5 mt-1">
                                        <h6 className="mediafont text-dark mb-1">Email Address</h6>
                                        <span className="d-block">{admin?.email} </span>
                                    </div>
                                </div>
                                {/* <div className="media mt-1 pb-2">
                                    <div className="mediaicon">
                                        <i className="fe fe-map-pin" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body ml-5 mt-1">
                                        <h6 className="mediafont text-dark mb-1">Location</h6>
                                        <span className="d-block">{}</span>
                                    </div>
                                </div> */}
                                <div className="media mt-1 pb-2">
                                    <div className="mediaicon">
                                        <i className="fe fe-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body ml-5 mt-1">
                                        <h6 className="mediafont text-dark mb-1">Phone Number</h6>
                                        <span className="d-block">{admin?.phone}</span>
                                    </div>
                                </div>

                                <div className="media mt-1 pb-2">
                                    <div className="mediaicon">
                                        <i className="fe fe-layers" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body ml-5 mt-1">
                                        <h6 className="mediafont text-dark mb-1">Occupation</h6>
                                        <span className="d-block">Administrator</span>
                                    </div>
                                </div>
                                <div className="media mt-1 pb-2">
                                    <div className="mediaicon">
                                        <i className="fe fe-edit" aria-hidden="true"></i>
                                    </div>
                                    <div className="media-body ml-3 mt-1">
                                        <button className="mediafont text-dark mb-1 btn btn-primary button-icon" onClick={() => setEditPassword(true)}>Edit Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-md-12">
                    <div className="card">
                        <div className="card-header p-0">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1">
                                        <ul className="nav">
                                            <li onClick={() => setTabs({
                                                riders: false,
                                                drivers: false,
                                                admins: true
                                            })}><a className={`${tabs.admins && 'active show'}`}>Admins</a></li>
                                            <li onClick={() => setTabs({
                                                riders: false,
                                                drivers: true,
                                                admins: false
                                            })}><a className={`${tabs.drivers && 'active show'}`}>Drivers</a></li>
                                            <li onClick={() => setTabs({
                                                riders: true,
                                                drivers: false,
                                                admins: false
                                            })}><a className={`${tabs.riders && 'active show'}`}>Riders</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="border-0">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-61">
                                        {tabs.drivers && (
                                            <ul className="widget-users row">
                                                {driversList.map((drivers, index) => (
                                                    <div className="col-lg-6" key={index}>
                                                        <div className="d-flex align-items-center border p-3 mb-3">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src="/images/users/uservatar.png" />
                                                            <div className="wrapper ml-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">{drivers?.firstname} {drivers?.lastname} </p>
                                                                <small>{drivers?.phone}</small>
                                                            </div>
                                                            <div className="float-right ml-auto">
                                                                <a onClick={() => { router.replace(`/admin/view-driver/${drivers.id}`) }} className="btn btn-default btn-sm"><i className="si si-eye mr-1"></i>View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
                                        {tabs.riders && (
                                            <ul className="widget-users row">
                                                {ridersList.map((riders, index) => (
                                                    <div className="col-lg-6" key={index}>
                                                        <div className="d-flex align-items-center border p-3 mb-3">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src="/images/users/uservatar.png" />
                                                            <div className="wrapper ml-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">{riders?.firstname} {riders?.lastname} </p>
                                                                <small>{riders?.phone}</small>
                                                            </div>
                                                            <div className="float-right ml-auto">
                                                                <a onClick={() => { router.replace(`/admin/view-rider/${riders.id}`) }} className="btn btn-default btn-sm"><i className="si si-eye mr-1"></i>View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
                                        {tabs.admins && (
                                            <ul className="widget-users row">
                                                {pendingAdmins.map((admins, index) => (
                                                    <div className="col-lg-6" key={index}>
                                                        <div className="d-flex align-items-center border p-3 mb-3">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src="/images/users/uservatar.png" />
                                                            <div className="wrapper ml-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">{admins?.user?.firstname} {admins?.user.lastname} </p>
                                                                <small>{admins?.user.phone}</small>
                                                            </div>
                                                            <div className="float-right ml-auto">
                                                                <a onClick={() => {
                                                                    router.replace(`/pending-admins/${admins.id}`)
                                                                }} className="btn btn-default btn-sm"><i className="si si-eye mr-1"></i>View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {editPassword && (
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Profile</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Enter Password</label>
                                            <input type="password" className="form-control" value={oldPassword} onChange={(e: any) => setOldPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label>New Password</label>
                                            <input type="password" className="form-control" value={password} onChange={(e: any) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label>Confirm Password</label>
                                            <input type="password" className="form-control" value={confirmPassword} onChange={(e: any) => setConfirmPassword(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer text-right">
                                <button onClick={handleEditProfile} className="btn btn-primary mt-1 mr-3">Save</button>
                                <button onClick={() => setEditPassword(false)} className="btn btn-danger mt-1">Cancel</button>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </DashboardLayout >
    )
}

export default Profile