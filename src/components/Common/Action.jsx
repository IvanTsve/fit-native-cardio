import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles } from '@/styles/Common';

export default function Action({ title, onPress, active = false, style }) {
    return (
        <TouchableOpacity
            style={[active ? commonStyles.buttonContainer : styles.inactive, style]}
            onPress={onPress}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
        >
            <Text style={active ? commonStyles.buttonText : styles.inactiveText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    inactive: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    inactiveText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
