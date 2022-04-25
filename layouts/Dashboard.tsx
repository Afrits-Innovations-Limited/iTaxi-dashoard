import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useContext } from "react";
import AppContext from "../context/AppContext";


const DashboardLayout = (props: {
    title: string;
    description: string;
    children: React.ReactNode;
}) => {

    const { toggle } = useContext(AppContext)
    return (
        <div className={`app sidebar-mini Left-menu-Default  Sidemenu-left-icons ${toggle && "sidenav-toggled "}`} >
            <Head title={props.title} description={props.description} />
            <div className="page">
                <div className="page-main">
                    <Sidebar />
                    <div className="">{props.children}</div>
                    <Profile />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;
