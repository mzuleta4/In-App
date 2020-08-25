import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import SpacerComponent from '../SpacerComponent/SpacerComponent';
import {Button, Input, Text} from 'react-native-elements';

type Props = {
  headerText: string;
  errorMessage: string;
  submit: ({email, password}: {email: string, password: string}) => void;
  submitButtonText: string;
}

const AuthForm = ({headerText, errorMessage, submit, submitButtonText}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <SpacerComponent>
        <Text h3>
          {headerText}
        </Text>
      </SpacerComponent>

      <Input label="Email" value={email} onChangeText={setEmail}
             autoCapitalize="none" autoCorrect={false}/>
      <SpacerComponent/>
      <Input label="Password" secureTextEntry value={password} onChangeText={setPassword}
             autoCapitalize="none" autoCorrect={false}/>

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <SpacerComponent>
        <Button title={submitButtonText} onPress={() => submit({email, password})}/>
      </SpacerComponent>
    </>
  );
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
  },
  link: {
    color: 'blue',
    marginLeft: 12
  }
});

export default AuthForm;
