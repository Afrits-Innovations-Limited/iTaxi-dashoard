import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
    user: {
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
    },
    auth: boolean,
    token: string,

}

const initialState: AdminState = {
    user: {
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
    },
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
        }
    }
})

export const { create, setToken, setAuth } = adminSlice.actions
export default adminSlice.reducer