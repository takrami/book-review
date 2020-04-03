import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectoryBooks = createSelector(
  [selectDirectory],
  directory => directory.books
);