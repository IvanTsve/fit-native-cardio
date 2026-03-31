import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AiQuickPrompts({ prompts, onSelect }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>Try asking</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {prompts.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.chip}
            onPress={() => onSelect(item.text)}
            activeOpacity={0.85}
            accessibilityRole="button"
          >
            <Text style={styles.chipText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollContent: {
    gap: 10,
    paddingRight: 4,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  chipText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
});
