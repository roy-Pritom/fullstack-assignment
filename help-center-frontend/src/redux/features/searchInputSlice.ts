
import { createSlice } from '@reduxjs/toolkit'

type TItemState={
    searchTerm:string;
}
const initialState:TItemState={
    searchTerm:''
    
}
export const searchTermSlice=createSlice({
    name:'addSearchTerm',
    initialState,
    reducers:{
  
        addSearchTerm:(state,action)=>{
            state.searchTerm=action.payload
        // const idToRemove = action.payload;
        // state.contacts=state.contacts.filter(contact=>contact._id!==idToRemove);
    },

    }
})

export const {addSearchTerm}=searchTermSlice.actions;
export default searchTermSlice.reducer;