import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children?: any;
}

const SpacerComponent: React.FC<Props> = ({children}) => {
  return <View style={styles.spacer}>
    {children}
  </View>
};
const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
})
export default SpacerComponent;