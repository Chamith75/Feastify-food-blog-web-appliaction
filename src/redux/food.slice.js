import { createSlice } from "@reduxjs/toolkit";


const FoodSlice = createSlice({
    name: 'FoodSlice',
    initialState: {
        FoodList: [],
        Sfood: []
    },
    reducers: {
        ongetfoodList(state, action) {
            state.FoodList = action.payload;
            
        },
        ongetfoodItem(state , action){
            state.Sfood = action.payload;

        },
        getfoodListFromServer(){

        },
        getfoodItemFromServer(){
            

        }
    }
});

export const { ongetfoodList ,ongetfoodItem ,getfoodListFromServer,getfoodItemFromServer} = FoodSlice.actions;
export default FoodSlice;
