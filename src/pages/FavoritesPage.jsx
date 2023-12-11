import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FavoritesList } from '../components/FavoritesList/FavoritesList';
import { fetchAdverts } from '../redux/operations';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return <div>{<FavoritesList />}</div>;
};

export default FavoritesPage;
