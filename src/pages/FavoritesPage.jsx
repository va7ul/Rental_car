import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FavoritesList } from '../components/FavoritesList/FavoritesList';
import { selectFavorites, selectAdverts } from '../redux/selectors';
import { fetchAdverts } from '../redux/operations';
import noResults from '../images/no-results.png';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const favoritesId = useSelector(selectFavorites);

  let favoritesAdverts = [];
  favoritesAdverts = adverts.filter(item => favoritesId.includes(item.id));

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {favoritesAdverts.length > 0 ? (
        <FavoritesList favoritesAdverts={favoritesAdverts} />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={noResults}
            style={{
              width: '50%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
