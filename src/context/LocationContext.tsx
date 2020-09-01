import {Dispatch} from 'react';
import createDataContext from './createDataContext';

enum Types {
 ADD_CURRENT_LOCATION = 'ADD_CURRENT_LOCATION'
}

const locationReducer = (state: any, {type, payload}: { type: Types, payload: any }) => {
  switch (type) {
    case Types.ADD_CURRENT_LOCATION:
      return {...state, currentLocation: payload};
    default:
      return;
  }
};

const startRecording = (dispatch: Dispatch<any>) => () => {

};

const stopRecording = (dispatch: Dispatch<any>) => () => {

};

const addLocation = (dispatch: Dispatch<any>) => (location: any) => {
  dispatch({type: Types.ADD_CURRENT_LOCATION, payload: location})
};

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {recording: false, locations: [], currentLocation: null}
);

