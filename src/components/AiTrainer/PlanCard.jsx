import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainButton from '@/components/Common/MainButton';
import { commonStyles } from '@/styles/Common';

const PLAN_BY_FOCUS = {
  strength: {
    title: 'Upper Body + Core',
    duration: '35 min',
    calories: '280 kcal',
    icon: 'barbell-outline',
  },
  cardio: {
    title: 'Intervals + Cooldown',
    duration: '30 min',
    calories: '320 kcal',
    icon: 'walk-outline',
  },
  recovery: {
    title: 'Mobility & Stretch',
    duration: '20 min',
    calories: '120 kcal',
    icon: 'leaf-outline',
  },
};

export default function PlanCard({ focus, onStartSession }) {
  const plan = PLAN_BY_FOCUS[focus] || PLAN_BY_FOCUS.strength;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconWrap}>
          <Ionicons name={plan.icon} size={24} color="#12C660" />
        </View>
        <View style={styles.titleWrap}>
          <Text style={styles.smallLabel}>Recommended session</Text>
          <Text style={styles.title}>{plan.title}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Ionicons name="time-outline" size={18} color="#12C660" />
          <Text style={styles.statValue}>{plan.duration}</Text>
        </View>
        <View style={styles.statItem}>
          <Ionicons name="flame-outline" size={18} color="#12C660" />
          <Text style={styles.statValue}>{plan.calories}</Text>
        </View>
      </View>

      <MainButton
        styles={{ buttonContainer: commonStyles.buttonContainer, buttonText: commonStyles.buttonText }}
        text="Start AI Session"
        onPress={onStartSession}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E9FBF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrap: {
    flex: 1,
  },
  smallLabel: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statValue: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '600',
  },
});
