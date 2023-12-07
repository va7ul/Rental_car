import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage.jsx'));

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
