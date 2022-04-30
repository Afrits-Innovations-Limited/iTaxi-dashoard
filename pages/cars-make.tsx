import React, { useContext, useEffect, useState } from 'react'
import Axios from '../context/Axios';
import DashboardLayout from "../layouts/Dashboard"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import AppContext from '../context/AppContext';
import Ratings from '../components/Ratings';


const Cars = () => {

    const getCarMakeAPI = "/v1/admin/cars/make"
    const { token, cars, setCars } = useContext(AppContext)
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
                <div className="col-xl-9 col-lg-8">
                    <div className="row">

                        {cars.map((car) => (
                            <div className="col-md-6 col-xl-4">
                                <div className="card item-card">
                                    <div className="product-grid6  card-body">
                                        <div className="product-image6">
                                            <a href="#">
                                                <img className="img-fluid" src={car.picture} alt="img" />
                                                {/* <img className="img-fluid" src={cars.picture} alt={`${cars.name} picture`} /> */}
                                            </a>
                                        </div>
                                        <div className="product-content text-center">
                                            <h4 className="title"><a href="#">{car.name}</a></h4>
                                            {/* <span>{"Last Used: "} <small>{date}</small> </span> */}
                                            <Ratings />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Card Starts Here */}

                        {/* Ends Here */}

                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default Cars