import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';

jest.mock('react-native-vector-icons/Entypo', () => 'Icon');
jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Login tests', () => {
  it('Should render correctly', () => {
    const container = render(<LoginScreen />);
    expect(container).toMatchSnapshot();
  });
  it('Should login with success and redirect to Home screen', async () => {
    const {getByTestId} = render(<LoginScreen />);

    fireEvent.changeText(getByTestId('usernameInput'), 'user');
    fireEvent.changeText(getByTestId('passwordInput'), '1234');

    fireEvent.press(getByTestId('loginButton'));

    expect(getByTestId('loading')).toBeDefined();
    await waitFor(() => {
      return expect(mockedNavigate).toHaveBeenCalledWith('Home');
    });
  });
  it('Should display a error message if submit without fill username or password', () => {
    const {getByTestId, getByText} = render(<LoginScreen />);
    fireEvent.press(getByTestId('loginButton'));

    expect(getByText('Please fill in username and password.')).toBeDefined();
  });
  it('Should login with success and redirect to Home screen', async () => {
    const {getByTestId, findByText} = render(<LoginScreen />);

    fireEvent.changeText(getByTestId('usernameInput'), 'wronguser');
    fireEvent.changeText(getByTestId('passwordInput'), '1234');

    fireEvent.press(getByTestId('loginButton'));

    expect(getByTestId('loading')).toBeDefined();

    expect(
      await findByText('Username or password is wrong. Try again.'),
    ).toBeDefined();
  });
});
