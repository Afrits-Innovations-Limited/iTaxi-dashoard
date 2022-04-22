import { NextPage } from "next"
import { useRouter } from "next/router";
import { useState } from "react";

const Login: NextPage = () => {

    const router = useRouter()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async (e: any) => {

        e.preventDefault();
        console.log('data:', data)
        router.push("/dashboard");

    }

    return (
        <div className="login-img">
            <div className="page h-100">
                <div className="">
                    <div className="col col-login mx-auto">
                        <div className="text-center">
                            <img src="/images/brand/logo-white.png" className="header-brand-img" alt="" />
                        </div>
                    </div>
                    <div className="container-login100">
                        <div className="wrap-login100 p-6">
                            <form className="login100-form validate-form" onSubmit={handleLogin}>
                                <span className="login100-form-title">
                                    Login
                                </span>
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" value={data.email} onChange={(e: any) => setData({ ...data, email: e.target.value })} required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="zmdi zmdi-email" aria-hidden="true"></i>
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className="input100" type="password" name="pass" placeholder="Password" value={data.password} onChange={(e: any) => setData({ ...data, password: e.target.value })} required />
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
                                        Login
                                    </button>
                                </div>
                                <div className="text-center pt-3">
                                    <p className="text-dark mb-0">Not a member?<a href="register.html" className="text-primary ml-1">Sign UP now</a></p>
                                </div>
                                <div className=" flex-c-m text-center mt-3">
                                    <p>Or</p>
                                    <div className="social-icons">
                                        <ul>
                                            <li><a className="btn btn-social btn-block"><i className="fa fa-google-plus text-google-plus"></i> Sign up with Google</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login