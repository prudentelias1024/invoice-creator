import { createSlice, configureStore} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'store',
    initialState: { assets: [], profileToInvoice:null},
   reducers: {
    updateAssets(state,action){
        state.assets = action.payload
    },
    updateInvoiceRecipient(state,action){
        state.profileToInvoice = action.payload
    }
   } 
})

const store = configureStore({
    reducer: appSlice.reducer
})

export const actions = appSlice.actions
export default store