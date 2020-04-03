import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryBooks } from '../../redux/directory/directory.selector';

import BookItem from '../book-item/book-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ books }) => (
  <DirectoryContainer>
    {
      books.map(({ id, ...otherBooksProps }) => (
        <BookItem key={id} {...otherBooksProps} />
      ))
    }
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  books: selectDirectoryBooks
})

export default connect(mapStateToProps)(Directory);