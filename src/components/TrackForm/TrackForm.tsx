import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import SpacerComponent from '../SpacerComponent/SpacerComponent';
import {Context as LocationContext} from '../../context/LocationContext';

type Props = {}

const TrackForm = ({}: Props) => {

  const {state: {name, recording, locations}, startRecording, stopRecording, changeName}: any = useContext(LocationContext);

  return <>
    <SpacerComponent>
      <Input value={name} placeholder="Enter name" onChangeText={changeName}/>
    </SpacerComponent>
    <SpacerComponent>
      {recording ? <Button title="Stop Recording" onPress={stopRecording}/> :
        <Button title="Start Recording" onPress={startRecording}/>}
    </SpacerComponent>
    <SpacerComponent>
      {
        !recording && locations.length ? <Button title="Save Recording"/> : null
      }
    </SpacerComponent>
  </>;
};

const styles = StyleSheet.create({});

export default TrackForm;
