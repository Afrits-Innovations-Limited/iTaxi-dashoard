import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Ratings = () => {

    const [ratingValue, setRatingValue] = useState(0)

    const handleRating = (rate: number) => {
        setRatingValue(rate)
    }
    return (
        <div className='rating-icons'>
            <Rating transition
                onClick={handleRating}
                ratingValue={ratingValue}
                allowHover={false}
            /></div>
    )
}

export default Ratings