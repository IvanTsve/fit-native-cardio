import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';

function StatItem({ label, value, unit }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.value}>
        {value}
        <Text style={styles.unit}> {unit}</Text>
      </Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

export default function PersonalInfo({ weight = 75, weeklyGoal = 2000, totalWorkouts = 5 }) {
  return (
    <View style={styles.card}>
      <Text style={commonStyles.sectionTitle}>Personal Info</Text>
      <View style={styles.row}>
        <StatItem label="Weight" value={weight} unit="kg" />
        <View style={styles.divider} />
        <StatItem label="Weekly Goal" value={weeklyGoal} unit="cal" />
        <View style={styles.divider} />
        <StatItem label="Total Workouts" value={totalWorkouts} unit="" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    gap: 16,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.06)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#12C660',
  },
  unit: {
    fontSize: 13,
    fontWeight: '400',
    color: '#999',
  },
  label: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#E0E0E0',
  },
});
