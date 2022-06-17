import React, { useContext, useEffect, useState } from 'react'
import Axios from '../context/Axios';
import DashboardLayout from "../layouts/Dashboard"
import AppContext from '../context/AppContext';
import Ratings from '../components/Ratings';
import UpdateCarMake from '../components/UpdateCarMake';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '../hooks/reducerHooks';


const SingleCar = ({ car }) => {
    const router = useRouter()
    return (
        <>
            <div className="col-md-6 col-xl-4" key={car.id}>
                <div className="card item-card">
                    <div className="product-grid6  card-body">
                        <div className="product-image6">
                            <a href="#">
                                <img className="img-fluid" src={car.pictureUrl} alt="img" />
                            </a>
                        </div>
                        <div className="product-content text-center">
                            <h4 className="title"><a href="#">{car.name}</a></h4>
                            <p>Description: {car.description}</p>
                            {/* <Ratings /> */}

                        </div>
                        <div className='col-lg-12 fnc-btn'>
                            <button className='btn btn-danger' onClick={() => { router.replace(`/admin/delete-car-make/${car.id}`) }}>Delete</button>
                            <button className='btn btn-secondary' onClick={() => { router.replace(`/admin/update-car-make/${car.id}`) }}>Update</button>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

const Cars = () => {

    const getCarMakeAPI = "/v1/admin/cars/make"
    const token = useAppSelector(state => state.admin.token)
    const { cars, setCars } = useContext(AppContext)
    const [updateCars, setUpdateCars] = useState(false)
    const router = useRouter()
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
        Axios.get(getCarMakeAPI, config).then((response) => {
            setCars(response.data.data);
        });
    }, []);

    const date = new Date(cars.updated_at).toDateString()

    return (
        <DashboardLayout title='cars' description='cars for rent'>
            <div className="page-header"></div>
            <div className="row row-cards">
                <div className="col-xl-12 col-lg-12">
                    <div className="row">

                        {cars.map((car) => (
                            <SingleCar car={car} key={car.id} />
                        ))}


                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default Cars

