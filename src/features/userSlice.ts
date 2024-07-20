import {createSlice} from "@reduxjs/toolkit";
import {InitialUserState} from "../Types"
const initialState : InitialUserState= {
    user : null,

}
// stringの型が定義されているかを判定する
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        login:(state, action) => {
            state.user = action.payload;
        },
        logout : (state, action) => {
            state.user = null;
        }
    }
});

export default userSlice;