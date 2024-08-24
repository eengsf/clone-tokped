import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navbar: 'Home',
  kategoriDaftarProduk: false,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    setNavbar(state, action) {
      state.navbar = action.payload;
    },
    setKategoriDaftarProduk(state) {
      state.kategoriDaftarProduk = !state.kategoriDaftarProduk;
    },
  },
});

export const { setNavbar, setKategoriDaftarProduk } = counterSlice.actions;
