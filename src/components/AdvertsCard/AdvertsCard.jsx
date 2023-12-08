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
  return (
    <>
      <img src={img}></img>
      {make}
      {model},{year}
      {rentalPrice}
      <button>Favorite</button>
      <button>Learn more</button>
    </>
  );
};
