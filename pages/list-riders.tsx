import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import Axios from '../context/Axios';
import { useAppDispatch, useAppSelector } from '../hooks/reducerHooks';
import DashboardLayout from '../layouts/Dashboard'
import { createRidersList } from '../store/userSlice';

const ListRiders = () => {

    const token = useAppSelector(state => state.admin.token)
    const ridersList = useAppSelector(state => state.user.ridersList)
    const AuthUser = "Bearer " + token;
    const [lastname, setLastName] = useState("")
    const [firstname, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const router = useRouter()

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }
    const dispatch = useAppDispatch()

    const getList = `/v1/admin/users/list?${lastname}&${firstname}&${email}&${phone}&type=rider`

    // Fetching Drivers
    useEffect(() => {
        Axios.get(getList, config).then((response) => {
            dispatch(createRidersList(response.data.data.data))
        });
    }, [])


    return (
        <DashboardLayout title='iTaxi - Riders' description='cars for rent'>
            <div className="page-header"></div>
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Riders</h3>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table id="example" className="table table-striped table-bordered text-nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th className="wd-15p">S/N</th>
                                            <th className="wd-15p">First name</th>
                                            <th className="wd-15p">Last name</th>
                                            <th className="wd-25p">E-mail</th>
                                            <th className="wd-15p">Phone</th>
                                            <th className="wd-10p">View</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ridersList.map((drivers, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1} </th>
                                                <td>{drivers.firstname}</td>
                                                <td>{drivers.lastname}</td>
                                                <td>{drivers.email}</td>
                                                <td>{drivers.phone} </td>
                                                <td><a
                                                    onClick={() => { router.replace(`/admin/view-rider/${drivers.id}`) }}
                                                    className='btn btn-primary button-icon mr-3 mt-1 mb-1' target={"_blank"}>View More</a></td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default ListRiders