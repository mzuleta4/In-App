import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../../context/AuthContext';
import SpacerComponent from '../../components/SpacerComponent/SpacerComponent';
import {SafeAreaView} from 'react-navigation';

type Props = {}

const AccountScreen: React.FC<Props> = ({}: Props) => {
    const {signout}: any = useContext(AuthContext);
    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text style={{fontSize: 48}}>Account Screen</Text>
        <SpacerComponent>
            <Button title="Sign Out" onPress={signout}/>
        </SpacerComponent>
    </SafeAreaView>;
};

const styles = StyleSheet.create({});
export default AccountScreen;