
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainTabs from './MainTabs';

export default function RootNavigator() {

  const user = true;

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
