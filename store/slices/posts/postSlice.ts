import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
  posts: any[];
  loading: boolean;
}

const initialState: PostState = {
  posts: [],
  loading: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    startAndFinishGettingPosts: (state) => {
      state.loading = !state.loading;
    },
    getPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { startAndFinishGettingPosts, getPosts } = postSlice.actions;
