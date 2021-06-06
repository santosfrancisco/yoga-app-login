import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
}

const Button = ({text, onPress, isLoading, ...rest}: ButtonProps) => {
  return (
    <S.StyledTouchableOpacity onPress={onPress} disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator testID="loading" />
      ) : (
        <S.StyledText>{text}</S.StyledText>
      )}
    </S.StyledTouchableOpacity>
  );
};

export default Button;
