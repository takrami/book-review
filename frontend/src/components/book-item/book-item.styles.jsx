import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BookItemContainer = styled.div`
  border: 1px solid  var(--mainColor);
  position: relative;
  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(0.9);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 0.4;
    }

    & .overlay {
      display: block;
      position: absolute;
      top: 50%;
      // transform: translate(-50%, -50%);
      // -ms-transform: translate(-50%, -50%);
      text-align: center;
      transition: .5s ease;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  height: 400px;
  background-position: center;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};
`;

export const BookTitleContainer = styled(Link)`
  display: none;
`;

export const BookTitle = styled.h3`
  line-height: 29px;
  font-size: 0.9em;
`;
