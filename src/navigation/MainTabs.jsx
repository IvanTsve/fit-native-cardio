import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import WorkoutsScreen from '@/screens/workouts/WorkoutsScreen';
import AiTrainerScreen from '@/screens/aiTrainer/AiTrainerScreen';
import AnalyticsScreen from '@/screens/analytics/AnalyticsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Workouts" component={WorkoutsScreen} />
      <Tab.Screen name="AiTrainer" component={AiTrainerScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}