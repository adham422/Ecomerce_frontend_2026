import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5005/category"; // from folder backend run

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      return data;
    } catch (error) {                       
        if (axios.isAxiosError(error) && error.response) {
            return rejectWithValue(error.response.data);
        } else {
            return rejectWithValue("An unexpected error occurred");
        }       
    }
  }             
);
export default actGetCategories;