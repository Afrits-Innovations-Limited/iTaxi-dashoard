import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
    toggle: boolean,
    profileToggle: boolean
}

const initialState: ToggleState = {
    toggle: false,
    profileToggle: false
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
        }

    }
})

export const { setToggle, setProfileToggle } = toggleSlice.actions
export default toggleSlice.reducer