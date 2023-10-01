// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

//Before Splitting Slices
// const initialCounterState = { counter: 0, showCounter: true };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       //   state.counter = state.counter + action.amount;
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = { isAuthenticated: false };
// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });


// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggleCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
  //   reducer: counterSlice.reducer,
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
reducer: { counter: counterReducer, auth: authReducer },
});
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
