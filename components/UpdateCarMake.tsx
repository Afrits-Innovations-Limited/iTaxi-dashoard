import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import Axios from '../context/Axios'
import { InfoAlert, WarningAlert } from './Alert'
import { useAppSelector } from '../hooks/reducerHooks'


const UpdateCarMake = ({ id }) => {

    const router = useRouter()
    // const dispatch = useAppDispatch()
    const token = useAppSelector(state => state.admin.token)
    // const cars = useAppSelector(state => state.currentCar.currentCar)
    const { cars } = useContext(AppContext)
    const carToUpdate = cars.findCar(carId => carId.id == id)
    // const carToUpdate = JSON.parse(cars)

    const [description, setDescription] = useState(carToUpdate?.id)
    const [name, setName] = useState(carToUpdate?.name)
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

    const UpdateCarMakeAPI = `/v1/admin/cars/make/update/${id}`
    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            } else if (error) {
                setError(false)
            }
        }, 3000);
    }, [alert, error]);

    // const getImageFileObject = (imageFile) => {
    //     setPicture(imageFile.file)
    //     console.log(imageFile);
    //     console.log(imageFile.file)
    // }
    // const runAfterImageDelete = (file) => {
    //     setPicture(null)
    //     console.log(file);

    // }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(picture);
        const data = {
            name,
            description,
            picture,
        }
        console.log(picture);


        console.log(data)

        try {
            const response = await Axios.post(UpdateCarMakeAPI, data, config);
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
        <div className='d-flex justify-content-center align-items-center'>
            <div className="card col-6">

                {alert && <InfoAlert alertText={alertMessage} />}
                {error && <WarningAlert alertText={alertMessage} />}
                <div className="card-header">
                    <h3 className="mb-0 card-title">Update Car Make</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="">
                            <form className=''>
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
                                    {/* <ImageUploader
                                        // style={{ height: 200, width: 200, background: 'rgb(0 182 255)' }}
                                        onFileAdded={(img) => getImageFileObject(img)}
                                        onFileRemoved={(img) => runAfterImageDelete(img)}
                                    /> */}

                                    <input type="file" className="form-control" name="picture" placeholder="Picture" value={picture} onChange={(e: any) => setPicture(e.target.value)} />
                                </div>
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

export default UpdateCarMake

