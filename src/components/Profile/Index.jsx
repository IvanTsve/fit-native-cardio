import React from 'react';
import { View, Text } from 'react-native';
import Greetings from '@/components/Common/Greetings';

export default function Index() {
  return (
    <View>
      <Greetings title="User Profile" subtitle="Keep up the great work!" showAvatar />
    </View>
  );
}