import { createSelector } from 'reselect';

const rootState = state => state.login;

export const loadingLogin = createSelector(
  rootState,
  item => item.isLoading
);
export const acssetToken = createSelector(
  rootState,
  item => item.accessToken
);
export const errorToken = createSelector(
  rootState,
  item => item.error
)
