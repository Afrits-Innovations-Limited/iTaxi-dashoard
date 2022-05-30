import { createSlice } from "@reduxjs/toolkit";

type CarObject = {
    address: string
    availability: number
    brand: string
    car_make: {
        created_at: string
        deleted_at: null
        description: string
        id: number
        name: string
        picture: string
        pictureUrl: string
        updated_at: string
    }
    car_make_id: number
    close_day: string
    close_time: string
    created_at: string
    deleted_at: null
    engine: string
    id: number
    interiorstring
    luggage: string
    model: string
    name: string
    open_day: string
    open_time: string
    phone: string
    picture: string
    pictureUrl: string
    price: number
    seats: string
    speed: string
    transmission: string
    updated_at: string
    year: string
}

interface CarState {
    cars: Array<CarObject>,
    car: CarObject
}

const initialState: CarState = {
    cars: [],
    car: null

}

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        setCar: (state, action) => {
            const arr = action.payload
            const n = arr.length
            const arr2 = []

            for (var i = 0; i < n; i++) {
                arr2.push(arr[i])
            }
            state.cars = [...new Set(arr2)]
        },
        findCar: (state, action) => {
            state.cars.find(action.payload)
        },
        updateCar: (state, { payload }) => {
            state.car = payload
        }

    }
})

export const { findCar, updateCar, setCar } = carSlice.actions
export default carSlice.reducer