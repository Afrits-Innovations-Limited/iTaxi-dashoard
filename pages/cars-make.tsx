import React, { useContext, useEffect, useState } from 'react'
import Axios from '../context/Axios';
import DashboardLayout from "../layouts/Dashboard"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import AppContext from '../context/AppContext';
import Ratings from '../components/Ratings';


const Cars = () => {

    const getCarMakeAPI = "/v1/admin/cars/make/1"
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
                        {/* Card Starts Here */}
                        <div className="col-md-6 col-xl-4">
                            <div className="card item-card">
                                <div className="product-grid6  card-body">
                                    <div className="product-image6">
                                        <a href="#">
                                            <img className="img-fluid" src="/images/pngs/7.png" alt="img" />
                                            {/* <img className="img-fluid" src={cars.picture} alt={`${cars.name} picture`} /> */}
                                        </a>
                                    </div>
                                    <div className="product-content text-center">
                                        <h4 className="title"><a href="#">{cars.name}</a></h4>
                                        <span>{"Last Used: "} <small>{date}</small> </span>
                                        {/* <div className="price">{cars.description} </div> */}

                                        {/* <div className="text-center mb-2 text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div> */}
                                        <Ratings />

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ends Here */}
                        {/* Card Starts Here */}
                        <div className="col-md-6 col-xl-4">
                            <div className="card item-card">
                                <div className="product-grid6  card-body">
                                    <div className="product-image6">
                                        <a href="#">
                                            <img className="img-fluid" src="/images/pngs/7.png" alt="img" />
                                            {/* <img className="img-fluid" src={cars.picture} alt={`${cars.name} picture`} /> */}
                                        </a>
                                    </div>
                                    <div className="product-content text-center">
                                        <h4 className="title"><a href="#">{cars.name}</a></h4>
                                        <span>{"Last Used: "} <small>{date}</small> </span>
                                        {/* <div className="price">{cars.description} </div> */}

                                        {/* <div className="text-center mb-2 text-warning">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div> */}
                                        <Ratings />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Ends Here */}
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}

export default Cars