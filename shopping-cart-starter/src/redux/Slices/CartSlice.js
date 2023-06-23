import {createSlice} from '@reduxjs/toolkit'

export const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
    //function takes two outputs that is state and action and action.payload refers to the input paramaters it means here it in add function it refers to the post which is in product.js and in remove function it refers to the post.id
    add:(state,action) => {
        state.push(action.payload);
    },
    remove:(state,action) => {
        return state.filter((item) => item.id !== action.payload);
    }
    }
    
});

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;