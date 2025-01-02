import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import Pokemonreducer from './pokemons/pokemons'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { localStorageMiddleware } from './middlewares/localstorage-middleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: Pokemonreducer,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( localStorageMiddleware )
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;