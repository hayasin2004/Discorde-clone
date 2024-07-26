import {configureStore} from "@reduxjs/toolkit";
// import {useReducer} from "react";　→　これのせいでエラーが起きた。エラー原因はインポート元がreduxではなくてreactだったため
import userReducers from "../features/userSlice"
export {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer : userReducers,
});

export type AppDispatch = typeof store.dispatch;
// typeofで事前に作ったstoreの型をAppDispatchに入れることで型つきのAppDispatchが作られる
export type RootState = ReturnType<typeof store.getState>
// state.getStateで今現在の型を入手しそれをRetrunすることでRootStateに付与することができる


// configureStore Reduxストアを作成するための標準的な方法
