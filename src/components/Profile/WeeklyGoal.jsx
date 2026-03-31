import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';

export default function WeeklyGoal({ current = 0, goal = 2000 }) {
  const progress = Math.min(current / goal, 1);

  return (
    <View style={styles.card}>
      <Text style={commonStyles.sectionTitle}>Weekly Goal</Text>
      <View style={styles.labelRow}>
        <Text style={styles.current}>{current} cal</Text>
        <Text style={styles.goal}>/ {goal} cal</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.hint}>{Math.round(progress * 100)}% of your weekly calorie goal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    gap: 12,
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.06)',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  current: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#12C660',
  },
  goal: {
    fontSize: 16,
    color: '#999',
  },
  track: {
    height: 12,
    backgroundColor: '#E8F5E9',
    borderRadius: 6,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#12C660',
    borderRadius: 6,
  },
  hint: {
    fontSize: 13,
    color: '#999',
  },
});
