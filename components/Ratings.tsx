import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Ratings = ({ value }) => {
    return (
        <div className='rating-icons'>

            <Rating transition
                initialValue={value} ratingValue={0} size={20} /></div>
    )
}

export default Ratings