import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    // users: ,
    // chickens: ,
    // news: ,
    // feedback: ,
    // reviews: ,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch