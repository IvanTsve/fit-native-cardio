import React from 'react';
import { View } from 'react-native';
import Greetings from '@/components/Home/Greetings';
import Progress from '@/components/Home/Progres';
import WorkoutStats from '@/components/Home/WorkoutStats';

export default function Home() {
  return (
    <View>
      <Greetings />
      <View style={{ marginHorizontal: 30, gap: 30 }}>
        <Progress />
        <WorkoutStats />
      </View>
    </View>
  );
}