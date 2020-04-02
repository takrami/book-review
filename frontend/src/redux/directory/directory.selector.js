import { createSelector } from 'reselect';
import { createStore } from 'redux';

const selectDirectory = state => state.directory;

export const selectDirectoryBooks = createSelector(
  [selectDirectory],
  directory => directory.books
);