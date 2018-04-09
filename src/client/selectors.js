import { createSelector } from 'reselect';

const selectName = state => state.get('name');

export const nameSelector = createSelector(selectName, result =>
  result
);
