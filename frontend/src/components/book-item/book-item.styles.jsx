import styled from 'styled-components';

export const BookItemContainer = styled.div`
  border: 1px solid gray;
`;

export const BackgroundImageContainer = styled.div`
  // width: 220px;
  
  height: 400px;
  background-position: center;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};
`;