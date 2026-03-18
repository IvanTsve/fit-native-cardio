import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import WorkoutsScreen from '@/screens/workouts/WorkoutsScreen';
import AiTrainerScreen from '@/screens/aiTrainer/AiTrainerScreen';
import AnalyticsScreen from '@/screens/analytics/AnalyticsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0ea653',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="fitness-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="AiTrainer"
        component={AiTrainerScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="chatbox-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="analytics-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}