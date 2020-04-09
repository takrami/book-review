import React from 'react';

import { BookItemContainer, BackgroundImageContainer, BookTitleContainer, BookTitle } from './book-item.styles';

const BookItem = ({ title, author, image }) => (
  <BookItemContainer>
    <BackgroundImageContainer image={image} className="background-image" />
    <BookTitleContainer className="overlay">
      <BookTitle>{title}</BookTitle>
    </BookTitleContainer>
  </BookItemContainer>
);

export default BookItem;