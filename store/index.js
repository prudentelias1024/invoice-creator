import { createSlice, configureStore} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'store',
    initialState: { assets: []},
   reducers: {
    updateAssets(state,action){
        state.assets = action.payload
    }
   } 
})

const store = configureStore({
    reducer: appSlice.reducer
})

export const actions = appSlice.actions
export default store