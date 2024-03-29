import { configureStore } from "@reduxjs/toolkit";
import { styleSlice, configSlice, identitySlice } from "../slice";
export const store = configureStore({
  reducer: {
    style: styleSlice.reducer,
    config: configSlice.reducer,
    identity: identitySlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
