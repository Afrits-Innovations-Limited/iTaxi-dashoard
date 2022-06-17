import Router from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { ErrorAlert, SuccessAlert } from '../components/Alert'
import PageHead from '../components/Head'
import AppContext from '../context/AppContext'
import Axios, { config } from '../context/Axios'
import { useAppDispatch, useAppSelector } from '../hooks/reducerHooks'

const ProfileSetup = () => {
    const dispatch = useAppDispatch()
    const { adminPhone } = useContext(AppContext)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(adminPhone)
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const setProfileAPI = "/v1/rider/login/phone/setup"

    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            } else if (error) {
                setError(false)
            }
        }, 3000);
    }, [alert, error]);

    const handleSetup = async () => {

        const data = {
            phone,
            email,
            lastname,
            firstname,
            account_type: "admin"
        }

        try {
            const response = await Axios.post(setProfileAPI, data, config);
            if (response.data.status === true) {
                setAlert(true)
                setAlertMessage(response.data.message)
                console.log(response.data)
                Router.push("/welcome")

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
        <>
            <PageHead title='iTaxi - Profile Setup' description='profile setup' />
            <div className="page">
                <div className="page-main">
                    <div className="app-content">
                        <div className='centered-logo'>
                            <img src="/images/brand/logo.png" className="header-brand-img" alt="" />
                        </div>
                        <div className="side-app">
                            <div className="page-header">
                                {alert && <SuccessAlert alertText={`Welcome, ${firstname}`} />}
                                {error && <ErrorAlert alertText={alertMessage} />}
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-xl-10 col-md-12 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Profile Setup</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputname">First Name</label>
                                                        <input type="text" className="form-control" name='firstname' value={firstname} onChange={(e: any) => setFirstname(e.target.value)} placeholder="First Name" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputname1">Last Name</label>
                                                        <input type="text" className="form-control" value={lastname} placeholder="Enter Last Name" onChange={(e: any) => setLastname(e.target.value)} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" placeholder="Email address" value={email} onChange={(e: any) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputnumber">Contact Number</label>
                                                <input type="text" name="phone" className="form-control" placeholder="Phone number" value={phone} onChange={(e: any) => setPhone(e.target.value)} readOnly />
                                            </div>

                                        </div>
                                        <div className="card-footer text-right">
                                            <button type='submit' className="btn btn-primary mt-1" onClick={handleSetup}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSetup