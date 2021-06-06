import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 45px;
  margin-right: 45px;
`;

export const Logo = styled.Image``;

export const LogoContainer = styled.View`
  height: 335px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 46px;

  background: #f7f7f7;
  box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  padding: 16px;

  margin-bottom: 21px;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 13px;
  color: #000;
  align-self: flex-end;
`;

export const ButtonContainer = styled.View`
  margin-top: 38px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const SignupText = styled.Text`
  font-size: 15px;
  color: #969696;
  align-self: center;
  margin-top: 21px;
`;

export const SignupLink = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const ExternalSignOnContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;

  margin-top: 18px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const OrText = styled.Text`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-top: 64px;

  color: #000000;
`;

export const ErrorMessage = styled.Text`
  color: red;
  align-self: center;
  margin: 8px;
`;
