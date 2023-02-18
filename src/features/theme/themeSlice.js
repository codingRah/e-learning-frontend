import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
    isSidebarCollapsed: false,
    dir: "rtl",
    lang: "dr",
  },
  reducers: {
    toggleMode: (state) => {
      state.isDark = !state.isDark;
    },
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  },
});

export default themeSlice.reducer;
export const { toggleSidebar, toggleMode } = themeSlice.actions;
