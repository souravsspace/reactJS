import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

interface userValue {
  username: string;
}

interface userState {
  value: userValue
}

const initialState = { value: { username: "" } } as userState;
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: userState, action: PayloadAction<userValue>) => {
      state.value = action.payload;
    },
    logout: (state: userState) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const Store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
