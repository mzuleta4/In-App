import React, {useCallback, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationEvents, SafeAreaView, withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import Map from '../../components/Map/Map';
import {LocationData} from 'expo-location';
import {Context as LocationContext} from '../../context/LocationContext';
import useLocation from '../../hooks/useLocation';
import TrackForm from '../../components/TrackForm/TrackForm';

type Props = {
  isFocused: boolean;
}

const TrackCreateScreen = ({isFocused}: Props) => {
  const {state, addLocation}: any = useContext(LocationContext);

  const callback = useCallback((location: any) => {
    addLocation(location, state.recording)
  }, [state.recording])

  const [error] = useLocation(isFocused || state.recording , callback);

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <Text h2>
        Create a Track
      </Text>
      <Map/>
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);