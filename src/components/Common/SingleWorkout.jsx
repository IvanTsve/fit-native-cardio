import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SingleWorkout({workout}) {
    return (
        <View style={styles.container}>
            <Text>{workout.name}</Text>
            <Text>{workout.duration}</Text>
            <Text>{workout.calories}</Text>
            <Text>{workout.steps}</Text>
            <Text>{workout.image}</Text>
            <Text>{workout.date}</Text>
            <Text>{workout.time}</Text>
            <Text>{workout.distance}</Text>
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
});