import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from "../components/Image"
import AppContext from '../context/AppContext'
import Axios from '../context/Axios'
import { InfoAlert, WarningAlert } from './Alert'

interface FileInput {
    picture: File
}

const CreateCarMake = () => {

    const router = useRouter()
    const { token } = useContext(AppContext)
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [picture, setPicture] = useState("")
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [error, setError] = useState(false)
    const AuthUser = "Bearer " + token;
    // const config = {
    //     headers: {
    //         'Content-Type': 'multipart/form-data;',
    //         'Access-Control-Allow-Origin': "*",
    //         'Accept': "application/json",

    //         "mimeType": "multipart/form-data",
    //     }
    // }

    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
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

        // console.log(picture)
        const formData = {
            name: name,
            picture: picture,
            description: description
        }


        console.log(formData)


        try {
            const response = await Axios.post(createCarMakeAPI, formData, config);
            if (response.data.status === true) {
                setAlert(true)
                setAlertMessage(response.data.message)
                console.log(response.data)

            } else {
                console.log(response.data.message);
                setError(true)
                setAlertMessage("Invalid credentials")
            }
            console.log(response);

        } catch (err: any) {
            console.log(err)
            setError(true)
            setAlertMessage(err.message)
        }

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
                            <form className='login100-form' onSubmit={handleSubmit} ref={formRef}>
                                <div className="form-group">
                                    <label className="form-label">Enter Car Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={(e: any) => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-0">
                                    <label className="form-label">Enter Car Description</label>
                                    <textarea className="form-control" name="description" rows={4} placeholder="Car description.." value={description} onChange={(e: any) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Enter Car Image</label>
                                    <Image selectedImage={picture} setSelectedImage={setPicture} />
                                    {/* <input type="file" className="form-control" name="picture" placeholder="Car Image" value={picture} onClick={(e: any) => setPicture(e.target.value)} /> */}
                                </div>
                                <div>
                                    <button type='submit' className="btn btn-radius btn-secondary">Save</button>
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