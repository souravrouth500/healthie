import { userData } from '@/typescript/types/common.type';
import { createSlice } from '@reduxjs/toolkit'
import { userSliceData } from "../interfaces/interfaces";
import { destroyCookie } from 'nookies';
import path from 'path';

const initialState: userSliceData = {
    isLoggedIn: false,
    userData: null
  };
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setLoginData: (state, { payload }: { payload: userData }) => {
            state.userData = payload;
            state.isLoggedIn = true;
          },
          logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
            // destroyCookie(null, "user",)
            destroyCookie(null, process.env.NEXT_PUBLIC_TOKEN_NAME!,{path: '/',});
            // window.location.href = '/login'
          }
    },
})

export const {setLoginData, logout} = userSlice.actions
export default userSlice.reducer