import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
    user: {
        firstname: string,
        lastname: string,
        email: string,
        account_type: string,
        created_at: string,
        phone: string,
        joined_date: string,
        user_verified_at: string,
        is_active: number,
        updated_at: string,
        deleted_at: null,
        admin: {
            id: number,
            user_id: number,
            home_address: null,
            work_address: null,
            created_at: string,
            updated_at: string,
            deleted_at: null
        }
    },
    auth: boolean,
    token: string,

}

const initialState: AdminState = {
    user: null,
    token: null,
    auth: false,
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        create: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setToken: (state, action) => {
            state.token = action.payload
        },

        setAuth: (state, action) => {
            state.auth = action.payload
        },
        logout: (state) => {
            state.user = {
                firstname: '',
                lastname: '',
                email: '',
                account_type: '',
                created_at: '',
                phone: '',
                joined_date: '',
                user_verified_at: "",
                is_active: 0,
                updated_at: " ",
                deleted_at: null,
                admin: {
                    id: 1,
                    user_id: 1,
                    home_address: null,
                    work_address: null,
                    created_at: "",
                    updated_at: "",
                    deleted_at: null
                }
            }
            state.token = "",
                localStorage.clear()
        },

    }
})

export const { create, setToken, setAuth } = adminSlice.actions
export default adminSlice.reducer