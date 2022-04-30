import React, { useState } from 'react'


const Image = ({selectedImage, setSelectedImage}) => {
    // const [selectedImage, setSelectedImage] = useState();

    return (
        <div>
            <input
                type="file"
                name="picture"
                className='form-control'
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
}

export default Image