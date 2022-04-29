import React, { useContext, useEffect, useState } from 'react'
import Axios from '../context/Axios';
import DashboardLayout from "../layouts/Dashboard"
import AppContext from '../context/AppContext';
import Ratings from '../components/Ratings';


const Cars = () => {
    const getCarsAPI = "/v1/admin/cars/rent/1"
    const { token, availableCars, setAvailableCars } = useContext(AppContext)
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

            console.log(response.data.data)
            setAvailableCars(response.data.data);
        });
    }, []);


    return (
        <DashboardLayout title='iTaxi - Available Cars' description='cars for rent'>
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
                                            <img className="img-fluid" src={availableCars.pictureUrl} alt={availableCars.picture} />
                                        </a>
                                    </div>
                                    <div className="product-content text-center">
                                        <h4 className="title"><a href="#">{availableCars.name}</a></h4>
                                        <h6 className='title'>Price: N{availableCars.price} </h6>
                                        <p className='title'>Location: {availableCars.address} </p>
                                        <p className='title'>Contact: {availableCars.phone} </p>
                                        <span>Available From: {availableCars.open_day} at {availableCars.open_time} to {availableCars.close_day} at {availableCars.close_time} </span>


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