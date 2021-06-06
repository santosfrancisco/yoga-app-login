import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-left: 40px;
  margin-right: 40px;
`;

export const Doodles = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  max-width: 350px;
`;

export const DotsContainer = styled.View`
  margin-top: 104px;
  margin-bottom: 40px;
`;

export const YogaText = styled.Text`
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #000000;
`;

export const ButtonContainer = styled.View`
  margin-top: 40px;
  width: 100%;
`;
