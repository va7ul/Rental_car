import { useDispatch, useSelector } from 'react-redux';

import verticalLine from '../../images/vertical-line.svg';
import favorite from '../../images/favorite.svg';
import favoriteActive from '../../images/favorite-active.svg';

import {
  Image,
  Thumb,
  FavoriteSVG,
  MainDesc,
  Model,
  RentalPrice,
  VerticalLine,
  ExtraDesc,
  Button,
} from './AdvertsCard.styled';
import { selectFavorites } from '../../redux/selectors';
import { toggleFavoriteAdverts } from '../../redux/favoritesSlice';

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

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  return (
    <Thumb>
      {!favorites.includes(id) && (
        <FavoriteSVG
          src={favorite}
          onClick={() => dispatch(toggleFavoriteAdverts(id))}
        />
      )}
      {/* показ серця залитого за умовою */}
      {favorites.includes(id) && (
        <FavoriteSVG
          src={favoriteActive}
          onClick={() => dispatch(toggleFavoriteAdverts(id))}
        />
      )}
      <Image src={img}></Image>
      <MainDesc>
        <span>
          {make} <Model>{model}</Model>, {year}
        </span>
        <RentalPrice>{rentalPrice}</RentalPrice>
      </MainDesc>
      <ExtraDesc>
        <span>{city}</span>
        <VerticalLine src={verticalLine} />
        <span>{country}</span>
        <VerticalLine src={verticalLine} />
        <span>{rentalCompany}</span>
        <VerticalLine src={verticalLine} />
        <span>Premium</span>

        {/* <br /> */}

        <span>{type}</span>
        <VerticalLine src={verticalLine} />
        <span>{model}</span>
        <VerticalLine src={verticalLine} />
        <span>{id}</span>
        <VerticalLine src={verticalLine} />
        <span>{functionalities[0]}</span>
      </ExtraDesc>
      <Button>Learn more</Button>
    </Thumb>
  );
};
