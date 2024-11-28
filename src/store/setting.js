import { configureStore, createSlice } from "@reduxjs/toolkit";

const init_state = {
  btnIcon: "",
  borderColor: "",
  borderRadius: "",
  titleBackground: "#000000",
  botChatBackground: "#f0f0f0",
  botChatTextColor: "#000000",
  chatBackground: "#000000",
  chatTextColor: "#fffff",
  font: "sans",
};

const settingSlice = createSlice({
  name: "Settings",
  initialState: init_state,
  reducers: {
    setBtnIcon: (state, action) => {
      state.btnIcon = action.payload;
    },
    setBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
    setTitleBackground: (state, action) => {
      state.titleBackground = action.payload;
    },
    setBotChatBackground: (state, action) => {
      state.botChatBackground = action.payload;
    },
    setBotChatTextColor: (state, action) => {
      state.botChatTextColor = action.payload;
    },
    setChatBackground: (state, action) => {
      state.chatBackground = action.payload;
    },
    setChatTextColor: (state, action) => {
      state.chatTextColor = action.payload;
    },
    setFont: (state, action) => {
      state.font = action.payload;
    },
  },
});

export const {
  setBtnIcon,
  setBorderColor,
  setBorderRadius,
  setTitleBackground,
  setBotChatBackground,
  setBotChatTextColor,
  setChatBackground,
  setChatTextColor,
  setFont,
} = settingSlice.actions;

export const store = configureStore({
  reducer: {
    settings: settingSlice.reducer,
  },
});
