import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';

type Props = any;

const TrackListScreen: React.FC<Props> = ({navigation}) => {
  return <>
    <Text style={{fontSize: 48}}>TrackList Screen</Text>
    <Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
  </>;
};

const styles = StyleSheet.create({});
export default TrackListScreen;