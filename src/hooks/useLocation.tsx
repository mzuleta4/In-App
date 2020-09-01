import {useContext, useEffect, useState} from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import {Accuracy, LocationData, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (callback: (location: LocationData) => void) => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      const {granted} = await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, callback);
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

  return [error];
}