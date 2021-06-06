import {useNavigation} from '@react-navigation/core';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button';

import * as S from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <S.Container>
      <S.Doodles source={require('../../assets/doodles.png')} />
      <S.DotsContainer>
        <Entypo name="dots-three-horizontal" size={40} />
      </S.DotsContainer>
      <S.YogaText>
        “Yoga is the art work of awareness on the canvas of body, mind, and
        soul.”
      </S.YogaText>
      <S.ButtonContainer>
        <Button
          text="Get Started"
          onPress={() => navigation.navigate('Login')}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default HomeScreen;
