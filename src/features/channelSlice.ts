import {createSlice} from "@reduxjs/toolkit";
import {InitialChannelState} from "../Types"

// 最初の初期状態をinitialStateで管理している
const initialState : InitialChannelState= {
    channelId : null,
    channelName : null,
}
// stringの型が定義されているかを判定する、ログインしているかどうかも観察する
export const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers : {
    //     何が必要なのか
        setChannelInfo  : (state , action ) => {
            state.channelId =action.payload.channelId;
            state.channelName =action.payload.channelName;
        }
    }
    
});


// login logoutを変数として分割代入してあげる
export  const  { setChannelInfo } = channelSlice.actions
export default channelSlice.reducer;