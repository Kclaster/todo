import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = action => {
  return {
    type: SIGN_IN,
    payload: action
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
