import Select from 'react-select';
import makes from '../../api/makes.json';
import { priceSteps } from '../../api/priceStep';
import {
  Form,
  Span,
  colourStylesCar,
  colourStylesPrice,
  InputFrom,
  InputTo,
  Button,
} from './SearchBar.styled';
import { useDispatch } from 'react-redux';
import { filtersAdverts } from '../../redux/filtersSlice';

export const SearchBar = () => {
  const optionsBrands = makes.map(make => ({ value: make, label: make }));
  const optionsPrice = priceSteps().map(priceStep => ({
    value: priceStep,
    label: `To ${priceStep}$`,
  }));

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      filtersAdverts({
        make: event.currentTarget.elements.make.value,
        price: event.currentTarget.elements.price.value,
        mileageFrom: event.currentTarget.elements.from.value,
        mileageTo: event.currentTarget.elements.to.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Span>Car brand</Span>
        <Select
          name="make"
          components={{
            IndicatorSeparator: null,
          }}
          placeholder="Enter the text"
          options={optionsBrands}
          styles={colourStylesCar}
        />
      </label>
      <label>
        <Span>Price/ 1 hour</Span>
        <Select
          name="price"
          components={{ IndicatorSeparator: null }}
          placeholder="To $"
          options={optionsPrice}
          styles={colourStylesPrice}
        />
      </label>
      <label>
        <Span>Сar mileage / km</Span>
        <div>
          <InputFrom placeholder="From" name="from" />
          <InputTo placeholder="To" name="to" />
        </div>
      </label>
      <Button type="submit">Search</Button>
    </Form>
  );
};
