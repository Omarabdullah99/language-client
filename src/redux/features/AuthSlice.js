import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      console.log('formvalue',formValue)
      const response = await api.signIn(formValue);
      toast.success("Login Successfully");
      navigate("/");
      console.log("loginresponse", response);
      return response.data;
    } catch (error) {
      console.log("loginerror", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signUp(formValue);
      toast.success("Register Successfully");
      navigate("/");
      console.log("registerresponse", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    error: "",
    loading: false,
    allusers: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("blogprofile", JSON.stringify(action.payload));
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("blogprofile", JSON.stringify(action.payload));
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
