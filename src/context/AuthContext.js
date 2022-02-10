import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and pass
    // if we sign up, modifty our state, and say that we are authed
    // if signing up fails, reflect error msg somewhere
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //Try to signin
    // Handle success by updating state
    // Handle failure with error
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);
