import { createReducer } from "@reduxjs/toolkit";
import { createAuth, getBonus } from "./actions";

const initialState = {
  accessToken: null,
  bonus: null,
  error: null,
  loading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
  .addCase(createAuth.pending, (state, action) => {
    state.loading = true;
  })
    .addCase(createAuth.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    })
    .addCase(createAuth.rejected, (state, action) => {
        state.error = action.payload;
      })
    .addCase(getBonus.pending, (state) => {
      state.loading = true;
    })
    .addCase(getBonus.fulfilled, (state, action) => {
      state.bonus = action.payload.data;
      state.loading = false;
    })
    .addCase(getBonus.rejected, (state, action) => {
      state.error = action.payload;
    });
});
