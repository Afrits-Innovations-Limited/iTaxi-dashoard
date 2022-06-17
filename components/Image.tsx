import React, { ChangeEvent } from 'react'



const Image = ({ name, setSelectedImage }) => {
    // const [selectedImage, setSelectedImage] = useState();

    return (
        <div>
            <input
                type="file"
                name={name}
                accept="image/*"
                className='form-control'
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />

            {/* <ImageUploader
                style={{ height: 200, width: 200, background: 'rgb(0 182 255)' }}
                deleteIcon={
                    <img
                        src='https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png'
                        alt=''
                    />
                }
                uploadIcon={
                    <svg
                        className='svg-circleplus'
                        viewBox='0 0 100 100'
                        style={{ height: '40px', stroke: '#000' }}
                    >
                        <circle cx='50' cy='50' r='45' fill='none' strokeWidth='7.5'></circle>
                        <line x1='32.5' y1='50' x2='67.5' y2='50' strokeWidth='5'></line>
                        <line x1='50' y1='32.5' x2='50' y2='67.5' strokeWidth='5'></line>
                    </svg>
                }
            /> */}
        </div>
    );
}

export default Image