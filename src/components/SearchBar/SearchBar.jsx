import Select from 'react-select';

import makes from '../../api/makes.json';
import { priceSteps } from '../../api/priceStep';

const optionsBrands = makes.map(make => ({ value: make, label: make }));
const optionsPrice = priceSteps().map(priceStep => ({
  value: priceStep,
  label: `To ${priceStep}$`,
}));

export const SearchBar = () => {
  console.log(priceSteps());
  return (
    <>
      SearchBar
      <Select placeholder="Enter the text" options={optionsBrands} />
      <Select placeholder="To $" options={optionsPrice} />
    </>
  );
};
