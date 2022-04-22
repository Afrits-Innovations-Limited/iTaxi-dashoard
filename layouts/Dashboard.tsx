import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";


const DashboardLayout = (props: {
    title: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="">
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
