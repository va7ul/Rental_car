import { ReactSVG } from 'react-svg';
import { styled } from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
`;

export const Thumb = styled.div`
  width: 274px;
  height: 446px;
  position: relative;
`;

export const FavoriteSVG = styled(ReactSVG)`
  position: absolute;
  top: 14px;
  right: 14px;
  border: transparent;
  background: transparent;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.5);
  }
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

export const RentalPrice = styled.span`
  margin-left: auto;
  margin-right: 0px;
`;

export const VerticalLine = styled(ReactSVG)`
  margin-right: 6px;
  margin-left: 6px;
  display: inline-block;
`;

export const ExtraDesc = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 60px;
  margin-bottom: 28px;
`;
