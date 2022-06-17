import React from 'react'

const Welcome = () => {
    return (
        <div className='login-img'>
            <div className="page h-100">

                <div className="page-content">
                    <div className="container text-center">
                        <div className="error-template">
                            <h1 className="display-1 text-white mb-2">Welcome<span className="text-transparent fs-20">ITAXI</span></h1>
                            <h5 className="error-details text-white">
                                You'll be able to view this page once you've been approved
                            </h5>
                            <div className="text-center">
                                <a className="btn btn-white mt-5 mb-5" href="/login"> <i className="mdi mdi-arrow-left"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Welcome