import { createSlice } from "@reduxjs/toolkit";
const initialState ={theme:"dark"};

const mode = createSlice({
     name:"mode",
     initialState,
     reducers:{
updates:(state)=>{
    if(state.theme === "dark"){
     return {theme:"light"} 
} else{ 
     return  {theme:"dark"}
     
}}
}
     }
)

export default mode.reducer;
export const {updates} = mode.actions;