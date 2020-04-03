import React from 'react';

import { BookItemContainer, BackgroundImageContainer } from './book-item.styles';

const BookItem = ({ title, author, image }) => (
  <BookItemContainer>
    <BackgroundImageContainer image={image} />
  </BookItemContainer>
);

export default BookItem;