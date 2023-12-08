import { useSelector } from 'react-redux';
import { AdvertsCard } from '../AdvertsCard/AdvertsCard';
import { selectAdverts } from '../../redux/selectors';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <ul>
      {adverts.map(item => (
        <li key={item.id}>
          <AdvertsCard item={item} />
        </li>
      ))}
    </ul>
  );
};
