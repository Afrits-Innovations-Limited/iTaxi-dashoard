import { NextPage } from "next"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { ErrorAlert, InfoAlert, SuccessAlert } from "../components/Alert";
import PageHead from "../components/Head";
import AppContext from "../context/AppContext";
import Axios from "../context/Axios";

const Login: NextPage = () => {

    const router = useRouter()
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [account, setAccount] = useState("admin")
    const [loginForm, setLoginForm] = useState(true)
    const [verifyForm, setVerifyForm] = useState(false)
    // Alerts
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [info, setInfo] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const VerifyAPI = "/v1/rider/login/phone/verify"
    const LoginAPI = "/v1/rider/login/phone"

    const { setAdmin, setAuth } = useContext(AppContext)

    useEffect(() => {
        setTimeout(() => {
            if (error) {
                setError(false);
            } else if (success) {
                setSuccess(false)
            } else if (info) {
                setInfo(false)
            }
        }, 5000);
    }, [error, success, info]);

    // Login Response
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const data = {
            phone,
            account_type: account
        }


        try {
            const response = await Axios.post(LoginAPI, JSON.stringify(data), {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            if (response.data.status === true) {
                setVerifyForm(true)
                setLoginForm(false)
                setInfo(true)
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


    // Verify Response
    const handleVerify = async (e: any) => {

        e.preventDefault()
        const data = {
            phone,
            account_type: account,
            otp: otp
        }
        try {
            const response = await Axios.post(VerifyAPI, JSON.stringify(data), {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            if (response.data.status === true) {
                if (response.data.data.token === null) {

                    router.push('/profile-setup')
                } else {
                    setAuth(response.data.data.token)
                    setAdmin(response.data.data.user)
                    router.push('/dashboard')
                }
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
            <PageHead title="iTaxi - Login" description="login page" />
            <div className="login-img">
                <div className="page h-100">
                    <div className="">
                        <div className="alertContainer">
                            {error && <ErrorAlert alertText={alertMessage} />}
                            {success && <SuccessAlert alertText={alertMessage} />}
                            {info && <InfoAlert alertText={alertMessage} />}
                        </div>
                        <div className="col col-login mx-auto">
                            <div className="text-center">
                                <img src="/images/brand/logo.png" className="header-brand-img" alt="" />
                            </div>
                        </div>
                        <div className="container-login100">
                            <div className="wrap-login100 p-6">

                                {loginForm && (<form className="login100-form validate-form" onSubmit={handleLogin}>
                                    <span className="login100-form-title">
                                        Login
                                    </span>
                                    <div className="wrap-input100 validate-input">
                                        <input className="input100" type="text" name="phone" placeholder="Enter Phone Number" value={phone} onChange={(e: any) => setPhone(e.target.value)} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-email" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input className="input100" type="text" name="account" placeholder="Account" value={account} onChange={(e: any) => setAccount(e.target.value)} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="text-right pt-1">
                                        <p className="mb-0"><a href="forgot-password.html" className="text-primary ml-1">Forgot Password?</a></p>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button type="submit" className="login100-form-btn btn-primary">
                                            Continue
                                        </button>
                                    </div>

                                </form>)}

                                {verifyForm && (<form className="login100-form validate-form" onSubmit={handleVerify}>
                                    <span className="login100-form-title">
                                        Verify Otp
                                    </span>
                                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="phone" placeholder="Enter Phone Number" value={phone} onChange={(e: any) => setPhone(e.target.value)} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-email" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input className="input100" type="text" name="account" placeholder="Account" value={account} onChange={(e: any) => setAccount(e.target.value)} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input className="input100" type="text" name="otp" placeholder="Enter 4 digit otp" value={otp} onChange={(e: any) => setOtp(e.target.value)} maxLength={4} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button type="submit" className="login100-form-btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </form>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login