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

const optionsBrands = makes.map(make => ({ value: make, label: make }));
const optionsPrice = priceSteps().map(priceStep => ({
  value: priceStep,
  label: `To ${priceStep}$`,
}));

export const SearchBar = () => {
  return (
    <Form>
      <label>
        <Span>Car brand</Span>
        <Select
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
          components={{ IndicatorSeparator: null }}
          placeholder="To $"
          options={optionsPrice}
          styles={colourStylesPrice}
        />
      </label>
      <label>
        <Span>Сar mileage / km</Span>
        <div>
          <InputFrom placeholder="From"></InputFrom>
          <InputTo placeholder="To" />
        </div>
      </label>
      <Button>Search</Button>
    </Form>
  );
};
