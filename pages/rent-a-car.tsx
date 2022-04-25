import React, { useState } from 'react'
import DashboardLayout from '../layouts/Dashboard'
import CurrencyInput from 'react-currency-input-field';
import Image from '../components/Image'
import Year from "../components/YearPicker"
import TimeSelect from "../components/TimePicker"
import DayPicker from "../components/DayPicker"


const CarRent = () => {
    const [image, setImage] = useState(null)

    const [carDetails, setCarDetails] = useState({
        name: "",
        car_make_id: "",
        model: "",
        year: "",
        interior: "",
        address: "",
        price: "",
        engine: "",
        speed: "",
        seats: "",
        transmission: "",
        luggage: "",
        picture: image,
        open_day: "",
        close_day: "",
        open_time: "",
        close_time: "",
        availability: ""


    })

    return (
        <DashboardLayout title={"iTaxi - Rent A Car"} description={"car for hire"}>
            <div className="app-content">
                <div className="side-app">
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
                                                <input type="text" className="form-control" name="name" placeholder="Name" value={carDetails.name} onChange={(e) => {
                                                    setCarDetails({ ...carDetails, name: e.target.value })
                                                }} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Car Make</label>
                                                <input type="text" className="form-control" name="car_make_id" placeholder="Car Make" value={carDetails.car_make_id} onChange={(e) => setCarDetails({ ...carDetails, car_make_id: e.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Model</label>
                                                <input type="text" className="form-control" name="model" placeholder="Car Model" value={carDetails.model} onChange={(e) => setCarDetails({ ...carDetails, model: e.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Year</label>
                                                <Year />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Interior</label>
                                                <input type="text" className="form-control" name="interior" placeholder="Car Interior" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Address</label>
                                                <input type="text" className="form-control" name="address" placeholder="Address" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Price</label>
                                                <CurrencyInput
                                                    prefix="N "
                                                    id="price"
                                                    name="price"
                                                    placeholder="Price"
                                                    defaultValue={""}
                                                    decimalsLimit={2}
                                                    onValueChange={(value, name) => console.log(value, name)}
                                                    className="form-control"
                                                />

                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Engine</label>
                                                <input type="text" className="form-control" name="interior" placeholder="Car Interior" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Speed</label>
                                                <input type="text" className="form-control" name="speed" placeholder="Car Speed" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Seats</label>
                                                <input type="text" className="form-control" name="seats" placeholder="Seats" />
                                            </div>
                                            <div className="form-group m-0">
                                                <label className="form-label">Transmission</label>
                                                <input type="text" className="form-control" name="transmission" placeholder="Transmission" />
                                                {/* <div className="invalid-feedback">Invalid feedback</div> */}
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Luggage</label>
                                                <input type="text" className="form-control" name="luggage" placeholder="Luggage" />
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
                                                <DayPicker name={"open_day"} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Close Day</label>
                                                <DayPicker name={"close_day"} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Open Time</label>
                                                <TimeSelect name={"open_time"} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Close Time</label>
                                                <TimeSelect name={"close_time"} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Availability</label>
                                                <select name="availability" id="" className='form-control select2 col-4'>
                                                    <option value="Yes">YES</option>
                                                    <option value="No">NO</option>
                                                </select>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}

export default CarRent