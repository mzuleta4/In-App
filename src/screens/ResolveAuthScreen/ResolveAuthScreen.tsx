import React, {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../../context/AuthContext';

type Props = {}

const ResolveAuthScreen = ({}: Props) => {
    const {tryLocalSignin}: any = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, [])

    return null;
}

export default ResolveAuthScreen