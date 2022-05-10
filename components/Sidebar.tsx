import React, { useContext, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from "next/router";
import Navbar from './Navbar';
import AppContext from '../context/AppContext';
import { user } from '../data/mockdata'

const Sidebar = () => {

    const router = useRouter();
    const { toggle, setToggle, admin } = useContext(AppContext)
    const [openSideMenu, setOpenSideMenu] = useState(true)
    const [visibleList, setVisibleList] = useState(false)
    const [visibleList_2, setVisibleList_2] = useState(false)
    const menuHover = () => {
        setOpenSideMenu(true)
    }

    return (
        <div>
            <Navbar />
            <div className={`app-sidebar__overlay ${toggle && 'sidenav-toggled'}`}></div>
            <aside className="app-sidebar">
                <div className="sidebar-user-settings">
                    <div className="app-sidebar__user mb-4 mt-4">
                        <div className="dropdown user-pro-body text-center">
                            <a href="#" className="user-box">
                                <div className="user-pic rounded-img">
                                    <img src="/images/users/uservatar.png" alt="" />

                                    {/* <span className="avatar avatar-md brround cover-image">
                                        <img src="/images/users/uservatar.png" alt="" />
                                        <span className="avatar-status bg-primary"></span>
                                        <span className="avatar-border"></span>
                                    </span> */}
                                </div>
                                <div className="user-info">
                                    <h5 className=" mb-1 font-weight-bold text-dark">{admin.lastname} {admin.firstname}</h5>
                                    <span className="text-muted app-sidebar__user-name text-sm">{admin.account_type}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className={`side-menu`} onMouseEnter={menuHover} onMouseLeave={menuHover} onClick={() => setOpenSideMenu(!openSideMenu)}>
                    <li><h3>ITAXI</h3></li>
                    <li className={`slide ${visibleList && 'is-expanded'}`}>
                        <a className="side-menu__item" data-toggle="slide" onClick={() => { setVisibleList(!visibleList) }}><i className="angle fe fe-chevron-right"></i><span className="side-menu__label">Dashboard</span><i className="side-menu__icon fe fe-airplay"></i></a>
                        <ul className={`slide-menu`}>
                            <li>
                                <Link href="/cars">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Cars</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/trip-feed"}>
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Trip Feed</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li><h3>Drivers &amp; Customers</h3></li> */}
                    <li><h3>Cars</h3></li>
                    <li>
                        <Link href="/cars-for-rent">
                            <a className="side-menu__item" ><span className="side-menu__label">Cars For Rent</span><i className="side-menu__icon fe fe-layers"></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cars-make">
                            <a className="side-menu__item" ><span className="side-menu__label">Cars Make</span><i className="side-menu__icon fe fe-layers"></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cars">
                            <a className="side-menu__item" ><span className="side-menu__label">Available Cars</span><i className="side-menu__icon fe fe-map-pin"></i></a>
                        </Link>
                    </li>

                    <li className={`slide ${visibleList_2 && 'is-expanded'}`}>
                        <a className="side-menu__item" onClick={() => { setVisibleList_2(!visibleList_2) }}><i className="angle fe fe-chevron-right"></i><span className="side-menu__label">Admin Panel</span><i className="side-menu__icon fe fe-package"></i></a>
                        <ul className={`slide-menu ${toggle ? '' : ''}`}>
                            {/* <li>
                                <Link href="/admin/drivers">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Manage Drivers</a></Link></li>

                            <li>
                                <Link href="/admin/customers">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Manage Customers</a>
                                </Link></li>
                            <li>
                                <Link href="/admin/rate-cards">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Manage Rate Cards</a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/admin/create-cars">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Add a Car</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/admin/update-cars">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i>Update a Car</a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/admin/create-car-make">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Create Car Make</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/admin/update-car-make">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Update Car Make</a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/rent-a-car">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Rent a Car</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/terms-&amp;-conditions">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Terms &amp; Conditions</a>
                                </Link>
                            </li>
                            <li>

                                <Link href="/privacy-policy">
                                    <a className="slide-item"><i className="sidemenu-icon fe fe-chevrons-right"></i> Privacy Policy</a>
                                </Link></li> */}
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar