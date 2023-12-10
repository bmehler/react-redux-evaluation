import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./reducers/index";

export default configureStore({
    reducer: {
        employees: employeesReducer,
    },
});