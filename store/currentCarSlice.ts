import { createSlice } from "@reduxjs/toolkit"

export const currentCarSlice = createSlice({
    name: 'currentWorkspace',
    initialState: {
        currentCar: null,
    },
    reducers: {
        //action would have type and payload
        carInfo: (state, { payload }) => {
            state.currentCar = payload;
        }
    }
})

export const { carInfo } = currentCarSlice.actions;

export default currentCarSlice.reducer;