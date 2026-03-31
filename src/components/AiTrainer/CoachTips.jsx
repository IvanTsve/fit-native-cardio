import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '@/styles/Common';

const TIPS_BY_FOCUS = {
  strength: [
    'Use a controlled tempo to improve form and reduce risk.',
    'Rest for 60-90 seconds between heavy sets.',
    'Aim for at least 25g protein in your next meal.',
  ],
  cardio: [
    'Keep your pace conversational on recovery intervals.',
    'Hydrate before and after high-intensity blocks.',
    'Cool down for 5 minutes to normalize heart rate.',
  ],
  recovery: [
    'Breathe slowly to unlock better mobility range.',
    'Hold each stretch for at least 30 seconds.',
    'A short evening walk supports recovery quality.',
  ],
};

export default function CoachTips({ focus }) {
  const tips = useMemo(() => TIPS_BY_FOCUS[focus] || TIPS_BY_FOCUS.strength, [focus]);

  return (
    <View style={styles.container}>
      <Text style={commonStyles.sectionTitle}>Coach Tips</Text>
      <View style={styles.card}>
        {tips.map((tip) => (
          <View key={tip} style={styles.tipRow}>
            <Ionicons name="checkmark-circle" size={18} color="#12C660" />
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  tipText: {
    flex: 1,
    color: '#111827',
    fontSize: 14,
    lineHeight: 20,
  },
});
