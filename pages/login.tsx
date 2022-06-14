import { NextPage } from "next"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reducerHooks";
import { useCookies } from "react-cookie"
import { ErrorAlert, InfoAlert, SuccessAlert } from "../components/Alert";
import PageHead from "../components/Head";
import AppContext from "../context/AppContext";
import Axios, { config } from "../context/Axios";
import { create, setAuth } from "../store/adminSlice";

const Login: NextPage = () => {

    const router = useRouter()
    const { setAdminPhone, adminPhone } = useContext(AppContext)
    const [cookie, setCookie] = useCookies(["token"])
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

    // Redux
    const dispatch = useAppDispatch()
    const auth = useAppSelector(state => state.admin.auth)

    // const { setAdmin, setAuth, setToken, setUserPhone } = useContext(AppContext)

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
            account_type: "admin"
        }
        try {
            const response = await Axios.post(LoginAPI, data, config);

            if (response.data.status === true) {
                setAdminPhone(phone)
                setVerifyForm(true)
                setLoginForm(false)
                setInfo(true)
                setAlertMessage(response.data.message)
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


    // Verify Response
    const handleVerify = async (e: any) => {

        e.preventDefault()
        const data = {
            phone,
            account_type: "admin",
            otp: otp
        }

        try {
            const response = await Axios.post(VerifyAPI, data, config);
            if (response.data.status === true) {
                if (response.data.data.token === null) {
                    setAdminPhone(response.data.data.phone)
                    dispatch(setAuth(true))
                    router.push('/profile-setup')
                } else if (!response.data.data.user.admin && response.data.data.user.rider) {
                    setError(true)
                    setAlertMessage("Unauthorized access, download a Rider app to continue")
                } else if (!response.data.data.user.admin && response.data.data.user.driver) {
                    setError(true)
                    setAlertMessage("Unauthorized access, download a Driver app to continue")
                }
                else if (response.data.data.user.admin && response.data.data.user.admin.approved_at) {
                    dispatch(setAuth(true))
                    dispatch(create({
                        user: response.data.data.user,
                        token: response.data.data.token
                    }))
                    // localStorage.setItem("token", userToken)

                    router.push('/dashboard')

                } else {
                    // setAuth(true)
                    router.push('/welcome')
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

