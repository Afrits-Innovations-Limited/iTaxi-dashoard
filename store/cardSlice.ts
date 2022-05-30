import { createSlice } from "@reduxjs/toolkit";

interface CardState {
    serviceType: string,
    revenue: {
        driver_amount: 0,
        amount: 0,
        total: 0,
        duration: 0,
        revenue?: number
    },
    lastWeekRevenue: {
        driver_amount: 0,
        amount: 0,
        total: 0,
        duration: 0,
        revenue?: number
    },
    thisWeekRevenue: {
        driver_amount: 0,
        amount: 0,
        total: 0,
        duration: 0,
        revenue?: number
    },
    cancelledRequests: string,
    fleets: string,
    cancelledTrips: string,
    driverCancelled: string,
}

const initialState: CardState = {
    serviceType: null,
    revenue: {
        driver_amount: 0,
        amount: 0,
        total: 0,
        duration: 0,
        revenue: 0
    },
    lastWeekRevenue: {
        driver_amount: 0,
        amount: 0,
        total: 0,
        duration: 0,
        revenue: 0
    },
    thisWeekRevenue: {
        driver_amount: 0,
        amount: 0,
        total: 0,
        duration: 0,
        revenue: 0
    },
    cancelledRequests: null,
    fleets: null,
    cancelledTrips: null,
    driverCancelled: null,
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        createRevenue: (state, action) => {
            state.revenue = action.payload
            state.revenue.revenue = state.revenue.amount - state.revenue.driver_amount
        },
        getRevenueToday: (state, action) => {
            state.revenue = action.payload
            state.revenue.revenue = state.revenue.amount - state.revenue.driver_amount
        },
        getRevenueLastWeek: (state, action) => {
            state.lastWeekRevenue = action.payload
            state.lastWeekRevenue.revenue = state.lastWeekRevenue.amount - state.lastWeekRevenue.driver_amount
        },
        getRevenueThisWeek: (state, action) => {
            state.thisWeekRevenue = action.payload
            state.thisWeekRevenue.revenue = state.thisWeekRevenue.amount - state.thisWeekRevenue.driver_amount
        },
        setServiceType: (state, action) => {
            state.serviceType = action.payload
        },
        getCancelledRequests: (state, action) => {
            state.cancelledRequests = action.payload
        },
        getFleets: (state, action) => {
            state.fleets = action.payload
        },
        getCancelledTrips: (state, action) => {
            state.cancelledTrips = action.payload
        },
        driverCancelledTrips: (state, action) => {
            state.driverCancelled = action.payload
        }
    }
})

export const { createRevenue, setServiceType, getCancelledRequests, getFleets, getCancelledTrips, driverCancelledTrips, getRevenueToday, getRevenueThisWeek, getRevenueLastWeek } = cardSlice.actions
export default cardSlice.reducer