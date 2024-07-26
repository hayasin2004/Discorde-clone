import {createSlice} from "@reduxjs/toolkit";
import {InitialUserState} from "../Types"


const initialState : InitialUserState= {
    user : null,
}
// stringの型が定義されているかを判定する、ログインしているかどうかも観察する
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        login:(state, action) => {
            state.user = action.payload;
        //     ディスパッチすることによってログインの情報をユーザ―から取りに行く。その動作がaction.payload
        },
        logout : (state, action) => {
            state.user = null;
        }
    }
});

export default userSlice.reducer;