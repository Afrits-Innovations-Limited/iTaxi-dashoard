import { createSlice } from "@reduxjs/toolkit";
type UserObject = {
    account_type: string
    created_at: string
    deleted_at: null
    email: string
    firebase_token: null
    firstname: string
    id: number
    is_active: number
    joined_date: string
    lastname: string
    phone: string
    remember_token: null
    star: 0
    updated_at: string
    user_verified_at: string
}
type RiderObject = {
    account_type: string
    created_at: string
    deleted_at: null
    driver: null
    email: string
    firebase_token: null
    firstname: string
    id: number
    is_active: number
    joined_date: string
    lastname: string
    phone: string
    remember_token: null
    rider: {
        created_at: string
        deleted_at: null
        home_address: null
        home_lat: null
        home_lon: null
        id: 1
        updated_at: string
        user_id: 1
        work_address: null
        work_lat: null
        work_lon: null
    }
    star: number
    updated_at: string
    user_verified_at: string
}
type UserVerifiedObject = {
    account_type: string
    created_at: string
    deleted_at: string
    driver: {
        approved_at: string
        approved_by: string
        car: {
            base_rate: number
            brand: string
            created_at: string
            deleted_at: null
            driver_id: number
            exterior: string
            id: number
            interior: string
            is_available: number
            lat: string
            lon: string
            model: string
            no_of_passenges: number
            picture: string
            plate_number: string
            updated_at: string
            year: string
        }
        car_id: number
        created_at: string
        deleted_at: null
        driver_license: {
            created_at: string
            driver_id: number
            expiry_date: string
            file: string
            id: number
            issued_on: string
            number: string
            updated_at: string
            vehicle_type: string
        }
        driver_license_id: string
        id: number
        insurance: {
            created_at: string
            description: string
            driver_id: number
            expiry_date: null
            file: string
            id: number
            issued_on: string
            number: string
            updated_at: string
        }
        insurance_id: string
        is_online: number
        permit: {
            created_at: string
            description: string
            driver_id: string
            expiry_date: null
            file: string
            id: number
            issued_on: string
            number: string
            updated_at: string
        }
        permit_id: string
        updated_at: string
        user_id: number
        vehicle_registration: {
            created_at: string
            description: string
            driver_id: number
            expiry_date: null
            file: string
            id: number
            issued_on: string
            number: string
            updated_at: string
        }
        vehicle_registration_id: string
    }
    email: string
    firebase_token: null
    firstname: string
    id: number
    is_active: number
    joined_date: string
    lastname: string
    phone: string
    remember_token: null
    rider: null
    star: number
    updated_at: string
    user_verified_at: string
}
type Admins = {
    approved_at: null
    approved_by: null
    created_at: string
    deleted_at: null
    id: number
    updated_at: string
    user: {
        account_type: string
        created_at: string
        deleted_at: null
        email: string
        firebase_token: null
        firstname: string
        id: number
        is_active: number
        joined_date: string
        lastname: string
        phone: string
        remember_token: null
        star: number
        updated_at: string
        user_verified_at: string
    }
    user_id: number
}
type microObject = {
    created_at: string
    description: string
    driver_id: number
    expiry_date: string
    file: string
    id: number
    issued_on: string
    number: string
    updated_at: string
}
type Driver = {
    approved_at: null
    approved_by: null
    car: {
        base_rate: number
        brand: string
        created_at: string
        deleted_at: null
        driver_id: number
        exterior: string
        id: number
        interior: string
        is_available: number
        lat: string
        lon: string
        model: string
        no_of_passenges: number
        picture: null
        plate_number: string
        updated_at: string
        year: string
    }
    car_id: number
    created_at: string
    deleted_at: null
    driver_license: microObject
    driver_license_id: number
    id: 8
    insurance: microObject
    insurance_id: 2
    is_online: 0
    permit: microObject
    permit_id: 2
    updated_at: string
    user: {
        account_type: string
        created_at: string
        deleted_at: null
        email: string
        firebase_token: null
        firstname: string
        id: number
        is_active: number
        joined_date: string
        lastname: string
        phone: string
        remember_token: null
        star: number
        updated_at: string
        user_verified_at: string
    }
    user_id: number
    vehicle_registration: microObject
    vehicle_registration_id: number

}
interface UserState {
    driver: UserVerifiedObject
    rider: RiderObject,
    driversList: Array<UserObject>,
    ridersList: Array<UserObject>
    count: {
        driverCount: number,
        riderCount: number
    },
    pendingDrivers: Array<Driver>,
    pendingAdmins: Array<Admins>,
    pendingDriversCount: number,
    pendingAdminCount: number,
}

const initialState: UserState = {
    driver: null,
    rider: null,
    driversList: [],
    ridersList: [],
    count: {
        driverCount: 0,
        riderCount: 0
    },
    pendingDrivers: null,
    pendingAdmins: [],
    pendingDriversCount: 0,
    pendingAdminCount: 0,

}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createDriver: (state, action) => {
            state.driver = action.payload
        },
        createRider: (state, action) => {
            state.rider = action.payload
        },
        readCount: (state, action) => {
            state.count = action.payload
        },
        createDriversList: (state, { payload }) => {
            const arr = payload
            const n = arr.length
            const arr2 = []

            for (var i = 0; i < n; i++) {
                arr2.push(arr[i])
            }
            state.driversList = [...new Set(arr2)]
        },
        createRidersList: (state, { payload }) => {
            const arr = payload
            const n = arr.length
            const arr2 = []

            for (var i = 0; i < n; i++) {
                arr2.push(arr[i])
            }
            state.ridersList = [...new Set(arr2)]
        },
        createPendingDrivers: (state, action) => {
            const arr = action.payload
            const n = arr.length
            const arr2 = []

            for (var i = 0; i < n; i++) {
                arr2.push(arr[i])
            }
            // arr2.forEach(ele => {
            //     if (!state.pendingDrivers.includes(ele)) {
            //         state.pendingDrivers.push(ele)
            //     }
            //     return state.pendingDrivers
            // })
            state.pendingDrivers = [...new Set(arr2)]
            state.pendingDriversCount = action.payload.length
        },
        createPendingAdmins: (state, { payload }) => {
            const arr = payload
            const n = arr.length
            const arr2 = []

            for (var i = 0; i < n; i++) {
                arr2.push(arr[i])
            }
            // arr2.forEach(ele => {
            //     if (!state.pendingDrivers.includes(ele)) {
            //         state.pendingDrivers.push(ele)
            //     }
            //     return state.pendingDrivers
            // })
            state.pendingAdmins = [...new Set(arr2)]
            state.pendingAdminCount = payload.length
        },
        getPendingAdmins: (state, action) => {

            state.pendingAdminCount = action.payload.length
        },
        getPendingDrivers: (state, action) => {

            state.pendingDriversCount = action.payload.length
        }
    }
})

export const { createDriver, createRider, readCount, createPendingDrivers, getPendingAdmins, createDriversList, createRidersList, createPendingAdmins, getPendingDrivers } = userSlice.actions
export default userSlice.reducer