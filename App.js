import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import  * as CommonStyles from './src/styles/Common';

import { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { supabase } from './lib/supabase'


global.commonStyles = CommonStyles.commonStyles;



export default function App() {

  const [instruments, setInstruments] = useState([])
  useEffect(() => {
    getInstruments()
  }, [])
  async function getInstruments() {
    const { data } = await supabase.from('instruments').select()
    setInstruments(data)
  }
  
  return (
    <View style={[global.commonStyles.container, {backgroundColor: '#c3c4c7'}]}>
      {/* <StatusBar style="auto" backgroundColor="#12C660" />  */}
      <StatusBar hidden /> 
      <RootNavigator />
    </View>
  );
}