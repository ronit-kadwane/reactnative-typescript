import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RootView from '../../components/RootView';
import SignIn from '../../components/SignIn';
import { LoginState } from '../../models/reducers/login';
import { requestLogin } from '../../store/actions/loginActions';

import styles from './styles';

interface IState {
  loginReducer: LoginState;
}

const Auth: React.FC = () => {
  const dispatch = useDispatch();

  const onSignIn = ({ email, password }) => {
    dispatch(requestLogin(email, password));
  };

  return (
    <RootView>
      <SignIn onSignPress={onSignIn} />
    </RootView>
  );
};

export default Auth;
