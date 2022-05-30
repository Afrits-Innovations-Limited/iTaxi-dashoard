import React, { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/Dashboard'
import Image from '../components/Image'
import Year from "../components/YearPicker"
import TimeSelect from "../components/TimePicker"
import DayPicker from "../components/DayPicker"
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Axios from '../context/Axios';
import { InfoAlert, WarningAlert } from './Alert';
import { useAppSelector } from '../hooks/reducerHooks';


const UpdateCars = ({ id }) => {
    const token = useAppSelector(state => state.admin.token)
    const { carsForRent } = useContext(AppContext)
    const carToUpdate = carsForRent.find(carId => carId.id == id)
    console.log(carToUpdate)
    const [picture, setPicture] = useState("")
    const [year, setYear] = useState("")
    const [open_day, setOpenDay] = useState("")
    const [close_day, setCloseDay] = useState("")
    const [open_time, setOpenTime] = useState("")
    const [close_time, setCloseTime] = useState("")
    const [price, setPrice] = useState(carToUpdate?.price)
    const [name, setName] = useState(carToUpdate?.name)
    const [car_make_id, setCarMake] = useState(carToUpdate?.car_make_id)
    const [model, setModel] = useState(carToUpdate?.model)
    const [interior, setInterior] = useState(carToUpdate?.interior)
    const [engine, setEngine] = useState(carToUpdate?.engine)
    const [seat, setSeat] = useState(carToUpdate?.seats)
    const [speed, setSpeed] = useState(carToUpdate?.speed)
    const [transmission, setTransmission] = useState(carToUpdate?.transmission)
    const [luggage, setLuggage] = useState(carToUpdate?.luggage)
    const [availability, setAvailabilty] = useState(carToUpdate?.availability)
    const [address, setAddress] = useState(carToUpdate?.address)
    const [brand, setBrand] = useState(carToUpdate?.brand)
    const [phone, setPhone] = useState(carToUpdate?.phone)
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


    const Endpoint = `/v1/admin/cars/rent/update/${id}`

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
            brand,
            phone,
            seat,
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
            price,
            car_make_id,
            picture
        }

        try {
            const response = await Axios.post(Endpoint, data, config);
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
        <DashboardLayout title={"iTaxi - Update A Car"} description={"car for hire"}>
            <div className="page-header">
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            {alert && <InfoAlert alertText={alertMessage} />}
                            {error && <WarningAlert alertText={alertMessage} />}
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
                                        <label className="form-label">Car Make ID</label>
                                        <input type="text" className="form-control" name="car_make_id" placeholder="Car Make ID" value={car_make_id} onChange={(e) => setCarMake(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Car Brand</label>
                                        <input type="text" className="form-control" name="brand" placeholder="Car Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
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
                                            <input type="number" placeholder='Price' className='form-control currency-control' min={1000} value={price} onChange={(e: any) => setPrice(e.target.value)} />
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
                                        <label className="form-label">Phone Number</label>
                                        <input type="number" className="form-control" name="phone" id="phone" value={phone} onChange={(e: any) => setPhone(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Seat</label>
                                        <input type="text" className="form-control" name="seats" placeholder="Seat" value={seat} onChange={(e: any) => setSeat(e.target.value)} />
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
                                        {/* {picture && (
                                            <div>
                                                <img alt="not fount" width={"250px"} src={URL.createObjectURL(picture)} />

                                                <button className='btn' onClick={() => setPicture(null)}>Remove</button>
                                                <br />
                                                <br />
                                            </div>
                                        )} */}
                                        <Image name={"picture"} setSelectedImage={setPicture} />

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
                                        <select name="availability" className='form-control select2 col-12' onChange={(e: any) => setAvailabilty(e.target.value)} value={availability}>
                                            <option value="" >Set Availability</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
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