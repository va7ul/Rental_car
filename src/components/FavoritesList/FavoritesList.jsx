import { useSelector } from 'react-redux';
import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { selectFavorites, selectAdverts } from '../../redux/selectors';
import { List } from './FavoritesList.styled';

export const FavoritesList = () => {
  const adverts = useSelector(selectAdverts);
  const favoritesId = useSelector(selectFavorites);

  let favoritesAdverts = [];
  favoritesAdverts = adverts.filter(item => favoritesId.includes(item.id));

  return (
    <List>
      {favoritesAdverts.map(item => (
        <li key={item.id}>
          <AdvertsCard item={item} />
        </li>
      ))}
    </List>
  );
};
