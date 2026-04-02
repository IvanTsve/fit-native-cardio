import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Greetings from '@/components/Common/Greetings';
import Progress from '@/components/Home/Progres';
import WorkoutStats from '@/components/Common/WorkoutStats';
import MainButton from '@/components/Common/MainButton';
import { commonStyles } from '@/styles/Common';
import RecentWorkouts from '@/components/Home/RecentWorkouts';
export default function Home() {
  const navigation = useNavigation();
  const handleStartWorkout = () => {
    console.log('Start Workout');
  };
  const handleAddWorkout = () => {
    navigation.navigate('CustomWorkout');
  };
  const hours = new Date().getHours();

  return (
    <ScrollView>
      <Greetings title={`Good ${hours < 12 ? 'morning' : 'afternoon'}`} subtitle="Welcome back to your fitness journey" />
      <View style={commonStyles.mainContainer}>
        <Progress />
        <WorkoutStats />
        <View style={{flexDirection: 'row', gap: 10, width: '100%', justifyContent: 'space-between'}}>
          <MainButton
            styles={{ buttonContainer: [commonStyles.buttonContainer, {flex: 1}], buttonText: commonStyles.buttonText }}
            text="Start Workout"
            onPress={handleStartWorkout}
          />
          <MainButton
            styles={{ buttonContainer: [commonStyles.buttonContainer, {flex: 1}], buttonText: commonStyles.buttonText }}
            text="Add Workout"
            onPress={handleAddWorkout}
          />
        </View>
        <RecentWorkouts />
      </View>
    </ScrollView>
  );
}