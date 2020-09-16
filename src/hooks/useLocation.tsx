import {useEffect, useState} from 'react';
import {Accuracy, LocationData, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (shouldTrack: boolean, callback: (location: LocationData) => void) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    let subscriber: { remove(): void } | any;
    const startWatching = async () => {
      try {
        const {granted} = await requestPermissionsAsync();
        subscriber = await watchPositionAsync({
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

    if (shouldTrack) {
      startWatching();
    } else {
      subscriber?.remove();
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };

  }, [shouldTrack, callback]);

  return [error];
}