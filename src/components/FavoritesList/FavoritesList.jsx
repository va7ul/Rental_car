import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { List } from './FavoritesList.styled';

export const FavoritesList = ({ favoritesAdverts }) => {
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
