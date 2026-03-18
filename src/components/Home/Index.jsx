import React from 'react';
import { View } from 'react-native';
import Greetings from '@/components/Home/Greetings';
import Progress from '@/components/Home/Progres';
import WorkoutStats from '@/components/Home/WorkoutStats';
import MainButton from '@/components/Common/MainButton';
import { commonStyles } from '@/styles/Common';
export default function Home() {
  const handleStartWorkout = () => {
    console.log('Start Workout');
  };
  return (
    <View>
      <Greetings />
      <View style={{ marginHorizontal: 30, gap: 30 }}>
        <Progress />
        <WorkoutStats />
        <MainButton
          styles={{ buttonContainer: commonStyles.buttonContainer, buttonText: commonStyles.buttonText }}
          text="Start Workout"
          onPress={handleStartWorkout}
        />
      </View>
    </View>
  );
}