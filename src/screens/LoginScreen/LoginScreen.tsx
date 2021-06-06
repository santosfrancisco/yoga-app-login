import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import * as S from './styles';

const LoginScreen = () => {
  const {navigate} = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = () => {
    setErrorMessage('');
    if (!username || !password) {
      setErrorMessage('Please fill in username and password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (username === 'user' && password === '1234') {
        navigate('Home');
      } else {
        setErrorMessage('Username or password is wrong. Try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo source={require('../../assets/logo.png')} />
      </S.LogoContainer>

      <S.Input
        testID="usernameInput"
        placeholder="username"
        textContentType="username"
        keyboardType="name-phone-pad"
        value={username}
        onChangeText={setUsername}
      />
      <S.Input
        testID="passwordInput"
        placeholder="password"
        secureTextEntry
        textContentType="password"
        value={password}
        onChangeText={setPassword}
      />

      <S.ForgotPasswordText onPress={() => console.log('forgot')}>
        forgot password?
      </S.ForgotPasswordText>
      {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
      <S.ButtonContainer>
        <Button
          onPress={handleSubmit}
          text="LogIn"
          isLoading={isLoading}
          testID="loginButton"
        />
      </S.ButtonContainer>
      <S.SignupText>
        Don’t have an account,{' '}
        <S.SignupLink onPress={() => console.log('signup')}>
          Sign Up
        </S.SignupLink>{' '}
        now.
      </S.SignupText>
      <S.OrText>Or</S.OrText>
      <S.ExternalSignOnContainer>
        <AntDesign name="google" size={40} />
        <Entypo name="flickr-with-circle" size={40} />
        <Entypo name="facebook" size={40} />
      </S.ExternalSignOnContainer>
    </S.Container>
  );
};

export default LoginScreen;
