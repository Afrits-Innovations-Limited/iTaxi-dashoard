import { NextPage } from "next";
import DashboardLayout from "../layouts/Dashboard";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Link from "next/link";

const Dashboard: NextPage = () => {

    const { toggle, admin } = useContext(AppContext)

    return (
        <DashboardLayout title={"iTaxi"} description={"Home page"}>
            <div className="page-header">
                {/* <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><h3 className="mb-0 breadcrump-tittle">Welcome {user.name}!</h3></a></li>
                        </ol> */}
            </div>

            <div className="">
                <div className="banner banner-color mt-0 row">
                    {/* <div className="col-xl-1 col-lg-2 col-md-12 p-0">
                        <img src="htps://www.spruko.com/demo/flaira/Flaira/assets/images/svgs/email.svg" alt="image" className="image" />
                    </div> */}
                    <div className="page-content col-xl-7 col-lg-6 col-md-12">
                        <h3 className="mb-1">Welcome back! <span className="font-weight-bold text-primary">{admin.lastname} {admin.firstname} </span></h3>
                    </div>
                </div>
            </div>
            <div className="row">

            </div>
        </DashboardLayout>


    )
}

export default Dashboard