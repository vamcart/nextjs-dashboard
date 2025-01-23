import { configureStore, compose } from '@reduxjs/toolkit'
import counterReducer from '@/app/features/counter/counter-slice'
//import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '@/app/services/pokemon'
import { composeWithDevTools } from '@redux-devtools/extension';

export const makeStore = () => {
  return configureStore({
  devTools: true,
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
//setupListeners(makeStore.dispatch)

}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

