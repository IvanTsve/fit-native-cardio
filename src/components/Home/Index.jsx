import React from 'react';
import { View } from 'react-native';
import Greetings from '@/components/Home/Greetings';
import Progress from '@/components/Home/Progres';

export default function Home() {
  return (
    <View>
      <Greetings />
      <Progress />
    </View>
  );
}