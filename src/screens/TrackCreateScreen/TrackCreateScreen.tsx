import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text} from 'react-native-elements';
import Map from '../../components/Map/Map';
import {LocationData} from 'expo-location';
import {Context as LocationContext} from '../../context/LocationContext';
import useLocation from '../../hooks/useLocation';

type Props = {}

const TrackCreateScreen = ({}: Props) => {
  const {addLocation}: any = useContext(LocationContext);

  const [error] = useLocation(addLocation);


  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>
        Create a Track
      </Text>
      <Map/>
      {error ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;