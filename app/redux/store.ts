"use client";
import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/Mode";
export const store = configureStore({
    reducer:{
mode:modeReducer
    }
})