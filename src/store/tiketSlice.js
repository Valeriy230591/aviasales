// import { createSlice } from "@reduxjs/toolkit";
// import {fetchSearchId} from './actionServer'
// const ticketSlice = createSlice({
//     name:'tickets',
//     initialState:{
//         tickets:[],
//         id:'',
//         isLoading:false,
//         errorMessage:''
//     },
//     reducers:{
//         addTickets:(state,action)=>{
//             state.tickets.push(...action.payload)
//         },
//         isLoading:(state, action) => {
//             state.isLoading = action.payload
//         },
//         onError:(state,action)=>{
//             state.errorMessage = ''
//         },
//         clearError:(state,action)=>{
//             state.errorMessage = ''
//         }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchSearchId.fulfilled,(state,action)=>{
//             state.id=action.payload
//         })
//     }
// })

// export const{addTickets,isLoading,onError,clearError}=ticketSlice.actions;
// export default ticketSlice.reducer;