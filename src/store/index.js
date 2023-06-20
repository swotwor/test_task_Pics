import commentsState from './store';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { commentsState }
})