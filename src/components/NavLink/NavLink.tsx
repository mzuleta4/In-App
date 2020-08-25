import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Text} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParamList';

type Props = {
  routeName: any;
  navigation: StackNavigationProp<RootStackParamList>;
  text: string;
}

const NavLink = ({routeName, text, navigation}: Props) => {

  return <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
    <Text style={styles.link}>{text}</Text>
  </TouchableOpacity>;
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    marginLeft: 12
  }
});

export default withNavigation(NavLink);
