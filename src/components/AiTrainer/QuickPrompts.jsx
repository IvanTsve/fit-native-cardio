import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '@/styles/Common';

const PROMPTS = [
  { id: 1, icon: 'nutrition-outline', label: 'What should I eat after this workout?' },
  { id: 2, icon: 'pulse-outline', label: 'Adjust this plan for knee discomfort.' },
  { id: 3, icon: 'moon-outline', label: 'Give me a 10-minute recovery routine.' },
];

export default function QuickPrompts({ onSelectPrompt }) {
  return (
    <View style={styles.container}>
      <Text style={commonStyles.sectionTitle}>Ask AI Coach</Text>
      <View style={styles.list}>
        {PROMPTS.map((prompt) => (
          <TouchableOpacity
            key={prompt.id}
            style={styles.promptCard}
            onPress={() => onSelectPrompt(prompt.label)}
            activeOpacity={0.85}
          >
            <Ionicons name={prompt.icon} size={20} color="#12C660" />
            <Text style={styles.promptText}>{prompt.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  list: {
    gap: 10,
  },
  promptCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  promptText: {
    flex: 1,
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
});
