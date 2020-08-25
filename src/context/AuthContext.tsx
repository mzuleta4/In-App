import createDataContext from './createDataContext';
import {Dispatch} from 'react';
import {signinService, signUpService} from '../services/AuthServices';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';

enum Type {
  ADD_ERROR = 'ADD_ERROR',
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
  CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE',
  SIGNOUT = 'SIGNOUT'
}

const authReducer = (state: any, {type, payload}: any) => {
  switch (type) {
    case Type.ADD_ERROR:
      return {...state, errorMessage: payload};
    case Type.SIGNUP:
      return {...state, token: payload, errorMessage: ''};
    case Type.SIGNIN:
      return {...state, token: payload, errorMessage: ''};
    case Type.CLEAR_ERROR_MESSAGE:
      return {...state, errorMessage: ''};
    case Type.SIGNOUT:
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch: Dispatch<any>) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: Type.SIGNIN, payload: token});
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = (dispatch: Dispatch<any>) => () => {
  dispatch({type: Type.CLEAR_ERROR_MESSAGE});
};

const signin = (dispatch: Dispatch<any>) => {
  return async ({email, password}: { email: string, password: string }) => {
    try {
      const {token} = await signinService(email, password);
      await AsyncStorage.setItem('token', token);
      dispatch({type: Type.SIGNIN, payload: token});

      navigate('TrackList');
    } catch (err) {
      dispatch({type: Type.ADD_ERROR, payload: 'Something went wrong with sign in.'});
    }
  };
};
const signup = (dispatch: Dispatch<any>) => {
  return async ({email, password}: { email: string, password: string }) => {
    try {
      const {token} = await signUpService(email, password);
      await AsyncStorage.setItem('token', token);
      dispatch({type: Type.SIGNUP, payload: token});

      navigate('TrackList');
    } catch (err) {
      dispatch({type: Type.ADD_ERROR, payload: 'Something went wrong with sign up.'});
    }

  };
};

const signout = (dispatch: Dispatch<any>) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: Type.SIGNOUT});
  navigate('loginFlow');
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''}
);