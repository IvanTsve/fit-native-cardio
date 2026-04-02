import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomWorkout from '@/components/Common/CustomWorkout';

export default function Index() {
    return (
        <View style={styles.container}>
            <CustomWorkout />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});