import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const suggestions = [
  { id: 1, label: '💪 Workout plan', prompt: 'Create a workout plan for me' },
  { id: 2, label: '🔥 Burn calories', prompt: 'What exercises burn the most calories?' },
  { id: 3, label: '🥗 Nutrition tips', prompt: 'Give me some nutrition tips for muscle gain' },
  { id: 4, label: '🧘 Recovery', prompt: 'How should I recover after an intense workout?' },
  { id: 5, label: '🏃 Cardio', prompt: 'Suggest a cardio routine for beginners' },
];

export default function QuickActions({ onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {suggestions.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.chip}
          onPress={() => onSelect(item.prompt)}
          activeOpacity={0.7}
        >
          <Text style={styles.chipText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  chip: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  chipText: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '500',
  },
});
