import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { store, persistor } from './redux/store.js';
import { GlobalStyle } from './GlobalStyle.js';
import App from './App.jsx';

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
