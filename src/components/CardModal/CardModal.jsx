import { useState } from 'react';
import Modal from 'react-modal';

import closeModalSVG from '../../images/close.svg';
import verticalLine from '../../images/vertical-line.svg';
import {
  OpenModalBtn,
  CloseSVG,
  VerticalLine,
  Image,
  MainDesc,
  Model,
  RentBtn,
} from './CardModal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '24px',
    background: '#FFF',
    padding: '40px',
    width: '542px',
  },
};

Modal.setAppElement('#root');

export const CardModal = ({
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

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <OpenModalBtn onClick={openModal}>Learn more</OpenModalBtn>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Card Modal"
      >
        <CloseSVG onClick={closeModal} src={closeModalSVG} />
        <Image src={img}></Image>
        <MainDesc>
          <span>
            {make} <Model>{model}</Model>, {year}
          </span>
        </MainDesc>
        <div>
          <span>{city}</span>
          <VerticalLine src={verticalLine} />
          <span>{country}</span>
          <VerticalLine src={verticalLine} />
          <span>{rentalCompany}</span>
          <VerticalLine src={verticalLine} />
          <span>Premium</span>
          <span>{type}</span>
          <VerticalLine src={verticalLine} />
          <span>{model}</span>
          <VerticalLine src={verticalLine} />
          <span>{id}</span>
          <VerticalLine src={verticalLine} />
          <span>{functionalities[0]}</span>
        </div>
        <RentBtn type="button" href="tel:+380730000000">
          Rental car
        </RentBtn>
      </Modal>
    </div>
  );
};
