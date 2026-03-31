import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PROMPTS = [
    { icon: 'barbell-outline', label: 'Create a workout plan' },
    { icon: 'nutrition-outline', label: 'Nutrition tips' },
    { icon: 'body-outline', label: 'Cardio routine' },
    { icon: 'flame-outline', label: 'Burn more calories' },
    { icon: 'bed-outline', label: 'Recovery advice' },
    { icon: 'trending-up-outline', label: 'Track my progress' },
];

export default function SuggestedPrompts({ onSelect }) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            {PROMPTS.map((prompt) => (
                <TouchableOpacity
                    key={prompt.label}
                    style={styles.chip}
                    onPress={() => onSelect(prompt.label)}
                    activeOpacity={0.7}
                >
                    <Ionicons name={prompt.icon} size={16} color="#12C660" />
                    <Text style={styles.chipText}>{prompt.label}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 8,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#E0E0E0',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    chipText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#0f172a',
    },
});
