import { useSelector } from 'react-redux';
import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { selectAdverts, selectFilter } from '../../redux/selectors';
import { List } from './AdvertsList.styled';

export const AdvertsList = () => {
  let filteredAdverts = [];
  const adverts = useSelector(selectAdverts);
  const { make, price, mileageFrom, mileageTo } = useSelector(selectFilter);

  if (make === '') {
    filteredAdverts = adverts;
  } else {
    if (make !== '') {
      filteredAdverts = adverts.filter(
        item => item.make.toLowerCase() === make.toLowerCase()
      );
    }
  }

  return (
    <List>
      {filteredAdverts.map(item => (
        <li key={item.id}>
          <AdvertsCard item={item} />
        </li>
      ))}
    </List>
  );
};
