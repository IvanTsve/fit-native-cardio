import React from 'react';
import { View, ScrollView } from 'react-native';
import Greetings from '@/components/Common/Greetings';
import WeeklyGoal from '@/components/Profile/WeeklyGoal';
import PersonalInfo from '@/components/Profile/PersonalInfo';
import Settings from '@/components/Profile/Settings';
import { commonStyles } from '@/styles/Common';

export default function Index() {
  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <ScrollView>
      <Greetings title="User Profile" subtitle="Keep up the great work!" showAvatar />
      <View style={[commonStyles.mainContainer, { paddingTop: 30, paddingBottom: 40 }]}>
        <WeeklyGoal current={700} goal={2000} />
        <PersonalInfo weight={75} weeklyGoal={2000} totalWorkouts={5} />
        <Settings onLogout={handleLogout} />
      </View>
    </ScrollView>
  );
}