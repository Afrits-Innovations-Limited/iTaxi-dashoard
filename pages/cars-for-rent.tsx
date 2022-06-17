import React, { useContext, useEffect, useState } from 'react'
import Axios from '../context/Axios';
import DashboardLayout from "../layouts/Dashboard"
import AppContext from '../context/AppContext';
import { FaEllipsisV } from "react-icons/fa"
import Ratings from '../components/Ratings';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../hooks/reducerHooks';
import { setCar } from '../store/carSlice';


const AvailableCars = ({ car }) => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    return (
        <div className="col-md-6 col-xl-4">
            <div className="card item-card">
                <div className="product-grid6  card-body">
                    <div className="product-image6">
                        <a href="#">
                            <img className="img-fluid" src={car.pictureUrl} alt={car.picture} />
                        </a>
                    </div>
                    <div className="product-content text-center">
                        <h4 className="title"><a href="#">{car.name}</a></h4>
                        <p className='title'>Model: {car.model} </p>
                        <p className='title'>Price: N{car.price} </p>
                        <p className='title'>Location: {car.address} </p>
                        <p className='title'>Contact: {car.phone} </p>
                        <span>Available From: {car.open_day} at {car.open_time} to {car.close_day} at {car.close_time} </span>
                    </div>
                    <div onClick={() => setIsOpen(!open)}> <FaEllipsisV /> </div>
                    {isOpen &&
                        <div className='col-lg-12 fnc-btn'>
                            <button className='btn btn-danger' onClick={() => { router.replace(`/admin/delete-cars/${car.id}`) }}>Delete</button>
                            <button className='btn btn-secondary' onClick={() => { router.replace(`/admin/update-cars/${car.id}`) }}>Update</button>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

const Cars = () => {
    const getCarsAPI = "/v1/admin/cars/rent"
    const token = useAppSelector(state => state.admin.token)
    const cars = useAppSelector(state => state.car.cars)
    const { carsForRent, setCarsForRent } = useContext(AppContext)
    const dispatch = useAppDispatch()
    const AuthUser = "Bearer " + token;
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*",
            'Accept': "application/json",
            "Authorization": AuthUser,
        }
    }

    useEffect(() => {
        Axios.get(getCarsAPI, config).then((response) => {
            dispatch(setCar(response.data.data))

            setCarsForRent(response.data.data);
        });
    }, []);


    return (
        <DashboardLayout title='iTaxi - Available Cars' description='cars for rent'>
            <div className="page-header"></div>
            <div className="row row-cards">
                <div className="col-xl-12 col-lg-12">
                    <div className="row">
                        {cars.map((car) => (
                            <AvailableCars car={car} key={car.id} />
                        ))}
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default Cars