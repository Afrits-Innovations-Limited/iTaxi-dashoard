import React, { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/Dashboard'
import CurrencyInput from 'react-currency-input-field';
import Image from '../components/Image'
import Year from "../components/YearPicker"
import TimeSelect from "../components/TimePicker"
import DayPicker from "../components/DayPicker"
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Axios from '../context/Axios';


const UpdateCars = () => {
    const { token } = useContext(AppContext)
    const [image, setImage] = useState(null)
    const [year, setYear] = useState("")
    const [open_day, setOpenDay] = useState("")
    const [close_day, setCloseDay] = useState("")
    const [open_time, setOpenTime] = useState("")
    const [close_time, setCloseTime] = useState("")
    const [carPrice, setCarPrice] = useState()
    const [name, setName] = useState("")
    const [car_make_id, setCarMake] = useState("")
    const [model, setModel] = useState("")
    const [interior, setInterior] = useState("")
    const [engine, setEngine] = useState("")
    const [seats, setSeats] = useState("")
    const [speed, setSpeed] = useState("")
    const [transmission, setTransmission] = useState("")
    const [luggage, setLuggage] = useState("")
    const [availability, setAvailabilty] = useState("")
    const [address, setAddress] = useState("")


    const [error, setError] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const AuthUser = "Bearer " + token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }

    const ApiLink = "/v1/admin/cars/rent/update/13"

    useEffect(() => {
        setTimeout(() => {
            if (alert) {
                setAlert(false);
            } else if (error) {
                setError(false)
            }
        }, 3000);
    }, [alert, error]);


    const handleSubmit = async () => {
        const data = {
            name,
            address,
            seats,
            luggage,
            interior,
            model,
            engine,
            transmission,
            speed,
            availability,
            year,
            open_day,
            close_day,
            open_time,
            close_time,
            carPrice,
            car_make_id,
            image
        }

        try {
            const response = await Axios.post(ApiLink, data, config);
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
        <DashboardLayout title={"iTaxi - Rent A Car"} description={"car for hire"}>
            <div className="page-header">
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0 card-title">Cars for Rent</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={(e: any) => {
                                            setName(e.target.value)
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Car Make</label>
                                        <input type="text" className="form-control" name="car_make_id" placeholder="Car Make" value={car_make_id} onChange={(e) => setCarMake(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Model</label>
                                        <input type="text" className="form-control" name="model" placeholder="Car Model" value={model} onChange={(e) => setModel(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Year</label>
                                        <Year name="year" value={year} setValue={setYear} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Interior</label>
                                        <input type="text" className="form-control" name="interior" placeholder="Car Interior" value={interior} onChange={(e: any) => setInterior(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" name="address" placeholder="Address" value={address} onChange={(e: any) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Price</label>

                                        <div className='currency-input'>
                                            <span className='prefix-currency'>N</span>
                                            <input type="number" placeholder='Price' className='form-control currency-control' min={1000} value={carPrice} onChange={(e: any) => setCarPrice(e.target.value)} />
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Engine</label>
                                        <input type="text" className="form-control" name="interior" placeholder="Engine" value={engine} onChange={(e: any) => setEngine(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Speed</label>
                                        <input type="text" className="form-control" name="speed" placeholder="Car Speed" value={speed} onChange={(e: any) => setSpeed(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="form-label">Seats</label>
                                        <input type="text" className="form-control" name="seats" placeholder="Seats" value={seats} onChange={(e: any) => setSeats(e.target.value)} />
                                    </div>
                                    <div className="form-group m-0">
                                        <label className="form-label">Transmission</label>
                                        <input type="text" className="form-control" name="transmission" placeholder="Transmission" value={transmission} onChange={(e: any) => setTransmission(e.target.value)} />
                                        {/* <div className="invalid-feedback">Invalid feedback</div> */}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Luggage</label>
                                        <input type="text" className="form-control" name="luggage" placeholder="Luggage" value={luggage} onChange={(e: any) => setLuggage(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Picture</label>
                                        {image && (
                                            <div>
                                                <img alt="not fount" width={"250px"} src={URL.createObjectURL(image)} />

                                                <button className='btn' onClick={() => setImage(null)}>Remove</button>
                                                <br />
                                                <br />
                                            </div>
                                        )}
                                        <Image selectedImage={image} setSelectedImage={setImage} />

                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Open Day</label>
                                        <DayPicker name={"open_day"} title={"Open Day"} value={open_day} setValue={setOpenDay} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Close Day</label>
                                        <DayPicker name={"close_day"} title={"Close Day"} value={close_day} setValue={setCloseDay} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Open Time</label>
                                        <TimeSelect name={"open_time"} title={"Open Time"} value={open_time} setValue={setOpenTime} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Close Time</label>
                                        <TimeSelect name={"close_time"} title={"Close Time"} value={close_time} setValue={setCloseTime} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Availability</label>
                                        <select name="availability" className='form-control select2 col-4' onChange={(e: any) => setAvailabilty(e.target.value)} value={availability}>
                                            <option value="" >Set Availability</option>
                                            <option value="Yes">YES</option>
                                            <option value="No">NO</option>
                                        </select>
                                    </div>

                                </div>
                                <div>
                                    <button type='submit' className="btn btn-radius btn-secondary" onClick={handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default UpdateCars