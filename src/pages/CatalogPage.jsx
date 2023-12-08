import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdverts } from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';
import { Filter } from '../components/Filter/Filter';
import { AdvertsList } from '../components/AdvertsList/AdvertsList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <h2>CatalogPage</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <AdvertsList />
    </div>
  );
};

export default CatalogPage;
