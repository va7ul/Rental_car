import { styled } from 'styled-components';
import { ReactSVG } from 'react-svg';

export const OpenModalBtn = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  border: transparent;
  margin-top: auto;
  font-size: 14px;

  &:hover {
    background: #0b44cd;
  }

  &:focus {
    background: #0b44cd;
  }
`;

export const CloseSVG = styled(ReactSVG)`
  position: absolute;
  top: 16px;
  right: 16px;
  border: transparent;
  background: transparent;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.2);
  }
`;

export const VerticalLine = styled(ReactSVG)`
  margin-right: 6px;
  margin-left: 6px;
  display: inline-block;
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: lightgray 50%;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const MainDesc = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const RentBtn = styled.a`
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  border: transparent;
  margin-top: auto;
  font-size: 14px;

  &:hover {
    background: #0b44cd;
  }

  &:focus {
    background: #0b44cd;
  }
`;
