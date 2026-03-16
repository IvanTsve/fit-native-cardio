import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '@/styles/Common';

export default function DummyScreen({ name }) {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>{name}</Text>
    </View>
  );
}
