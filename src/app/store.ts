import {configureStore} from "@reduxjs/toolkit";
import {useReducer} from "react";
import userSlice from "../features/userSlice";
export {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer : useReducer,

});