import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomWorkout() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Custom Workout</Text>
            <Text style={styles.subtitle}>Create a custom workout to suit your needs</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    subtitle: {
        fontSize: 16,
        color: '#000',
    },
});