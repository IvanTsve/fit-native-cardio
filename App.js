import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import  * as CommonStyles from './src/styles/Common';

global.commonStyles = CommonStyles.commonStyles;



export default function App() {
  return (
    <View style={[global.commonStyles.container, {backgroundColor: '#c3c4c7'}]}>
      {/* <StatusBar style="auto" backgroundColor="#12C660" />  */}
      <StatusBar hidden /> 
      <RootNavigator />
    </View>
  );
}