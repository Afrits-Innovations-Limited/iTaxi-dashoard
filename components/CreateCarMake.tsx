import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import Image from "../components/Image"
import Axios from '../context/Axios'
import { InfoAlert, WarningAlert } from './Alert'
import { useAppSelector } from '../hooks/reducerHooks'



type FileInput = {
    picture: File
}

const CreateCarMake = () => {

    const router = useRouter()
    const token = useAppSelector(state => state.admin.token)
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [picture, setPicture] = useState()
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

    const createCarMakeAPI = "/v1/admin/cars/make/create"
    const formRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            } else if (error) {
                setError(false)
            }
        }, 3000);
    }, [alert, error]);


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        // const data = {
        //     name,
        //     description,
        //     picture,
        // }
        // console.log(picture);
        // console.log(data)

        // try {
        //     const response = await Axios.post(createCarMakeAPI, data, config);
        //     if (response.data.status === true) {
        //         setAlert(true)
        //         setAlertMessage(response.data.message)
        //         console.log(response.data)

        //     } else {
        //         console.log(response.data.message);
        //         setError(true)
        //         setAlertMessage(response.data.message)
        //     }
        // }

        // catch (err: any) {
        //     console.log(err)
        //     setError(true)
        //     setAlertMessage(err.message)
        // }

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("picture", picture, "passport.jpg");
        formdata.append("description", description);

        console.log(picture)
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", AuthUser);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
        };

        fetch("https://itaxi.dap.ng/api/v1/admin/cars/make/create", requestOptions)
            .then(response => {
                console.log("response: ", response)
                return response
            })
            .then(result => console.log("result: ", result))
            .catch(error => console.log('error', error));

    }

    return (
        <div className='d-flex justify-content-center align-items-center '>
            <div className="card col-6">

                {alert && <InfoAlert alertText={alertMessage} />}
                {error && <WarningAlert alertText={alertMessage} />}
                <div className="card-header">
                    <h3 className="mb-0 card-title">Create Car Make</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <form className='login100-form'>
                                <div className="form-group">
                                    <label className="form-label">Enter Car Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={(e: any) => setName(e.target.value)} required />
                                </div>
                                <div className="form-group mb-0">
                                    <label className="form-label">Enter Car Description</label>
                                    <textarea className="form-control" name="description" rows={4} placeholder="Car description.." value={description} onChange={(e: any) => setDescription(e.target.value)} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Enter Car Image</label>
                                    <Image name={"pictute"} setSelectedImage={setPicture} />
                                </div>
                                {/* <input type="file"  accept="image/*" name="picture" onChange={(e: ChangeEvent<HTMLInputElement>) => setPicture(e.target)} /> */}
                                <div>
                                    <button type='submit' className="btn btn-radius btn-secondary" onClick={handleSubmit}>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCarMake