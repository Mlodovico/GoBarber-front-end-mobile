import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { View, StatusBar } from 'react-native';

import AuthRoutes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#ff9000" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <AuthRoutes />
    </View>
  </ NavigationContainer>

);

export default App;
