import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';

const Image = ({selectedImage, setSelectedImage}) => {
    // const [selectedImage, setSelectedImage] = useState();

    return (
        <div>
            <input
                type="file"
                name="myImage"
                className='form-control'
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
}

export default Image