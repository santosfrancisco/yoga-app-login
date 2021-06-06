import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
