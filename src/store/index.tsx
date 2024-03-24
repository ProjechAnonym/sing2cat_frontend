import { configureStore } from "@reduxjs/toolkit";
import { styleSlice, configSlice } from "../slice";
export const store = configureStore({
  reducer: { style: styleSlice.reducer, config: configSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
