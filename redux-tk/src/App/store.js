import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Feature/Todo/toDoslice";

export const store = configureStore ({ 

  reducer :todoReducer
}) 