import React, {useContext, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Context as AuthContext} from '../../context/AuthContext';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParamList';
import AuthForm from '../../components/AuthForm/AuthForm';
import NavLink from '../../components/NavLink/NavLink';
import {NavigationEvents} from 'react-navigation';

type Props = StackScreenProps<RootStackParamList>;

const SignupScreen = ({navigation}: Props) => {

  const {state, signup, clearErrorMessage}: any = useContext(AuthContext);

  return <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage} />
    <AuthForm headerText="Sign up for Tracker" errorMessage={state.errorMessage} submit={signup}
              submitButtonText="Sign up"/>
    <NavLink routeName="Signin" text="Already have an account? Sign in instead" navigation={navigation}/>
  </View>;
};


SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 10
  }
});
export default SignupScreen;