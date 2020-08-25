import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthForm from '../../components/AuthForm/AuthForm';
import NavLink from '../../components/NavLink/NavLink';
import {Context as AuthContext} from '../../context/AuthContext';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../models/RootStackParamList';
import {NavigationEvents} from 'react-navigation';

type Props = StackScreenProps<RootStackParamList>;

const SigninScreen = ({navigation}: Props) => {
  const {state, signin, clearErrorMessage}: any = useContext(AuthContext);

  return <View style={styles.container}>
    <NavigationEvents onWillBlur={clearErrorMessage} />
    <AuthForm headerText="Sign in to Your Account" errorMessage={state.errorMessage} submit={signin}
              submitButtonText="Sign in"/>
    <NavLink routeName="Signup" text="Dont have an account? Sign up instead" navigation={navigation}/>
  </View>;
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;