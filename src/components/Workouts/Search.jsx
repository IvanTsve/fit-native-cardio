import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search({onChangeText}) {
    const [focused, setFocused] = useState(false);

    return (
        <View style={[styles.searchSection, focused && styles.searchSectionFocused]}>
            <Ionicons name="search-outline" size={22} color="#12C660" />
            <TextInput
                placeholder="Search workouts"
                placeholderTextColor="#757575"
                style={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChangeText={onChangeText}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#f8fafc',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    },
    searchSectionFocused: {
        borderColor: '#12C660',
    },
    input: {
        flex: 1,
        paddingVertical: 0,
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: 16,
        color: '#000',
        backgroundColor: 'transparent',
    },
})

