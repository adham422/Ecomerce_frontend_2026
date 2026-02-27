//first step in redux toolkit is to create a slice of the store
import { createSlice } from "@reduxjs/toolkit";
//key word interface use to define the type of the state of the slice
interface ICategoriesState {
    records: {
        id: number;
        title: string;
        prefix: string;
         img: string;
    }[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;       
};

const initialState:ICategoriesState = {
    records: [],
    loading: "idle",
    error: null,
};
const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{}
});

export default CategoriesSlice.reducer;