import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryBooks } from '../../redux/directory/directory.selector';

import BookItem from '../book-item/book-item.component';


const Directory = ({ books }) => (
  <div>
    {
      books.map(({ id, ...otherBooksProps }) => (
        <BookItem key={id} {...otherBooksProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  books: selectDirectoryBooks
})

export default connect(mapStateToProps)(Directory);