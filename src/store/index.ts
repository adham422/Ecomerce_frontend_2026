import { configureStore } from '@reduxjs/toolkit'
import categories from './categories/CategoiresSlice';
export const store = configureStore({
  reducer: {categories},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store; //go to the main.tsx and import the store and wrap the AppRouter with the provider and pass the store as a prop to the provider to make the store available to all components in the app