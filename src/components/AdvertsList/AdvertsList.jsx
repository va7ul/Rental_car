import { useSelector } from 'react-redux';
import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { selectAdverts } from '../../redux/selectors';
import { List } from './AdvertsList.styled';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <List>
      {adverts.map(item => (
        <li key={item.id}>
          <AdvertsCard item={item} />
        </li>
      ))}
    </List>
  );
};
