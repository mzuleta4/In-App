import {Dispatch} from 'react';
import createDataContext from './createDataContext';

enum Types {
  ADD_CURRENT_LOCATION = 'ADD_CURRENT_LOCATION',
  START_RECORDING = 'START_RECORDING',
  STOP_RECORDING = 'STOP_RECORDING',
  ADD_LOCATION = 'ADD_LOCATION',
  CHANGE_NAME = 'CHANGE_NAME'
}

const locationReducer = (state: any, {type, payload}: { type: Types, payload: any }) => {
  switch (type) {
    case Types.ADD_CURRENT_LOCATION:
      return {...state, currentLocation: payload};
    case Types.START_RECORDING:
      return {...state, recording: true};
    case Types.STOP_RECORDING:
      return {...state, recording: false};
    case Types.ADD_LOCATION:
      return {...state, locations: [...state.locations, payload]}
    case Types.CHANGE_NAME:
      return {...state, name: payload}
    default:
      return;
  }
};

const startRecording = (dispatch: Dispatch<any>) => () => {
  dispatch({type: Types.START_RECORDING});
};

const stopRecording = (dispatch: Dispatch<any>) => () => {
  dispatch({type: Types.STOP_RECORDING });
};

const addLocation = (dispatch: Dispatch<any>) => (location: any, recording: boolean) => {
  dispatch({type: Types.ADD_CURRENT_LOCATION, payload: location});
  if(recording){
    dispatch({type: Types.ADD_LOCATION, payload: location});
  }
};

const changeName = (dispatch: Dispatch<any>) => (name: string) => {
  dispatch({type: Types.CHANGE_NAME, payload: name})
}

export const {Context, Provider} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation},
  {recording: false, locations: [], currentLocation: null, name: ''}
);

