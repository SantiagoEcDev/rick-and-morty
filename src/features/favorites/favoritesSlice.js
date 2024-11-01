// src/features/favorites/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setFavorites(state, action) {
      return action.payload;
    },
    addFavorite(state, action) {
      const updatedFavorites = [...state, action.payload];
      return updatedFavorites;
    },
    removeFavorite(state, action) {
      const updatedFavorites = state.filter(fav => fav.id !== action.payload.id);
      return updatedFavorites;
    },
  },
});

export const { setFavorites, addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
