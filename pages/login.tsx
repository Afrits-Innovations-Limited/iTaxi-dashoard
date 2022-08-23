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
    const [password, setPassword] = useState('')
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
    const LoginWithPassword = "/v1/rider/login/phone"

    // Redux
    const dispatch = useAppDispatch()
    const auth = useAppSelector(state => state.admin.auth)

    const derToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZTNkZTIzMWQ5YmJiZjkzMDJkZmFjNGM5YWM5MmE2NzQyZmQzYzY2NTk3N2M2MWM3YzE1ZjU5MTNhY2FlNGE5MzM5OWVkNGE3OTI3NDczYjAiLCJpYXQiOjE2NTc2NjEyMzkuNzEyMTMxLCJuYmYiOjE2NTc2NjEyMzkuNzEyMTM0LCJleHAiOjE2ODkxOTcyMzkuNzA4NjAyLCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.c0l9FT2IgN8N7bDsOAVFEN-Qf_WWb2ektJZ1Al0f9ZAoKcR_LvfAO8hf1rh43ROCTI4mfnGFUtP4voN7dpujtAnFNp6F_IpqYntk-8O7L4Pn-DxJf6V9NBEIcu8XEwO0vOb1kwbQ4mIzYZmbKJXvBR3bNbyBK8JggiiDZrWdg3UYxCtsgzBtjTVBmu5rTd9z_lEtOjYh9030t4LcSKEulXqwR2cczG1BiqbfyGA6Q4tUceRkSEbznxNnofZv6HrAwlxUOcmbYUJxFfLpn7ePSrf95cLLng3JhWktWtFn1RRaeEWaknyqWgeSlspO13__4zSvCSFDMq6cxqnHjxA2oFO7cvkVgcLLHa4Ai1s0sMtxr_W5mF1vHSNCgWD9DjFx8m9fmUtCjvUg2P9J9_9Ay4OFTgTUvZNacTFip9rDei2aUfYLlzGincAZQfTMK0w5-JB_L-XoKnOhsk7oYi_9_Ijub5oP6Uq9mJzJuj9mbdzj9te3-N3fqMoHt33cItb_BCcf1PNqSl_e07j3tMt1s_bavwwJGHrBRxUDyFcWWHExQ0sNzY730EsY9Nez95mEaHWiZKFp4--VqEyJkZVTRLAyLd8AqpHvppx7Jlz15gE1WjaMSQkAyyqA15u9EykPdeD_Ul8YeAZ_-clOCbMgQtxccYu2sTHQ1kBd4SGH81k"

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
            account_type: "admin",
            password,
        }


        try {
            const response = await Axios.post(LoginAPI, data, config);

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
                                            <i className="zmdi zmdi-phone" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input className="input100" type="password" name="password" placeholder="Enter Password" value={password} onChange={(e: any) => setPassword(e.target.value)} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input className="input100" type="text" name="account" placeholder="Account" value={account} onChange={(e: any) => setAccount(e.target.value)} required />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="zmdi zmdi-pin-account" aria-hidden="true"></i>
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

