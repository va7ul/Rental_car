import { ReactSVG } from 'react-svg';
import verticalLine from '../../images/vertical-line.svg';

export const AdvertsCard = ({
  item: {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  const addressArr = address.split(', ');
  const country = addressArr[addressArr.length - 1];
  const city = addressArr[addressArr.length - 2];

  return (
    <>
      <img src={img}></img>
      <button>Favorite</button>
      <div>
        {make}
        <span>{model}</span>,{year}
        <span>{rentalPrice}</span>
      </div>
      <div>
        {city}
        <ReactSVG src={verticalLine} />
        {country}
        <ReactSVG src={verticalLine} />
        {rentalCompany}
        <ReactSVG src={verticalLine} />
        Premium
        <br />
        {type}
        <ReactSVG src={verticalLine} />
        {model}
        <ReactSVG src={verticalLine} />
        {id}
        <ReactSVG src={verticalLine} />
        {functionalities[0]}
      </div>
      <button>Learn more</button>
    </>
  );
};
