import React, { useContext, useEffect, useState } from 'react'
import DashboardLayout from '../../../layouts/Dashboard'
import UpdateCarMake from '../../../components/UpdateCarMake'
import { useRouter } from 'next/router'
import AppContext from '../../../context/AppContext'
import Axios from '../../../context/Axios'
import { InfoAlert, WarningAlert } from '../../../components/Alert'

const DeleteCarMake = () => {

    const router = useRouter()
    const { cid } = router.query

    const { token } = useContext(AppContext)
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    // const [ImageFiles, setImageFile] = useState()
    const [picture, setPicture] = useState("")
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [error, setError] = useState(false)
    const AuthUser = "Bearer " + token;

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            'Authorization': AuthUser
        }
    }

    const DeleteCarAPI = `/v1/admin/cars/rent/delete/${cid}`
    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            } else if (error) {
                setError(false)
            }
        }, 3000);
    }, [alert, error]);

    const handleDelete = async (e: any) => {
        try {
            const response = await Axios.post(DeleteCarAPI, config);
            if (response.data.status === true) {
                setAlert(true)
                setAlertMessage(response.data.message)
                console.log(response.data)

            } else {
                console.log(response.data.message);
                setError(true)
                setAlertMessage(response.data.message)
            }
        }

        catch (err: any) {
            console.log(err)
            setError(true)
            setAlertMessage(err.message)
        }

    }
    return (
        <DashboardLayout title='iTaxi - Delete Car' description='itaxi'>
            <div className="page-header"></div>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className="card col-6">

                        {alert && <InfoAlert alertText={alertMessage} />}
                        {error && <WarningAlert alertText={alertMessage} />}
                        <div className="card-header">
                            <h3 className="mb-0 card-title">Delete Car</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="">
                                    Are you sure you want to delete this car make?
                                    <br />
                                    <br />
                                    <div className='fnc-btn col-8'>
                                        <button type='submit' className="btn btn-radius btn-secondary" onClick={() => {
                                            router.back()
                                        }}>Cancel</button>
                                        <button type='submit' className="btn btn-radius btn-danger" onClick={handleDelete}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <UpdateCarMake id={cid} /> */}
        </DashboardLayout>
    )
}

export default DeleteCarMake