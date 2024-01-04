import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state = initialState, action) => {
            state.items.push(action.payload);
        }, //add item is the action name and ()=>{} is the reducer function
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            const newArray = state.items.filter(obj => obj.card.info.id !== action.payload.card.info.id);
            return {
                ...state,
                items: newArray
            }
            // const itemIdToRemove = action.payload.card.info.id;
            // const itemIndexToRemove = state.items.findIndex(item => item.card.info.id === itemIdToRemove);
            // if (itemIndexToRemove !== -1) {
            //     const before = state.items.slice(0, itemIndexToRemove);
            //     const after = state.items.slice(itemIndexToRemove + 1);
            //     const newItems = [...before, ...after];
            //     return {
            //         ...state,
            //         items: newItems
            //     };
            // }
            // return state;
        }
    }
})

// const cartSlice= createSlice({
//     name: 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addItem: (state=initialState, action)=>{
//               state.items.push(action.payload);
//               //add item is the action name and ()=>{} is the reducer function
//               //so many of them write return statements in reducer functions which you
//               //need not do as reducer just takes in a state modifies the state based on
//               //the action method and doesn't return anything
//         },
//         removeItem:(state, action)=>{
//             const itemIdToRemove = action.payload.id;
//   const itemIndexToRemove = state.items.findIndex(item => item.id === itemIdToRemove);
//   if (itemIndexToRemove !== -1) {
//     const before = state.items.slice(0, itemIndexToRemove);
//     const after = state.items.slice(itemIndexToRemove + 1);
//     const newItems = [...before, ...after];
//     return {
//       ...state,
//       items: newItems
//     };
//   }
//   return state;
//         },
//         clearCart: (state)=>{
//             state.items=[];
//         }
//     }
// })

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer; //you dont write reducers as when you export it combines all reducers to a reducer