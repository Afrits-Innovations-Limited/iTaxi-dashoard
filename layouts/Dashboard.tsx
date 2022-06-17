import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useAppSelector } from "../hooks/reducerHooks";


const DashboardLayout = (props: {
    title: string;
    description: string;
    children: React.ReactNode;
}) => {

    const toggle = useAppSelector(state => state.toggle.toggle)
    return (
        <div className={`app sidebar-mini Left-menu-Default  Sidemenu-left-icons ${toggle && "sidenav-toggled "}`} >
            <Head title={props.title} description={props.description} />
            <div className="page">
                <div className="page-main">
                    <Sidebar />
                    <div className="app-content">
                        <div className="side-app">
                            <div className="">{props.children}</div>
                        </div>
                    </div>
                    <Profile />
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;
