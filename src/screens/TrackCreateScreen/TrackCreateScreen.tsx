import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text} from 'react-native-elements';
import Map from '../../components/Map/Map';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

type Props = {}

const TrackCreateScreen = ({}: Props) => {

  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const {granted} = await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log(location)
      })
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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