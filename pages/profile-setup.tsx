import React, { useEffect, useState } from 'react'
import { ErrorAlert, SuccessAlert } from '../components/Alert'
import PageHead from '../components/Head'
import Axios from '../context/Axios'

const ProfileSetup = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [account, setAccount] = useState("")
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const setProfileAPI = "/v1/rider/login/phone/setup"

    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            }
        }, 3000);
    }, [alert]);

    const handleSetup = async () => {

        const userData = {
            phone,
            email,
            lastname,
            firstname,
            account_type: account
        }
        console.log(userData)


        try {
            const response = await Axios.post(setProfileAPI, JSON.stringify(userData), {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            if (response.data.status === true) {
                setAlert(true)
                setAlertMessage(response.data.message)

            } else {
                console.log(response.data.message);
                setError(true)
                setAlertMessage("Invalid credentials")
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
                                                <label htmlFor="exampleInputnumber">Conatct Number</label>
                                                <input type="number" name="phone" className="form-control" placeholder="Phone number" value={phone} onChange={(e: any) => setPhone(e.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputnumber">Account Type</label>
                                                <select name="account_type" value={account} className="form-control select2" onChange={(e: any) => setAccount(e.target.value)} required>
                                                    <option value="" selected>Select Account Type</option>
                                                    <option value="admin"> Admin</option>
                                                </select>
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