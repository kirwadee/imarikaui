import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/projects/projectSlice';
import eventReducer from '../features/events/eventSlice';

export const store = configureStore({
  reducer: {
    projects:projectReducer,
    upcomingevents:eventReducer
  },
});