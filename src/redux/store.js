import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './advertsSlice';
import { favoritesReducer } from './favoritesSlice';
import { filtersReducer } from './filtersSlice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filters: filtersReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
