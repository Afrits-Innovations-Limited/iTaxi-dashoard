import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
    toggle: boolean,
    profileToggle: boolean,
    ulToggle: boolean
}

const initialState: ToggleState = {
    toggle: false,
    profileToggle: false,
    ulToggle: false
}

export const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        setToggle: (state, action) => {
            state.toggle = action.payload
        },
        setProfileToggle: (state, action) => {
            state.profileToggle = action.payload
        },
        setUlToggle: (state) => {
            if (state.ulToggle === true) {
                state.ulToggle = false
            } else {
                state.ulToggle = true
            }
        }

    }
})

export const { setToggle, setProfileToggle, setUlToggle } = toggleSlice.actions
export default toggleSlice.reducer