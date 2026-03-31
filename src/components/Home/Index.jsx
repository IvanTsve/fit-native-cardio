import React from 'react';
import { View, ScrollView } from 'react-native';
import Greetings from '@/components/Common/Greetings';
import Progress from '@/components/Home/Progres';
import WorkoutStats from '@/components/Common/WorkoutStats';
import MainButton from '@/components/Common/MainButton';
import { commonStyles } from '@/styles/Common';
import RecentWorkouts from '@/components/Home/RecentWorkouts';
export default function Home() {
  const handleStartWorkout = () => {
    console.log('Start Workout');
  };
  const hours = new Date().getHours();

  return (
    <ScrollView>
      <Greetings title={`Good ${hours < 12 ? 'morning' : 'afternoon'}`} subtitle="Welcome back to your fitness journey" />
      <View style={commonStyles.mainContainer}>
        <Progress />
        <WorkoutStats />
        <MainButton
          styles={{ buttonContainer: commonStyles.buttonContainer, buttonText: commonStyles.buttonText }}
          text="Start Workout"
          onPress={handleStartWorkout}
        />
        <RecentWorkouts />
      </View>
    </ScrollView>
  );
}